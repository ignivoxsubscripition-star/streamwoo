import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Trending } from "@/components/home/Trending";
import { Features } from "@/components/home/Features";
import { Stats } from "@/components/home/Stats";
import { PricingPreview } from "@/components/home/PricingPreview";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Trending />
      <Features />
      <Stats />
      <PricingPreview />
      <CallToAction />
      <Footer />
    </main>
  );
}
