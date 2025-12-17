"use client";

import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { api } from '@/services/api';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ShieldCheck } from 'lucide-react';

export default function LoginPage() {
    // const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const data = await api.login(email, password);
            // Store token and redirect
            if (data?.access_token) {
                localStorage.setItem('auth_token', data.access_token);
                localStorage.setItem('user_email', email);

                // Optional: Fetch user ID to store it
                // const users = await api.getUsers();
                // const currentUser = users.find((u: any) => u.email === email);
                // if (currentUser) localStorage.setItem('user_id', currentUser.id);

                window.location.href = 'http://localhost:8010';
            } else {
                setError("Invalid response from server");
            }
        } catch (err: any) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0B0F19] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    Or{' '}
                    <Link href="/signup" className="font-medium text-primary hover:text-indigo-500">
                        start your 14-day free trial
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-white/5 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200 dark:border-white/10">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <Input
                            id="email"
                            type="email"
                            label="Email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            id="password"
                            type="password"
                            label="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <div className="text-red-500 text-sm text-center font-medium bg-red-50 dark:bg-red-900/20 p-2 rounded">
                                {error}
                            </div>
                        )}

                        <div>
                            <Button type="submit" variant="primary" className="w-full" isLoading={loading}>
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
