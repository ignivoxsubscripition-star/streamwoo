"use client"

import { Button } from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const POSTERS = [
    { src: "/thumbnails/don't forget about me.jpeg", title: "Don't Forget About Me" },
    { src: "/thumbnails/hoax.jpeg", title: "Hoax" },
    { src: "/thumbnails/im not a robot.jpeg", title: "I'm Not a Robot" },
    { src: "/thumbnails/into you.jpeg", title: "Into You" },
    { src: "/thumbnails/planet.jpeg", title: "Planet" },
    { src: "/thumbnails/summe lovr.avif", title: "Summer Lovr" },
    { src: "/thumbnails/the orphan.jpeg", title: "The Orphan" },
    { src: "/thumbnails/this close.jpeg", title: "This Close" },
    { src: "/thumbnails/we don't take breakes.jpeg", title: "We Don't Take Breaks" },
    { src: "/thumbnails/you are a gift.avif", title: "You Are a Gift" },
];

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Background Marquee Carousel (Behind Content) */}
            <div className="absolute inset-0 z-0 flex flex-col gap-4 justify-between opacity-80 py-4 md:py-10 scale-105 grayscale-[10%]">
                {[...Array(3)].map((_, rowIndex) => (
                    <div key={rowIndex} className="relative flex overflow-hidden w-full h-full items-center">
                        <motion.div
                            className="flex gap-4 md:gap-6 pl-4 md:pl-6"
                            animate={{ x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                            transition={{ duration: rowIndex % 2 === 0 ? 40 : 50, ease: "linear", repeat: Infinity }}
                        >
                            {[...Array(3)].map((_, setIndex) => (
                                <div key={setIndex} className="flex gap-4 md:gap-6 shrink-0">
                                    {POSTERS.map((item, i) => (
                                        <div
                                            key={i}
                                            className="w-[140px] h-[210px] md:w-[200px] md:h-[300px] rounded-2xl relative overflow-hidden shadow-lg shrink-0 group hover:scale-105 transition-transform duration-300"
                                        >
                                            <img
                                                src={item.src}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                                <p className="text-white font-bold text-lg text-center">{item.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Heavy White Overlay for Readability - Reduced Opacity */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0.1)_100%)] pointer-events-none" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/80 via-white/50 to-white/80 pointer-events-none" />

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 md:space-y-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-[0.95] md:leading-[0.9] drop-shadow-sm"
                    >
                        Feel the Woo <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-streamwoo-blue via-streamwoo-purple to-streamwoo-pink animate-gradient-x">
                            Only on Streamwoo
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-3xl drop-shadow-sm"
                    >
                        Unlimited access to thousands of movies, series, and exclusive originals.
                        Experience 4K HDR quality on every device.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full"
                    >
                        <div className="w-full sm:w-auto">
                            <a href="" download="">
                                <Button size="lg" className="group h-16 px-10 text-xl w-full sm:w-auto shadow-2xl shadow-streamwoo-purple/30 hover:shadow-streamwoo-purple/50 transition-all duration-300 rounded-full">
                                    Download Now
                                    <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
