import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Get in touch with our team. We're here to help!
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 bg-card rounded-2xl border border-border">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground mb-2">General inquiries</p>
                        <a href="mailto:hello@clestiq.com" className="text-primary hover:underline">
                            hello@clestiq.com
                        </a>
                        <p className="text-muted-foreground mt-4 mb-2">Support</p>
                        <a href="mailto:support@clestiq.com" className="text-primary hover:underline">
                            support@clestiq.com
                        </a>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border border-border">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Office</h3>
                        <p className="text-muted-foreground">
                            123 Security Boulevard<br />
                            San Francisco, CA 94105<br />
                            United States
                        </p>
                    </div>
                </div>

                <div className="bg-card rounded-2xl border border-border p-8">
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="How can we help?"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
