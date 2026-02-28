
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Accessibility() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">

                    <p>
                        Datzen tech private limited is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Conformance Status</h2>
                    <p>
                        The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Streamwoo is partially conformant with WCAG 2.1 level AA.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Feedback</h2>
                    <p>
                        We welcome your feedback on the accessibility of Streamwoo. Please let us know if you encounter accessibility barriers on Streamwoo:
                    </p>
                    <ul className="list-none pl-0 mt-4 space-y-2">
                        <li><strong>Datzen tech private limited</strong></li>
                        <li>Email: support@streamwoo.com</li>
                        <li>Address: 1ST FLOOR, Building no 9, R T Nagar Bengaluru, Bengaluru Urban Karnataka, PIN Code: 560032</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    )
}
