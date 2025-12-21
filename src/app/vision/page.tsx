import { Lightbulb, Shield, Globe, Zap } from "lucide-react";

export default function VisionPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Our Vision</h1>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            We envision a future where AI applications are inherently secure by default—where
                            developers can innovate fearlessly, knowing their systems are protected against
                            emerging threats.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-6 my-12">
                        <div className="p-6 bg-card rounded-2xl border border-border">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Security First</h3>
                            <p className="text-muted-foreground">
                                Making AI security accessible and transparent for every organization, from
                                startups to enterprises
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-2xl border border-border">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                <Lightbulb className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Innovation Enabler</h3>
                            <p className="text-muted-foreground">
                                Empowering developers to push boundaries without compromising on safety or compliance
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-2xl border border-border">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                <Globe className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Global Standard</h3>
                            <p className="text-muted-foreground">
                                Establishing Clestiq Shield as the industry standard for AI security and governance
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-2xl border border-border">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Real-time Protection</h3>
                            <p className="text-muted-foreground">
                                Advancing real-time threat detection and response to stay ahead of evolving risks
                            </p>
                        </div>
                    </div>

                    <section className="bg-card rounded-2xl border border-border p-8">
                        <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            As AI continues to evolve, so will the security challenges. We're committed to
                            staying at the forefront of this evolution, continuously innovating our platform to
                            address tomorrow's threats today.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Our roadmap includes advanced anomaly detection, federated security intelligence,
                            and deeper integrations with major AI platforms—all while maintaining our core
                            principles of performance, transparency, and ease of use.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
