
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { useAuth } from "@/context/AuthContext"
import { LogOut, User as UserIcon, Shield, CreditCard } from "lucide-react"

export default function Account() {
    const { user, isAuthenticated, isLoading, logout } = useAuth()
    const router = useRouter()
    const [pageLoading, setPageLoading] = useState(true)

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) {
                router.push("/login?redirect=/account")
            } else {
                setPageLoading(false)
            }
        }
    }, [isAuthenticated, isLoading, router])

    if (isLoading || pageLoading) return null

    const handleLogout = () => {
        logout()
        router.push("/")
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

                    <div className="space-y-6">
                        {/* Profile Section */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <UserIcon className="w-5 h-5 text-gray-400" />
                                Personal Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 font-medium">
                                        {user?.name}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">Email Address</label>
                                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 font-medium">
                                        {user?.email}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">User ID</label>
                                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-500 font-mono text-sm truncate">
                                        {user?.id}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">Member Since</label>
                                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-700 font-medium">
                                        {new Date(user?.createdAt || "").toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subscription Section */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-gray-400" />
                                Subscription Details
                            </h2>

                            {user?.subscription ? (
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-2">
                                                Active
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900">{user.subscription.plan} Plan</h3>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900">₹{user.subscription.price}<span className="text-sm text-gray-500 font-normal">/mo</span></p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-500 mb-1">Payment ID</p>
                                            <p className="font-mono text-gray-700">{user.subscription.paymentId}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 mb-1">Purchased On</p>
                                            <p className="font-medium text-gray-700">{new Date(user.subscription.purchasedAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-6">
                                    <p className="text-gray-500 mb-4">You don't have an active subscription.</p>
                                    <Button onClick={() => router.push("/pricing")}>Subscribe Now</Button>
                                </div>
                            )}
                        </div>

                        {/* Security / Logout */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-gray-400" />
                                Account Security
                            </h2>

                            <Button
                                variant="outline"
                                className="w-full h-12 text-red-600 border-red-100 hover:bg-red-50 hover:border-red-200"
                                onClick={handleLogout}
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
