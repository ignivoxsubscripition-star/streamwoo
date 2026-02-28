"use client"

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

// Assuming 10 shows as per the user's rename command
const shows = [
    { id: 1, title: "The Barbershop", image: "/assets/shows/show-1.jpeg", category: "Drama" },
    { id: 2, title: "The Loop", image: "/assets/shows/show-2.jpeg", category: "Sci-Fi" },
    { id: 3, title: "Reappear", image: "/assets/shows/show-3.jpeg", category: "Romance" },
    { id: 4, title: "The English Teacher", image: "/assets/shows/show-4.jpeg", category: "Drama" },
    { id: 5, title: "The Cleaner", image: "/assets/shows/show-5.jpeg", category: "Thriller" },
    { id: 6, title: "Two Strangers Who Meet Five Times", image: "/assets/shows/show-6.jpeg", category: "Drama" },
    { id: 7, title: "Miscreant", image: "/assets/shows/show-7.jpeg", category: "Crime" },
    { id: 8, title: "Redhanded", image: "/assets/shows/show-8.jpeg", category: "Comedy" },
    { id: 9, title: "Carpark", image: "/assets/shows/show-9.jpeg", category: "Drama" },
    { id: 10, title: "Only Space and Time", image: "/assets/shows/show-10.jpeg", category: "Sci-Fi" },
];

export default function Library() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Content Library</h1>
                        <p className="text-xl text-gray-500">Explore our complete collection of movies and series.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {shows.map((show, index) => (
                            <motion.div
                                key={show.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 aspect-[2/3] bg-gray-100"
                            >
                                <img src={show.image} alt={show.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <h3 className="font-bold text-xl leading-tight text-center">{show.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
