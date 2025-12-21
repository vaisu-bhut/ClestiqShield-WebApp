export default function TermsPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p className="text-lg">Last updated: December 21, 2025</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing Clestiq Shield services, you agree to be bound by these Terms of Service
                            and all applicable laws and regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
                        <p>
                            Permission is granted to use Clestiq Shield for commercial and non-commercial purposes
                            in accordance with your subscription plan.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Service Availability</h2>
                        <p>
                            We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled
                            maintenance will be announced in advance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitations of Liability</h2>
                        <p>
                            Clestiq Inc. shall not be liable for any indirect, incidental, or consequential damages
                            arising from the use of our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Modifications</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Changes will be effective
                            immediately upon posting.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
