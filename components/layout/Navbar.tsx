"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, User as UserIcon, LogOut, LayoutDashboard, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const { user, isAuthenticated, logout } = useAuth()
    const router = useRouter()
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleLogout = () => {
        logout()
        setIsProfileOpen(false)
        setIsOpen(false)
        router.push("/")
    }

    return (
        <>
            <nav className="fixed top-0 w-full z-[100] transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-20 md:h-24">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 z-50">
                            <img src="/thumbnails/logo.jpeg" alt="Streamwoo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/" className="text-gray-700 hover:text-streamwoo-purple font-medium transition-colors">Home</Link>
                            <Link href="/about" className="text-gray-700 hover:text-streamwoo-purple font-medium transition-colors">About</Link>
                            <Link href="/pricing" className="text-gray-700 hover:text-streamwoo-purple font-medium transition-colors">Pricing</Link>
                            <Link href="/contact" className="text-gray-700 hover:text-streamwoo-purple font-medium transition-colors">Contact</Link>
                        </div>

                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            {isAuthenticated && user ? (
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="flex items-center gap-2 pl-3 pr-1 py-1 rounded-full border border-gray-200 hover:border-gray-300 transition-all bg-white"
                                    >
                                        <span className="text-sm font-semibold text-gray-700">{user.name.split(' ')[0]}</span>
                                        <div className="w-9 h-9 bg-gradient-to-br from-streamwoo-purple to-streamwoo-pink rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {user.name.charAt(0)}
                                        </div>
                                    </button>

                                    {isProfileOpen && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                                            <div className="px-4 py-3 border-b border-gray-100 mb-1">
                                                <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                                                <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                            </div>
                                            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-streamwoo-purple transition-colors">
                                                <LayoutDashboard className="w-4 h-4" />
                                                Dashboard
                                            </Link>
                                            <Link href="/account" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-streamwoo-purple transition-colors">
                                                <UserIcon className="w-4 h-4" />
                                                My Account
                                            </Link>
                                            <div className="border-t border-gray-100 my-1"></div>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a href="" download="app-release-61.apk">
                                    <Button className="shadow-lg shadow-streamwoo-purple/20 hover:shadow-streamwoo-purple/40 transition-all duration-300">Download App</Button>
                                </a>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="w-7 h-7 text-gray-800" /> : <Menu className="w-7 h-7 text-gray-800" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={cn("fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center p-8 transition-transform duration-300 md:hidden", isOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="flex flex-col gap-6 w-full max-w-sm text-center">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800 hover:text-streamwoo-purple">Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800 hover:text-streamwoo-purple">About</Link>
                    <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800 hover:text-streamwoo-purple">Pricing</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800 hover:text-streamwoo-purple">Contact</Link>

                    <hr className="border-gray-100 my-2" />

                    {isAuthenticated && user ? (
                        <>
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-streamwoo-purple to-streamwoo-pink rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {user.name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900">{user.name}</p>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                            </div>
                            <Link href="/dashboard" onClick={() => setIsOpen(false)} className="w-full"><Button variant="outline" className="w-full">Dashboard</Button></Link>
                            <Link href="/account" onClick={() => setIsOpen(false)} className="w-full"><Button variant="outline" className="w-full">Account</Button></Link>
                            <Button variant="ghost" className="w-full text-red-500 hover:bg-red-50 hover:text-red-600" onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <a href="" download="app-release-61.apk" onClick={() => setIsOpen(false)} className="w-full">
                            <Button className="w-full shadow-lg shadow-streamwoo-purple/20">Download App</Button>
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}
