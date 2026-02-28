import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <img src="/thumbnails/logo.jpeg" alt="Streamwoo" className="h-14 w-auto object-contain mix-blend-multiply" />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Stories that move you. Unmatched quality, exclusive originals, and universal access.
                        </p>
                    </div>

                    {/* Platform Links */}
                    <div className="lg:pl-8">
                        <h3 className="font-bold text-streamwoo-purple mb-6 font-display">Platform</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-streamwoo-purple transition-colors font-medium">Home</Link></li>
                            <li><Link href="/about" className="text-gray-500 hover:text-streamwoo-purple transition-colors font-medium">About Us</Link></li>
                            <li><Link href="/pricing" className="text-gray-500 hover:text-streamwoo-purple transition-colors font-medium">Pricing Plans</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-streamwoo-purple mb-6 font-display">Legal</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/privacy" className="text-gray-500 hover:text-streamwoo-purple transition-colors font-medium">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-500 hover:text-streamwoo-purple transition-colors font-medium">Terms of Service</Link></li>
                            <li><Link href="/refunds" className="text-gray-500 hover:text-streamwoo-purple transition-colors font-medium">Refund Policy</Link></li>
                            <li><Link href="/cookies" className="text-gray-500 hover:text-streamwoo-purple transition-colors font-medium">Cookie Policy</Link></li>
                            <li><Link href="/accessibility" className="text-gray-500 hover:text-streamwoo-purple transition-colors font-medium">Accessibility</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="font-bold text-streamwoo-purple mb-6 font-display">Contact</h3>
                        <div className="space-y-6 text-sm text-gray-500">
                            <div>
                                <p className="font-bold text-gray-900 text-base mb-3 flex items-start gap-2">
                                    Datzen tech private limited
                                </p>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-streamwoo-purple shrink-0 mt-0.5" />
                                    <div className="space-y-1 leading-relaxed">
                                        <p>1ST FLOOR, Building no 9,</p>
                                        <p>R T Nagar Bengaluru,</p>
                                        <p>Bengaluru Urban Karnataka, PIN Code: 560032</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <a href="mailto:support@streamwoo.com" className="flex items-center gap-3 hover:text-streamwoo-purple transition-colors group">
                                    <Mail className="w-5 h-5 text-streamwoo-purple shrink-0" />
                                    <span className="font-medium text-gray-900 group-hover:text-streamwoo-purple">support@streamwoo.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-gray-400 text-sm font-medium">
                        © {new Date().getFullYear()} Datzen tech private limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer >
    )
}
