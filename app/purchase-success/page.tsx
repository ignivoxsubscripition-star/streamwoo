
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { Check, ArrowRight, Download } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function PurchaseSuccess() {
    const { user, isAuthenticated } = useAuth()
    const router = useRouter()

    useEffect(() => {
        // Redirect if accessed directly without subscription
        if (!isAuthenticated || !user?.subscription) {
            router.push("/")
        }
    }, [isAuthenticated, user, router])

    if (!user?.subscription) return null

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center pt-20 pb-12 px-4">
                <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden text-center p-10 md:p-12">

                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
                        <Check className="w-10 h-10 text-green-600" />
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                    <p className="text-gray-500 text-lg mb-8">
                        Welcome to Streamwoo Premium. Your account has been upgraded to the <span className="font-bold text-gray-900">{user.subscription.plan} Plan</span>.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 text-left">
                        <div className="flex justify-between mb-3 border-b border-gray-200 pb-3">
                            <span className="text-gray-500">Amount Paid</span>
                            <span className="font-bold text-gray-900">₹{user.subscription.price}.00</span>
                        </div>
                        <div className="flex justify-between mb-3">
                            <span className="text-gray-500">Payment ID</span>
                            <span className="font-mono text-sm text-gray-900">{user.subscription.paymentId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Date</span>
                            <span className="text-gray-900">{new Date(user.subscription.purchasedAt).toLocaleDateString()}</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link href="/dashboard">
                            <Button className="w-full h-14 rounded-xl text-lg shadow-lg shadow-green-200 bg-green-600 hover:bg-green-700">
                                Go to Dashboard <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        {/* <Button variant="ghost" className="w-full">
                            <Download className="w-4 h-4 mr-2" /> Download Receipt
                        </Button> */}
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    )
}
