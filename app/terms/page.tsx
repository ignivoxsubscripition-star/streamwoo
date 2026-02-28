
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">

                    <p>
                        Please read these Terms of Service ("Terms") carefully before using the Streamwoo website operated by Realcare SoftTech Private Limited.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Accounts</h2>
                    <p>
                        When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
                    <p>
                        The service and its original content, features, and functionality are and will remain the exclusive property of Realcare SoftTech Private Limited and its licensors.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in Thiruvananthapuram, Kerala.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us:
                    </p>
                    <ul className="list-none pl-0 mt-4 space-y-2">
                        <li><strong>Realcare SoftTech Private Limited</strong></li>
                        <li>Floor No 2, Building No TC/1-3687-2, Kazhakootam</li>
                        <li>Thiruvananthapuram, Kerala - 695582</li>
                        <li>Email: realcaresoftech@gmail.com</li>
                        <li>Phone: 8593093369</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    )
}
