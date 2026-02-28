import { Button } from "@/components/ui/Button"

export function CallToAction() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="rounded-[2.5rem] bg-gradient-to-r from-streamwoo-blue via-streamwoo-purple to-streamwoo-pink p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    {/* Abstract Circle */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to start watching?</h2>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto relative z-10 font-medium">Enter your email to create or restart your membership.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto relative z-10">
                        <input type="email" placeholder="Email address" className="h-14 px-6 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:bg-white/30 focus:border-white backdrop-blur-sm flex-1 transition-all" />
                        <Button size="lg" variant="white" className="h-14 px-8 text-base">Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
