import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8 flex justify-center">
                    <div className="p-6 bg-primary/10 rounded-full">
                        <ShieldCheck className="w-20 h-20 text-primary" />
                    </div>
                </div>

                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-xl text-muted-foreground mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/20"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-card text-foreground border border-border hover:border-primary/50 rounded-full font-bold text-lg transition-all hover:scale-105"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}
