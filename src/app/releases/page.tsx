import { Calendar, Tag } from "lucide-react";

export default function ReleasesPage() {
    const releases = [
        {
            version: "v1.2.0",
            date: "December 15, 2025",
            tag: "Latest",
            features: [
                "Added Guardian hallucination detection",
                "Improved Sentinel PII redaction accuracy",
                "New Eagle-Eye analytics dashboard",
                "Performance optimizations for high-volume traffic"
            ]
        },
        {
            version: "v1.1.0",
            date: "November 20, 2025",
            tag: "Stable",
            features: [
                "Introduced TOON conversion support",
                "Enhanced SQL injection detection",
                "Added real-time threat alerting",
                "Datadog integration for monitoring"
            ]
        },
        {
            version: "v1.0.0",
            date: "October 1, 2025",
            tag: "Initial Release",
            features: [
                "Core Gateway service",
                "Sentinel input security",
                "Guardian output validation",
                "Eagle-Eye authentication system"
            ]
        }
    ];

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Release Notes</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Stay updated with the latest features and improvements to Clestiq Shield
                </p>

                <div className="space-y-8">
                    {releases.map((release) => (
                        <div key={release.version} className="bg-card rounded-2xl border border-border p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <h2 className="text-2xl font-bold">{release.version}</h2>
                                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                                    {release.tag}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground mb-6">
                                <Calendar className="w-4 h-4" />
                                <span>{release.date}</span>
                            </div>

                            <ul className="space-y-3">
                                {release.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
