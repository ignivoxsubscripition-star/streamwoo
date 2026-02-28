"use client"

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-40 pb-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                        <p className="text-xl text-gray-500">We'd love to hear from you. Our team is always here to chat.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                        >
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input id="name" type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-streamwoo-purple focus:ring-2 focus:ring-streamwoo-purple/20 focus:outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input id="email" type="email" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-streamwoo-purple focus:ring-2 focus:ring-streamwoo-purple/20 focus:outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={5} className="w-full p-4 rounded-xl border border-gray-200 focus:border-streamwoo-purple focus:ring-2 focus:ring-streamwoo-purple/20 focus:outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button type="submit" className="w-full h-12 text-base">Send Message</Button>
                            </form>
                        </motion.div>

                        {/* Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-8 flex flex-col justify-center"
                        >
                            {[
                                { icon: Mail, title: "Email Us", desc: "Our friendly team is here to help.", link: "mailto:support@streamwoo.com", linkText: "support@streamwoo.com" },
                                { icon: MapPin, title: "Office", desc: "Come say hello at our office HQ.", text: <>1ST FLOOR, Building no 9,<br />R T Nagar Bengaluru,<br />Bengaluru Urban Karnataka, PIN Code: 560032</> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                    className="flex items-start gap-6 group hover:bg-white hover:shadow-lg p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100"
                                >
                                    <div className="w-14 h-14 bg-streamwoo-blue/10 rounded-2xl flex items-center justify-center text-streamwoo-blue shrink-0 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-500 mb-2">{item.desc}</p>
                                        {item.link ? (
                                            <a href={item.link} className="text-streamwoo-purple font-medium hover:underline">{item.linkText}</a>
                                        ) : (
                                            <p className="text-gray-900 font-medium text-sm">{item.text}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
