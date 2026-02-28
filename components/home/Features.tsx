"use client"

import { Zap, Monitor, Ban } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decals */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-streamwoo-blue/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-streamwoo-pink/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Streamwoo?</h2>
                    <p className="text-gray-500 text-lg">We bring you the best entertainment experience with advanced technology.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "4K HDR Streaming", icon: Zap, desc: "Watch in crystal clear resolution with Dolby Vision and Atmos support.", color: "text-streamwoo-blue" },
                        { title: "Universal Access", icon: Monitor, desc: "Stream seamlessly on your Phone, Tablet, Laptop, and TV.", color: "text-streamwoo-purple" },
                        { title: "Ad-Free Experience", icon: Ban, desc: "Enjoy uninterrupted entertainment. No ads, ever.", color: "text-streamwoo-pink" }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-streamwoo-purple/20 hover:shadow-xl hover:shadow-streamwoo-purple/5 transition-all duration-300 group text-center hover:-translate-y-1"
                        >
                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                                <feature.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
