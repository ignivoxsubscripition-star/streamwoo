
"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { Check, HelpCircle, Loader2 } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useRazorpay } from "@/lib/razorpay"
import { motion } from "framer-motion"

declare global {
    interface Window {
        Razorpay: any
    }
}

export default function Pricing() {
    useRazorpay()
    const { user, isAuthenticated, updateSubscription } = useAuth()
    const router = useRouter()
    const [processing, setProcessing] = useState<string | null>(null)

    const handlePurchase = (plan: "Basic" | "Standard" | "Ultra", price: number) => {
        if (!isAuthenticated || !user) {
            router.push(`/login?redirect=/pricing`)
            return
        }

        setProcessing(plan)

        const options = {
            key: "rzp_test_Rjvg7mjDAAKe1R",
            amount: price * 100, // Amount in paise
            currency: "INR",
            name: "Streamwoo",
            description: `${plan} Plan Subscription`,
            image: "https://ui-avatars.com/api/?name=Streamwoo&background=8B5CF6&color=fff",
            handler: function (response: any) {
                const subscriptionData = {
                    plan,
                    price,
                    paymentId: response.razorpay_payment_id,
                    orderId: response.razorpay_order_id || `ORDER_${Date.now()}`,
                    purchasedAt: new Date().toISOString(),
                    status: "active" as const
                }

                updateSubscription(subscriptionData)
                router.push("/purchase-success")
            },
            prefill: {
                name: user.name,
                email: user.email,
                contact: "9999999999"
            },
            theme: {
                color: "#8B5CF6"
            },
            modal: {
                ondismiss: function () {
                    setProcessing(null)
                }
            }
        }

        const rzp1 = new window.Razorpay(options)
        rzp1.open()
    }


    // ... existing code ...

    return (
        <main className="min-h-screen bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-0" />
            <Navbar />

            <section className="pt-40 pb-20 text-center relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
                            Choose the plan that's <span className="text-transparent bg-clip-text bg-gradient-to-r from-streamwoo-purple to-streamwoo-pink">right for you</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Join millions of subscribers. Downgrade, upgrade, or cancel at any time.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 -mt-10 mb-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch relative z-10">
                        {/* Basic */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }} // Increased delay slightly
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-600 uppercase tracking-wider mb-4">Basic</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black text-gray-900 tracking-tight">₹199</span>
                                    <span className="text-lg font-medium text-gray-400">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 text-left mb-8 flex-1">
                                {[
                                    { text: "720p Resolution", checked: true },
                                    { text: "1 Device", checked: true },
                                    { text: "Ad-supported", checked: true },
                                    { text: "Offline Downloads", checked: false },
                                ].map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600 group">
                                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${feature.checked ? 'bg-red-50 text-streamwoo-blue' : 'bg-gray-100 text-gray-400'}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className={feature.checked ? "text-gray-900 font-medium" : "text-gray-400 decoration-slate-300 line-through"}>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant="outline"
                                className="w-full h-12 rounded-xl border-gray-200 text-gray-900 font-semibold hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                                onClick={() => handlePurchase("Basic", 199)}
                                disabled={processing === "Basic"}
                            >
                                {processing === "Basic" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Select Basic"}
                            </Button>
                        </motion.div>

                        {/* Standard */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-streamwoo-purple/20 border-2 border-streamwoo-purple flex flex-col relative transform md:scale-105 z-20"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-gradient-to-r from-streamwoo-purple to-streamwoo-pink text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-streamwoo-purple/30 tracking-wide uppercase">
                                    Most Popular
                                </span>
                            </div>
                            <div className="mb-8 mt-4">
                                <h3 className="text-xl font-bold text-streamwoo-purple uppercase tracking-wider mb-4">Standard</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-streamwoo-purple to-streamwoo-pink tracking-tight">₹399</span>
                                    <span className="text-lg font-medium text-gray-400">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 text-left mb-8 flex-1">
                                {[
                                    { text: "1080p HD Resolution", checked: true },
                                    { text: "2 Devices", checked: true },
                                    { text: "No Ads", checked: true },
                                    { text: "Limited Downloads", checked: true },
                                ].map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-streamwoo-purple shadow-sm">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-900 font-bold">{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full h-14 rounded-xl bg-gradient-to-r from-streamwoo-purple to-streamwoo-pink text-white font-bold shadow-lg shadow-streamwoo-purple/30 hover:shadow-streamwoo-purple/50 hover:scale-[1.02] transition-all"
                                onClick={() => handlePurchase("Standard", 399)}
                                disabled={processing === "Standard"}
                            >
                                {processing === "Standard" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Choose Standard"}
                            </Button>
                        </motion.div>

                        {/* Ultra Premium */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-streamwoo-pink uppercase tracking-wider mb-4">Ultra Premium</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black text-gray-900 tracking-tight">₹599</span>
                                    <span className="text-lg font-medium text-gray-400">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 text-left mb-8 flex-1">
                                {[
                                    { text: "4K HDR + Dolby Vision", checked: true },
                                    { text: "4 Devices", checked: true },
                                    { text: "No Ads", checked: true },
                                    { text: "Unlimited Downloads", checked: true },
                                    { text: "Dolby Atmos Audio", checked: true },
                                ].map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-streamwoo-pink">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-900 font-medium">{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant="outline"
                                className="w-full h-12 rounded-xl border-gray-200 text-gray-900 font-semibold hover:border-streamwoo-pink hover:text-streamwoo-pink hover:bg-red-50 transition-all"
                                onClick={() => handlePurchase("Ultra", 599)}
                                disabled={processing === "Ultra"}
                            >
                                {processing === "Ultra" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Select Ultra Premium"}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                "How do I cancel?",
                                "Can I watch on TV?",
                                "Is 4K available on all shows?",
                                "How does the free trial work?"
                            ].map((q, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                                >
                                    <span className="font-medium">{q}</span>
                                    <HelpCircle className="w-5 h-5 text-gray-400" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
