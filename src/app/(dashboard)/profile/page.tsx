"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function ProfilePage() {
    const [email, setEmail] = useState('');

    useEffect(() => {
        setEmail(localStorage.getItem('user_email') || '');
    }, []);

    return (
        <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Profile Settings</h1>

            <div className="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-white/5 shadow-sm divide-y divide-gray-200 dark:divide-white/5">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Personal Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</label>
                            <div className="mt-1 text-gray-900 dark:text-white">{email}</div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-white/5">
                    <h2 className="text-lg font-medium text-red-600 mb-4">Danger Zone</h2>
                    <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 hover:border-red-300">
                        Delete Account
                    </Button>
                </div>
            </div>
        </div>
    );
}
