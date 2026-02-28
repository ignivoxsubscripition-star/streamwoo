"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Play, Plus } from "lucide-react"
import { motion } from "framer-motion"

const movies = [
    { id: 1, title: "The Barbershop", image: "/assets/shows/show-1.jpeg", category: "Drama" },
    { id: 2, title: "The Loop", image: "/assets/shows/show-2.jpeg", category: "Sci-Fi" },
    { id: 3, title: "Reappear", image: "/assets/shows/show-3.jpeg", category: "Romance" },
    { id: 4, title: "The English Teacher", image: "/assets/shows/show-4.jpeg", category: "Drama" },
    { id: 5, title: "The Cleaner", image: "/assets/shows/show-5.jpeg", category: "Thriller" },
    { id: 6, title: "Two Strangers Who Meet Five Times", image: "/assets/shows/show-6.jpeg", category: "Drama" },
    { id: 7, title: "Miscreant", image: "/assets/shows/show-7.jpeg", category: "Crime" },
    { id: 8, title: "Redhanded", image: "/assets/shows/show-8.jpeg", category: "Comedy" },
]

export function Trending() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Trending Now</h2>
                        <p className="text-gray-500">Most watched content this week</p>
                    </motion.div>
                    <Link href="/library" className="hidden md:block">
                        <Button variant="outline">View all Library</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {movies.map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 aspect-[2/3] cursor-pointer"
                        >
                            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <h3 className="font-bold text-xl leading-tight mb-1 text-center">{movie.title}</h3>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
