export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Contact Us</h1>
            <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent dark:text-white" />
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
