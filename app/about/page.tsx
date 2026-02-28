"use client"

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Stats } from "@/components/home/Stats";
import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 space-y-6"
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-streamwoo-blue mb-4 shadow-sm">
                                Our Story
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight text-balance">Redefining Entertainment for the Digital Age</h1>
                            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Streamwoo began with a simple mission: to make premium entertainment accessible, ad-free, and immersive for everyone, everywhere. We believe stories have the power to connect the world.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-streamwoo-blue via-streamwoo-purple to-streamwoo-pink rounded-3xl blur-2xl opacity-20 transform rotate-6 scale-95" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white max-w-lg mx-auto lg:mx-0">
                                <img src="/assets/shows/show-5.jpeg" alt="Our Story" className="w-full h-auto object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Stats />

            {/* Values */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-gray-500 text-lg">Built on principles that put viewers first. We are committed to excellence in every frame.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation First", desc: "We constantly push the boundaries of streaming technology to deliver 8K readiness." },
                            { title: "Uncompromised Quality", desc: "Available in 4K HDR with Dolby Atmos, because you deserve the best." },
                            { title: "Universal Accessibility", desc: "Designed for everyone. Subtitles, audio descriptions, and intuitive UI." }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:shadow-streamwoo-purple/5 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-streamwoo-blue to-streamwoo-purple rounded-2xl flex items-center justify-center mb-6 text-white font-bold text-2xl shadow-lg shadow-streamwoo-blue/20">{i + 1}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{val.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
