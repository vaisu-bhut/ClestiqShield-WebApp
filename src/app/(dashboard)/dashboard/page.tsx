"use client";

import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { Activity, ShieldAlert, Cpu, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
    const [metrics, setMetrics] = useState([
        { title: 'Total Requests', value: '2.4M', change: '+12%', icon: Activity, status: 'good' },
        { title: 'Threats Blocked', value: '142', change: '-5%', icon: ShieldAlert, status: 'good' },
        { title: 'Active Models', value: '7', change: '0%', icon: Cpu, status: 'neutral' },
        { title: 'Token Usage', value: '450K', change: '+8%', icon: Database, status: 'warning' },
    ]);

    const [apps, setApps] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const appsData = await api.getApps();
                if (appsData && Array.isArray(appsData)) {
                    setApps(appsData);
                }
            } catch (e) {
                console.error("Failed to fetch dashboard data", e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
                <p className="text-gray-500 dark:text-gray-400">Welcome back to Clestiq Shield.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={metric.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-[#111827] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-primary`}>
                                <metric.icon className="h-6 w-6" />
                            </div>
                            <span className={`text-sm font-medium ${metric.status === 'good' ? 'text-green-500' :
                                    metric.status === 'warning' ? 'text-yellow-500' : 'text-gray-500'
                                }`}>
                                {metric.change}
                            </span>
                        </div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.title}</h3>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{metric.value}</p>
                    </motion.div>
                ))}
            </div>

            <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Active Applications</h2>
                <div className="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-white/5 overflow-hidden">
                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Loading applications...</div>
                    ) : apps.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">No applications found. Create one in the Apps section.</div>
                    ) : (
                        <div className="divide-y divide-gray-200 dark:divide-white/5">
                            {apps.map((app) => (
                                <div key={app.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">{app.name}</h3>
                                            <p className="text-xs text-gray-500">{app.description || 'No description'}</p>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {/* Placeholder for status or uptime */}
                                        Running
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
