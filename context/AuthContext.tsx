
"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

export interface Subscription {
    plan: "Basic" | "Standard" | "Ultra"
    price: number
    paymentId: string
    orderId: string
    purchasedAt: string
    status: "active"
}

export interface User {
    id: string
    name: string
    email: string
    createdAt: string
    subscription: Subscription | null
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    signup: (name: string, email: string, password: string) => Promise<void>
    logout: () => void
    updateSubscription: (subscription: Subscription) => void
    isAuthenticated: boolean
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const STORAGE_KEY = 'streamwoo_auth_user'

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Initialize from local storage
        const storedUser = localStorage.getItem(STORAGE_KEY)
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (e) {
                console.error("Failed to parse user from storage", e)
                localStorage.removeItem(STORAGE_KEY)
            }
        }
        setIsLoading(false)
    }, [])

    const login = async (email: string, password: string) => {
        setIsLoading(true)
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800))

        if (email === "demo@streamwoo.com" && password === "Demo@1234") {
            const demoUser: User = {
                id: "demo-user-123",
                name: "Demo User",
                email: "demo@streamwoo.com",
                createdAt: new Date().toISOString(),
                subscription: null
            }
            setUser(demoUser)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser))
            setIsLoading(false)
            return
        }

        // Check if user exists in "database" (localStorage for this demo)
        const usersDB = JSON.parse(localStorage.getItem('streamwoo_users_db') || '[]')
        const foundUser = usersDB.find((u: any) => u.email === email && u.password === password)

        if (foundUser) {
            const { password, ...safeUser } = foundUser
            setUser(safeUser)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser))
        } else {
            setIsLoading(false)
            throw new Error("Invalid email or password")
        }
        setIsLoading(false)
    }

    const signup = async (name: string, email: string, password: string) => {
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 800))

        const usersDB = JSON.parse(localStorage.getItem('streamwoo_users_db') || '[]')

        if (usersDB.some((u: any) => u.email === email)) {
            setIsLoading(false)
            throw new Error("User already exists")
        }

        const newUser = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            password, // In a real app, never store plain text passwords
            createdAt: new Date().toISOString(),
            subscription: null
        }

        usersDB.push(newUser)
        localStorage.setItem('streamwoo_users_db', JSON.stringify(usersDB))

        const { password: _, ...safeUser } = newUser
        setUser(safeUser)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser))
        setIsLoading(false)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem(STORAGE_KEY)
    }

    const updateSubscription = (subscription: Subscription) => {
        if (!user) return

        const updatedUser = { ...user, subscription }
        setUser(updatedUser)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser))

        // Also update in "DB"
        const usersDB = JSON.parse(localStorage.getItem('streamwoo_users_db') || '[]')
        const userIndex = usersDB.findIndex((u: any) => u.id === user.id)
        if (userIndex !== -1) {
            usersDB[userIndex].subscription = subscription
            localStorage.setItem('streamwoo_users_db', JSON.stringify(usersDB))
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            login,
            signup,
            logout,
            updateSubscription,
            isAuthenticated: !!user,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
