
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Refunds() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">

                    <p>
                        Thank you for subscribing to Streamwoo services provided by Datzen tech private limited.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Refund Eligibility</h2>
                    <p>
                        We offer a full money-back guarantee for all purchases made on our website if you are not satisfied with the product that you have purchased, subject to the conditions below. You are eligible for a reimbursement within 7 calendar days of your purchase.
                    </p>
                    <p>
                        After the 7-day period, you will no longer be eligible and won't be able to receive a refund. We encourage our customers to try the service in the first week after their purchase to ensure it fits your needs.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Processing Refunds</h2>
                    <p>
                        If you have an issue with our service or believe there has been an error in billing, please contact our support team immediately. Refunds are processed within 5-7 business days to the original method of payment.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Contact Us</h2>
                    <p>
                        For any questions regarding refunds, please contact us:
                    </p>
                    <ul className="list-none pl-0 mt-4 space-y-2">
                        <li><strong>Datzen tech private limited</strong></li>
                        <li>Email: support@streamwoo.com</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    )
}
