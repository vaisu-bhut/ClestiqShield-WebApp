import Link from "next/link";
import { ShieldCheck, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-16 bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                            </div>
                            <span className="font-bold text-xl">Clestiq Shield</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            The Unified AI Security Platform. Protecting your GenAI applications in real-time with defense-in-depth architecture.
                        </p>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="font-semibold mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/#services" className="hover:text-primary transition-colors">Core Features</Link></li>
                            <li><Link href="/#observability" className="hover:text-primary transition-colors">Datadog Observability</Link></li>
                            <li><Link href="/api-reference" className="hover:text-primary transition-colors">API Reference</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/vision" className="hover:text-primary transition-colors">Our Vision</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Socials */}
                    <div>
                        <h4 className="font-semibold mb-6">Connect or Collaborate</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <a href="https://www.linkedin.com/in/vasubhut/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-4 h-4" />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/orgs/ClestiqShield/repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                            <a href="mailto:vasubhut157@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
                        <span>© 2025 Clestiq Inc. All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary">
                        <Heart className="w-3 h-3 fill-primary" />
                        <span>Built for the OpenSource Community powered by Datadog</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
