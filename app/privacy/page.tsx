
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">

                    <p>
                        Welcome to Streamwoo. This Privacy Policy describes how Datzen tech private limited ("we", "us", or "our") collects, uses, and discloses your information when you use our website and services.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support. This may include your name, email address, phone number, and payment information.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, to process your transactions, giving you a customized experience, and to communicate with you.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We comply with the Information Technology Act, 2000 and other applicable Indian laws.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <ul className="list-none pl-0 mt-4 space-y-2">
                        <li><strong>Datzen tech private limited</strong></li>
                        <li>1ST FLOOR, Building no 9, R T Nagar Bengaluru</li>
                        <li>Bengaluru Urban Karnataka, PIN Code: 560032</li>
                        <li>Email: support@streamwoo.com</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    )
}
