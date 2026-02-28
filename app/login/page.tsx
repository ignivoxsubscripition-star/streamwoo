
"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { useAuth } from "@/context/AuthContext"
import { Loader2, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

function LoginContent() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login, isLoading } = useAuth()
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirectUrl = searchParams.get("redirect") || "/dashboard"

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        try {
            await login(email, password)
            router.push(redirectUrl)
        } catch (err: any) {
            setError(err.message || "Something went wrong")
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center pt-32 pb-12 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                    <div className="p-8 md:p-10">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
                            <p className="text-gray-500">Enter your details to access your account</p>
                        </div>

                        {error && (
                            <div className="mb-6 bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm flex items-center gap-2 border border-red-100">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-streamwoo-purple/20 focus:border-streamwoo-purple transition-all"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-streamwoo-purple/20 focus:border-streamwoo-purple transition-all"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-base rounded-xl shadow-lg shadow-streamwoo-purple/20"
                                disabled={isLoading}
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
                            </Button>
                        </form>


                        <div className="mt-8 pt-6 border-t border-gray-100">

                            <p className="text-center text-sm text-gray-500">
                                Don't have an account?{" "}
                                <Link href="/signup" className="text-streamwoo-purple font-semibold hover:underline">
                                    Sign up for free
                                </Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main >
    )
}

export default function Login() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><Loader2 className="w-8 h-8 text-streamwoo-purple animate-spin" /></div>}>
            <LoginContent />
        </Suspense>
    )
}
