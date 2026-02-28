"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [motionValue, isInView, value])

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Number(latest.toFixed(value % 1 !== 0 ? 1 : 0)).toLocaleString()
            }
        })
    }, [springValue, value])

    return <span className="flex"><span ref={ref}>0</span>{suffix}</span>
}

export function Stats() {
    const stats = [
        { label: "Active Users", value: 2, suffix: "M+" },
        { label: "Countries", value: 150, suffix: "+" },
        { label: "Originals", value: 500, suffix: "+" },
        { label: "Uptime", value: 99.9, suffix: "%" },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="py-20 bg-gradient-to-r from-streamwoo-blue via-streamwoo-purple to-streamwoo-pink text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {stats.map((stat, i) => (
                        <motion.div key={i} variants={item} className="p-4 relative group">
                            {/* Divider with animation */}
                            {i !== 0 && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    whileInView={{ height: "48px", opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px bg-white/20"
                                />
                            )}

                            <div className="text-4xl md:text-5xl font-black mb-2 flex justify-center items-center drop-shadow-md">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-white/80 font-medium text-lg tracking-wide group-hover:text-white transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
