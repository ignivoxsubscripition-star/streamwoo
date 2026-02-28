
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
                        Please read these Terms of Service ("Terms") carefully before using the Streamwoo website operated by Datzen tech private limited.
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
                        The service and its original content, features, and functionality are and will remain the exclusive property of Datzen tech private limited and its licensors.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us:
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
