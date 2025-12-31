export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-20 px-4 bg-muted/20">
            <div className="max-w-4xl mx-auto">
                <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                    <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                        <p className="text-lg">Last updated: December 31, 2025</p>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                            <p className="mb-4">
                                Clestiq Shield collects specific categories of data to provide our AI security and observability services:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Request Data:</strong> Inputs (prompts) and system prompts sent to the Gateway for security analysis.</li>
                                <li><strong>Response Data:</strong> LLM-generated outputs for validation by our Guardian service.</li>
                                <li><strong>Telemetry:</strong> Metrics, logs, and distributed traces managed via the Datadog Cloud Platform.</li>
                                <li><strong>Metadata:</strong> API keys, User IDs, and Application IDs used for authentication and rate limiting.</li>
                                <li><strong>Security Events:</strong> Details of blocked requests, detected threats (e.g., injections), and PII scans (redacted).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                            <p>
                                We use this data to enforce security policies, detect anomalies, improve detection algorithms,
                                and provide you with real-time observability dashboards. PII detected in streams is automatically redacted.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Security & Storage</h2>
                            <p>
                                We implement defense-in-depth security measures. All data is encrypted in transit (TLS 1.3) and at rest.
                                Telemetry data is securely forwarded to our Datadog integration for visibility.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Retention</h2>
                            <p>
                                Security audit logs are retained for 90 days. Account metadata is kept for the duration of your subscription
                                and deleted within 30 days of account closure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact Us</h2>
                            <p>
                                For privacy-related questions or data requests, please contact us at <a href="mailto:vasubhut157@gmail.com" className="text-primary hover:underline">vasubhut157@gmail.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
