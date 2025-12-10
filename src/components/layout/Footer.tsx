import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold">Clestiq Shield</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Secure your AI applications with advanced protection and real-time monitoring.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link href="#features" className="hover:text-primary">Features</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary">Pricing</Link></li>
                            <li><Link href="/apps" className="hover:text-primary">Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link href="/about" className="hover:text-primary">About</Link></li>
                            <li><Link href="/vision" className="hover:text-primary">Vision</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Clestiq Shield. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
