"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/signup");
    const isDashboard = pathname.startsWith("/dashboard") || pathname.startsWith("/apps") || pathname.startsWith("/profile");

    if (isDashboard) return null; // Dashboard has its own layout/sidebar usually

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Vision", href: "/vision" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            Clestiq Shield
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center space-x-4">
                            <a
                                href="http://localhost:3001/auth/login"
                                className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium text-sm"
                            >
                                Log in
                            </a>
                            <a
                                href="http://localhost:3001/auth/signup"
                                className="bg-primary hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/25"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-black border-b border-gray-100 dark:border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg px-3"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 space-y-2">
                                <a
                                    href="http://localhost:3001/auth/login"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center py-2 text-gray-600 dark:text-gray-300 font-medium border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
                                >
                                    Log in
                                </a>
                                <a
                                    href="http://localhost:3001/auth/signup"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center py-2 bg-primary text-white font-medium rounded-lg hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
