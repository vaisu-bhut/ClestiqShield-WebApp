"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    AppWindow,
    User,
    LogOut,
    ShieldCheck,
    Menu,
    X
} from 'lucide-react';
import { api } from '@/services/api';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Check auth
        const token = localStorage.getItem('auth_token');
        const email = localStorage.getItem('user_email');
        if (!token) {
            router.push('/login');
        }
        if (email) setUserEmail(email);
    }, [router]);

    const handleLogout = async () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_id');
        window.location.href = '/login';
    };

    const navItems = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Applications', href: '/apps', icon: AppWindow },
        { name: 'Profile', href: '/profile', icon: User },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0B0F19] flex">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-white/10 transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 flex flex-col
      `}>
                <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-white/10">
                    <Link href="/" className="flex items-center space-x-2">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Shield</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
                  ${isActive
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                                    }
                `}
                            >
                                <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : ''}`} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-white/10">
                    <div className="flex items-center mb-4 px-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            {userEmail.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{userEmail}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Sign out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Mobile Header */}
                <header className="md:hidden bg-white dark:bg-[#111827] h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-white/10">
                    <Link href="/" className="flex items-center space-x-2">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                        <span className="font-bold text-gray-900 dark:text-white">Clestiq Shield</span>
                    </Link>
                    <button onClick={() => setSidebarOpen(true)}>
                        <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    </button>
                </header>

                <main className="flex-1 overflow-auto p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
