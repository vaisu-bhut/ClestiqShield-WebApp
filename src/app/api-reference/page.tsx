import { Code2, Key, LayoutGrid, Terminal, Shield, Zap, MessageSquare, Settings } from "lucide-react";

export default function APIReferencePage() {
    return (
        <div className="min-h-screen py-20 px-4 bg-muted/20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">API Reference</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Simple, powerful integration. Get started with Clestiq Shield in minutes.
                    </p>
                </div>

                {/* Getting Started Steps */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-background border border-border p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <LayoutGrid className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1. Create Account</h3>
                        <p className="text-sm text-muted-foreground">
                            Sign up on the Clestiq Shield platform to access your dashboard.
                        </p>
                    </div>

                    <div className="bg-background border border-border p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">2. Create App</h3>
                        <p className="text-sm text-muted-foreground">
                            Define your application to segregate traffic and analytics.
                        </p>
                    </div>

                    <div className="bg-background border border-border p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <Key className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">3. Get API Key</h3>
                        <p className="text-sm text-muted-foreground">
                            Generate a secure API key for your application to authenticate requests.
                        </p>
                    </div>
                </div>

                {/* API Usage Section */}
                <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="border-b border-border p-6 bg-muted/30">
                        <div className="flex items-center gap-3">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            <h2 className="text-xl font-bold">Chat Completions API</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                            The core endpoint for secure LLM interactions.
                        </p>
                    </div>

                    <div className="p-8 grid lg:grid-cols-2 gap-12">
                        {/* Left: Request Details */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-muted-foreground" />
                                    Endpoint
                                </h3>
                                <div className="bg-muted rounded-lg p-3 font-mono text-sm flex items-center gap-3">
                                    <span className="text-green-500 font-bold">POST</span>
                                    <span>https://api.shield.clestiq.com/chat</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <Key className="w-4 h-4 text-muted-foreground" />
                                    Headers
                                </h3>
                                <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-2">
                                    <div className="flex gap-4">
                                        <span className="text-primary">Content-Type:</span>
                                        <span>application/json</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-primary">X-API-Key:</span>
                                        <span>&lt;YOUR_API_KEY&gt;</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-muted-foreground" />
                                    Request Body (Payload)
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex gap-3">
                                        <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit">query</code>
                                        <span className="text-muted-foreground">The user prompt to be processed and sent to the LLM. <strong>(Required)</strong></span>
                                    </li>
                                    <li className="flex gap-3">
                                        <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit">model</code>
                                        <span className="text-muted-foreground">LLM model to use (e.g., <code className="text-primary">gemini-3-flash-preview</code>). <strong>(Required)</strong></span>
                                    </li>
                                    <li className="flex gap-3">
                                        <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit">moderation</code>
                                        <span className="text-muted-foreground">Level: <code className="text-primary">strict</code>, <code className="text-primary">moderate</code>, <code className="text-primary">relaxed</code>. <strong>(Required)</strong></span>
                                    </li>
                                    <li className="flex gap-3">
                                        <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit">output_format</code>
                                        <span className="text-muted-foreground">Format: <code className="text-primary">json</code> or <code className="text-primary">toon</code>. <strong>(Required)</strong></span>
                                    </li>
                                    <li className="flex flex-col gap-3">
                                        <div className="flex gap-3">
                                            <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit">settings</code>
                                            <span className="text-muted-foreground">Configuration object for enabling specific security checks:</span>
                                        </div>
                                        <div className="flex flex-col gap-3 pl-4 mt-2 border-l-2 border-border/50 ml-2">
                                            <div className="flex gap-3">
                                                <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit whitespace-nowrap">detect_threats</code>
                                                <span className="text-muted-foreground">Blocks SQLi, XSS, and injection attacks.</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit whitespace-nowrap">pii_masking</code>
                                                <span className="text-muted-foreground">Redacts sensitive PII data automatically.</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit whitespace-nowrap">sanitize_input</code>
                                                <span className="text-muted-foreground">Cleans malicious control characters.</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit whitespace-nowrap">content_filter</code>
                                                <span className="text-muted-foreground">Blocks toxic and harmful content.</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit whitespace-nowrap">hallucination_check</code>
                                                <span className="text-muted-foreground">Verifies factual consistency.</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit whitespace-nowrap">citation_check</code>
                                                <span className="text-muted-foreground">Validates sources and citations.</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit whitespace-nowrap">tone_check</code>
                                                <span className="text-muted-foreground">Enforces brand voice compliance.</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <code className="text-xs bg-muted px-2 py-1 rounded border border-border h-fit whitespace-nowrap">toon_mode</code>
                                                <span className="text-muted-foreground">Converts output to TOON format.</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Code Examples */}
                        <div className="space-y-6">
                            {/* Minimal Request */}
                            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl border border-gray-800">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#252526]">
                                    <div className="flex gap-2">
                                        <span className="text-[#569CD6] font-mono text-sm">JSON</span>
                                        <span className="text-gray-400 text-sm font-medium">Standard Request</span>
                                    </div>
                                    <span className="text-[10px] text-gray-500 bg-gray-900 px-2 py-0.5 rounded">All required fields</span>
                                </div>
                                <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-gray-300">
                                    <pre>
                                        {`{
  "query": "Explain quantum computing.",
  "model": "gemini-3-flash-preview",
  "moderation": "moderate",
  "output_format": "json"
}`}
                                    </pre>
                                </div>
                            </div>

                            {/* Full Feature Request */}
                            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl border border-gray-800">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#252526]">
                                    <div className="flex gap-2">
                                        <span className="text-[#569CD6] font-mono text-sm">JSON</span>
                                        <span className="text-gray-400 text-sm font-medium">Full Security Context</span>
                                    </div>
                                    <span className="text-[10px] text-gray-500 bg-gray-900 px-2 py-0.5 rounded">Max protection enabled</span>
                                </div>
                                <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-gray-300">
                                    <pre>
                                        {`{
  "query": "Explain quantum computing.",
  "system_prompt": "You are a physics expert.",
  "model": "gemini-3-flash-preview",
  "moderation": "strict",
  "output_format": "json",
  "settings": {
    "pii_masking": true,
    "detect_threats": true,
    "sanitize_input": true,
    "content_filter": true,
    "hallucination_check": true,
    "citation_check": true,
    "tone_check": true,
    "toon_mode": false
  }
}`}
                                    </pre>
                                </div>
                            </div>

                            {/* Response Example */}
                            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl border border-gray-800">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#252526]">
                                    <div className="flex gap-2">
                                        <span className="text-[#569CD6] font-mono text-sm">JSON</span>
                                        <span className="text-gray-400 text-sm font-medium">Response</span>
                                    </div>
                                </div>
                                <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-gray-300">
                                    <pre>
                                        {`{
  "response": "Quantum computing uses qubits...",
  "app": "my-app",
  "metrics": {
    "security_score": 0.05,
    "threats_detected": 0,
    "pii_redacted": 1,
    "guardian_metrics": {
       "hallucination_detected": false,
       "citations_verified": true
    },
    "token_usage": { "total_tokens": 150 }
  }
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Note */}
            <div className="mt-8 max-w-4xl mx-auto p-4 bg-primary/5 rounded-lg border border-primary/20 flex gap-3 text-sm text-primary/80 items-center justify-center">
                <Shield className="w-5 h-5 shrink-0" />
                <p>
                    All requests are automatically guarded. <strong>Sentinel</strong> analyzes the input before it reaches the LLM, and <strong>Guardian</strong> validates the output.
                </p>
            </div>
        </div>
    );
}
