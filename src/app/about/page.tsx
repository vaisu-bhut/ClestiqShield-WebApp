import { Users, Target, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">About Clestiq Shield</h1>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-muted-foreground text-lg">
                            Clestiq Shield is dedicated to securing the future of AI applications. We provide
                            enterprise-grade security for GenAI systems, protecting against threats while
                            maintaining performance and usability.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-3 gap-6 my-12">
                        <div className="p-6 bg-card rounded-2xl border border-border">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                            <p className="text-muted-foreground">
                                Built by security and AI experts with decades of combined experience
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-2xl border border-border">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Focused Approach</h3>
                            <p className="text-muted-foreground">
                                Defense-in-depth architecture designed specifically for AI systems
                            </p>
                        </div>

                        <div className="p-6 bg-card rounded-2xl border border-border">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                <Award className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                            <p className="text-muted-foreground">
                                Trusted by leading organizations to protect their AI infrastructure
                            </p>
                        </div>
                    </div>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            Founded in 2024, Clestiq was born from the recognition that traditional security tools
                            weren't designed for the unique challenges of AI applications. As LLMs became central
                            to business operations, the need for specialized security grew exponentially.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Today, we protect millions of AI requests daily, helping organizations safely harness
                            the power of GenAI while maintaining security, compliance, and user trust.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
