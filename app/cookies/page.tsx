
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Cookies() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">

                    <p>
                        This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using cookies and how that information is used.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files that are sent to or accessed from your web browser or your device's memory. A cookie typically contains the name of the domain (internet location) from which the cookie originated, the "lifetime" of the cookie (i.e., when it expires), and a randomly generated unique number or similar identifier.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
                    <p>
                        We use cookies to enable certain functions of the Service, to provide analytics, to store your preferences, and to enable advertisements delivery, including behavioral advertising.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Managing Cookies</h2>
                    <p>
                        If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
                    <p>
                        If you have any questions about this Cookie Policy, please contact us:
                    </p>
                    <ul className="list-none pl-0 mt-4 space-y-2">
                        <li><strong>Realcare SoftTech Private Limited</strong></li>
                        <li>Email: realcaresoftech@gmail.com</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    )
}
