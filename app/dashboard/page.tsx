
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { useAuth, Subscription } from "@/context/AuthContext"
import { Crown, CheckCircle, Clock, CreditCard, Play } from "lucide-react"

export default function Dashboard() {
    const { user, isAuthenticated, isLoading } = useAuth()
    const router = useRouter()
    const [pageLoading, setPageLoading] = useState(true)

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) {
                router.push("/login?redirect=/dashboard")
            } else {
                setPageLoading(false)
            }
        }
    }, [isAuthenticated, isLoading, router])

    if (isLoading || pageLoading) return null

    const subscription = user?.subscription

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Welcome Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name.split(' ')[0]} 👋</h1>
                            <p className="text-gray-500">Manage your subscription and watch history.</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Subscription Status */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Crown className="w-5 h-5 text-streamwoo-purple" />
                                    Current Plan
                                </h2>

                                {subscription ? (
                                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-streamwoo-purple/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-8">
                                                <div>
                                                    <span className="inline-block px-3 py-1 rounded-lg bg-white/10 text-sm font-medium mb-2 border border-white/10">
                                                        Active
                                                    </span>
                                                    <h3 className="text-3xl font-bold">{subscription.plan} Plan</h3>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-400">Next billing</p>
                                                    <p className="font-medium">{new Date(new Date(subscription.purchasedAt).setMonth(new Date(subscription.purchasedAt).getMonth() + 1)).toLocaleDateString()}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div>
                                                    <p className="text-sm text-gray-400 mb-1">Amount</p>
                                                    <p className="font-semibold text-lg">₹{subscription.price}/mo</p>
                                                </div>
                                                <div className="h-8 w-px bg-white/10" />
                                                <div>
                                                    <p className="text-sm text-gray-400 mb-1">Plan ID</p>
                                                    <p className="font-mono text-sm">{subscription.orderId.slice(-8).toUpperCase()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                            <Crown className="w-8 h-8 opacity-50" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Subscription</h3>
                                        <p className="text-gray-500 max-w-sm mx-auto mb-6">Unlock exclusive content, ad-free streaming, and high-quality viewing experience.</p>
                                        <Button
                                            onClick={() => router.push("/pricing")}
                                            className="rounded-xl shadow-lg shadow-streamwoo-purple/20"
                                        >
                                            View Plans
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Watch History (Placeholder) */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-gray-500" />
                                    Continue Watching
                                </h2>

                                {subscription ? (
                                    <div className="text-center py-10">
                                        <p className="text-gray-500">You haven't watched anything yet. Start exploring!</p>
                                        <Button variant="ghost" className="mt-4 text-streamwoo-purple" onClick={() => router.push("/")}>Browse Library</Button>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-gray-500">Subscribe to start watching content.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4">Account Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                                            {user?.name.charAt(0)}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="font-medium text-gray-900 truncate">{user?.name}</p>
                                            <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full rounded-xl" onClick={() => router.push("/account")}>Manage Account</Button>
                                </div>
                            </div>

                            {subscription && (
                                <div className="bg-gradient-to-br from-streamwoo-purple to-streamwoo-pink p-6 rounded-3xl shadow-lg text-white">
                                    <h3 className="font-bold text-lg mb-2">Upgrade Plan?</h3>
                                    <p className="text-white/80 text-sm mb-6 leading-relaxed">Get access to 4K Ultra HD content and unlimited downloads.</p>
                                    <Button className="w-full bg-white text-streamwoo-purple hover:bg-gray-50 border-0 rounded-xl font-bold">View Upgrades</Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
