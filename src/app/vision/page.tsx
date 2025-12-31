import { Lightbulb, Shield, Globe, Zap, Cpu, Users, Layers, Wand2 } from "lucide-react";

export default function VisionPage() {
    return (
        <div className="min-h-screen py-20 px-4 bg-muted/20">
            <div className="max-w-4xl mx-auto">
                <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                    <h1 className="text-4xl font-bold mb-8">Our Vision</h1>

                    <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
                        {/* The Context - AI Era */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <Zap className="w-6 h-6 text-primary" />
                                The Agentic AI Era
                            </h2>
                            <p className="text-lg leading-relaxed">
                                We are living in a rapidly evolving agentic and AI era. Reports indicate that more than <strong className="text-foreground">80% of companies</strong> risk closure soon, often due to the crushing weight of unstructured data or a critical lack of LLM security.
                            </p>
                        </section>

                        {/* Our Mission */}
                        <section className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-primary" />
                                Security Layer as a Service
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Clestiq Shield stands as a fortress against these risks. We provide a robust <strong>Security Layer as a Service</strong> to our open-source community, ensuring that innovation doesn't come at the cost of safety.
                            </p>
                        </section>

                        {/* Future Roadmap */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                                <Lightbulb className="w-6 h-6 text-primary" />
                                The Future of Clestiq Shield
                            </h2>
                            <p className="mb-6">
                                We are just getting started. Our roadmap is laser-focused on empowering developers with next-gen tools:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-muted/40 border border-border flex items-start gap-3">
                                    <Cpu className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <strong className="text-foreground block mb-1">SDK Evolution</strong>
                                        <span className="text-sm">Native SDKs for seamless integration into any Python or Node.js codebase.</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-muted/40 border border-border flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <strong className="text-foreground block mb-1">Advanced Security</strong>
                                        <span className="text-sm">Expanding our threat detection matrix with deeper semantic analysis.</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-muted/40 border border-border flex items-start gap-3">
                                    <Layers className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <strong className="text-foreground block mb-1">Context Management</strong>
                                        <span className="text-sm">Intelligent context windows to maintain secure state across long conversations.</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-muted/40 border border-border flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <strong className="text-foreground block mb-1">Ultra-Low Latency</strong>
                                        <span className="text-sm">Optimizing every millisecond of the request pipeline.</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-muted/40 border border-border flex items-start gap-3">
                                    <Wand2 className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <strong className="text-foreground block mb-1">Chat Streaming & Voice</strong>
                                        <span className="text-sm">Native support for real-time streaming tokens and voice interfaces.</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-muted/40 border border-border flex items-start gap-3">
                                    <Users className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <strong className="text-foreground block mb-1">Post-Processing Datasets</strong>
                                        <span className="text-sm">Tools to curate and clean datasets from production interactions.</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center md:col-span-2">
                                    <strong className="text-primary font-bold text-lg">...and much more!!</strong>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
