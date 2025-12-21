import { Code2, BookOpen, Terminal } from "lucide-react";

export default function APIReferencePage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">API Reference</h1>
                    <p className="text-xl text-muted-foreground">
                        Complete documentation for Gateway, Sentinel, and Guardian APIs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 bg-card rounded-2xl border border-border">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                            <Terminal className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Gateway API</h3>
                        <p className="text-muted-foreground mb-4">
                            Main entry point for all requests. Handles authentication and routing.
                        </p>
                        <code className="text-sm text-primary">POST /api/v1/chat</code>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border border-border">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                            <Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Sentinel API</h3>
                        <p className="text-muted-foreground mb-4">
                            Input security validation and threat detection endpoints.
                        </p>
                        <code className="text-sm text-primary">POST /analyze</code>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border border-border">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                            <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Guardian API</h3>
                        <p className="text-muted-foreground mb-4">
                            Output validation and content moderation services.
                        </p>
                        <code className="text-sm text-primary">POST /validate</code>
                    </div>
                </div>

                <div className="bg-card rounded-2xl border border-border p-8">
                    <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
                    <div className="bg-muted p-6 rounded-xl font-mono text-sm">
                        <div className="text-primary mb-2"># Install SDK</div>
                        <div className="text-muted-foreground">pip install clestiq-shield</div>
                        <div className="text-primary mt-4 mb-2"># Initialize client</div>
                        <div className="text-muted-foreground">from clestiq_shield import ClestiqClient</div>
                        <div className="text-muted-foreground">client = ClestiqClient(api_key="your-key")</div>
                        <div className="text-primary mt-4 mb-2"># Send request</div>
                        <div className="text-muted-foreground">response = client.chat(message="Hello")</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
