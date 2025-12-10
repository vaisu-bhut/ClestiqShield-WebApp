"use client";

import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Plus, Trash2, Key } from 'lucide-react';

export default function AppsPage() {
    const [apps, setApps] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [newAppName, setNewAppName] = useState('');
    const [newAppDesc, setNewAppDesc] = useState('');

    const fetchApps = async () => {
        try {
            setLoading(true);
            const data = await api.getApps();
            if (Array.isArray(data)) setApps(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApps();
    }, []);

    const handleCreate = async () => {
        if (!newAppName) return;
        try {
            await api.createApp(newAppName, newAppDesc);
            setNewAppName('');
            setNewAppDesc('');
            setIsCreating(false);
            fetchApps();
        } catch (e) {
            alert("Failed to create app");
        }
    };

    const [viewingApp, setViewingApp] = useState<any | null>(null);
    const [apiKeys, setApiKeys] = useState<any[]>([]);
    const [loadingKeys, setLoadingKeys] = useState(false);
    const [newKeyName, setNewKeyName] = useState('');
    const [createdKey, setCreatedKey] = useState<string | null>(null);

    const fetchKeys = async (appId: string | number) => {
        try {
            setLoadingKeys(true);
            const data = await api.getAppKeys(appId);
            if (Array.isArray(data)) setApiKeys(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoadingKeys(false);
        }
    };

    const openKeysModal = (app: any) => {
        setViewingApp(app);
        setCreatedKey(null);
        fetchKeys(app.id);
    };

    const handleCreateKey = async () => {
        if (!newKeyName || !viewingApp) return;
        try {
            const data = await api.createApiKey(viewingApp.id, newKeyName);
            if (data && data.key) {
                setCreatedKey(data.key); // Assuming backend returns the raw key only once
                fetchKeys(viewingApp.id);
                setNewKeyName('');
            }
        } catch (e) {
            alert("Failed to create API key");
        }
    };

    return (
        <div className="space-y-6 relative">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Applications</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage your AI applications and API keys.</p>
                </div>
                <Button onClick={() => setIsCreating(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    New App
                </Button>
            </div>

            {isCreating && (
                <div className="bg-white dark:bg-[#111827] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm animate-in fade-in slide-in-from-top-4">
                    <h3 className="text-lg font-medium mb-4">Create New Application</h3>
                    <div className="grid gap-4 max-w-md">
                        <Input
                            placeholder="Application Name"
                            value={newAppName}
                            onChange={(e) => setNewAppName(e.target.value)}
                        />
                        <Input
                            placeholder="Description (Optional)"
                            value={newAppDesc}
                            onChange={(e) => setNewAppDesc(e.target.value)}
                        />
                        <div className="flex gap-2">
                            <Button onClick={handleCreate}>Create</Button>
                            <Button variant="ghost" onClick={() => setIsCreating(false)}>Cancel</Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {apps.map((app) => (
                    <div key={app.id} className="bg-white dark:bg-[#111827] p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <div className="font-bold text-lg">{app.name.charAt(0).toUpperCase()}</div>
                            </div>
                            <Button size="sm" variant="ghost" onClick={() => openKeysModal(app)}>
                                <Key className="w-4 h-4 mr-2" />
                                Keys
                            </Button>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{app.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 h-10 line-clamp-2">{app.description || 'No description provided.'}</p>

                        <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-sm text-gray-500">
                            <span>ID: {app.id}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* API Keys Modal */}
            {viewingApp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
                    <div className="bg-white dark:bg-[#111827] rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center">
                            <h2 className="text-xl font-bold">API Keys: {viewingApp.name}</h2>
                            <Button variant="ghost" size="sm" onClick={() => setViewingApp(null)}>Close</Button>
                        </div>

                        <div className="p-6 overflow-y-auto flex-1 space-y-6">
                            {/* Create New Key Section */}
                            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg space-y-3">
                                <h3 className="font-medium text-sm">Create New Key</h3>
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Key Name (e.g., Development)"
                                        value={newKeyName}
                                        onChange={(e) => setNewKeyName(e.target.value)}
                                        className="bg-white dark:bg-black"
                                    />
                                    <Button onClick={handleCreateKey} disabled={!newKeyName}>Generate</Button>
                                </div>
                                {createdKey && (
                                    <div className="mt-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded text-green-800 dark:text-green-200 text-sm break-all">
                                        <strong>New Key:</strong> {createdKey}
                                        <div className="text-xs opacity-75 mt-1">Copy this now. You won't see it again.</div>
                                    </div>
                                )}
                            </div>

                            {/* List Keys Section */}
                            <div>
                                <h3 className="font-medium text-sm mb-3">Existing Keys</h3>
                                {loadingKeys ? (
                                    <div className="text-center py-4 text-gray-500">Loading keys...</div>
                                ) : apiKeys.length === 0 ? (
                                    <div className="text-center py-4 text-gray-500 italic">No API keys found for this app.</div>
                                ) : (
                                    <div className="space-y-2">
                                        {apiKeys.map((key) => (
                                            <div key={key.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-white/10 rounded-lg">
                                                <div>
                                                    <div className="font-medium">{key.name}</div>
                                                    <div className="text-xs text-gray-500 font-mono mt-0.5">
                                                        {key.prefix ? `${key.prefix}...` : '****************'}
                                                    </div>
                                                </div>
                                                <div className="text-xs text-gray-400">
                                                    {new Date(key.created_at).toLocaleDateString()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
