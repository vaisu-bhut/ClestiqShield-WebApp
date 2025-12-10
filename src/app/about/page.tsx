export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Clestiq Shield</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Clestiq Shield is a pioneering security solution designed specifically for the AI native era.
                We empower developers and enterprises to build, deploy, and scale AI applications with complete confidence.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">To secure the world's AI infrastructure against emerging threats while enabling innovation.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">Our Team</h3>
                    <p className="text-gray-600 dark:text-gray-400">A dedicated team of security experts, AI researchers, and engineers committed to your safety.</p>
                </div>
            </div>
        </div>
    );
}
