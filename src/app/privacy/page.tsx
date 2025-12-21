export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p className="text-lg">Last updated: December 21, 2025</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                        <p>
                            Clestiq Shield collects information necessary to provide our AI security services. This includes
                            API usage data, security event logs, and account information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                        <p>
                            We use collected data to monitor and improve our security services, detect threats,
                            and provide analytics to our customers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your data. All data is encrypted
                            in transit and at rest.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Retention</h2>
                        <p>
                            Security logs are retained for 90 days. Account data is kept for the duration of your subscription
                            and deleted within 30 days of account closure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact Us</h2>
                        <p>
                            For privacy-related questions, contact us at privacy@clestiq.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
