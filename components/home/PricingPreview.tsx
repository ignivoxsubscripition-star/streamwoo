"use client"

import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function PricingPreview() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-streamwoo-purple/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-streamwoo-blue/5 rounded-full blur-[100px]" />
            </div>
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-16">Flexible plans for everyone. Upgrade or cancel anytime.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch relative z-10">
                    {/* Basic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
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
                        <Link href="/pricing" className="w-full">
                            <Button variant="outline" className="w-full h-12 rounded-xl border-gray-200 text-gray-900 font-semibold hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all">Select Basic</Button>
                        </Link>
                    </motion.div>

                    {/* Standard */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
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
                        <Link href="/pricing" className="w-full">
                            <Button className="w-full h-14 rounded-xl bg-gradient-to-r from-streamwoo-purple to-streamwoo-pink text-white font-bold shadow-lg shadow-streamwoo-purple/30 hover:shadow-streamwoo-purple/50 hover:scale-[1.02] transition-all">Start Free Trial</Button>
                        </Link>
                    </motion.div>

                    {/* Ultra Premium */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
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
                        <Link href="/pricing" className="w-full">
                            <Button variant="outline" className="w-full h-12 rounded-xl border-gray-200 text-gray-900 font-semibold hover:border-streamwoo-pink hover:text-streamwoo-pink hover:bg-red-50 transition-all">Select Ultra Premium</Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
