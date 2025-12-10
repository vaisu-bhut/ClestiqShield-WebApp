export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20 font-sans">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>

            <div className="prose dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
                <p className="text-lg">Last updated: December 10, 2025</p>

                <p>
                    Your privacy is critically important to us. At Clestiq Shield, we have a few fundamental principles:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>We don't ask you for personal information unless we truly need it.</li>
                    <li>We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
                    <li>We don't store personal information on our servers unless required for the on-going operation of one of our services.</li>
                </ul>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Information We Collect</h2>
                    <p>
                        <strong>Log Data</strong><br />
                        Like most website operators, Clestiq Shield collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request.
                    </p>
                    <p className="mt-4">
                        <strong>Personal Information</strong><br />
                        Visitors to Clestiq Shield's websites who sign up for our service are asked to provide a username and email address. We collect this information only insofar as is necessary or appropriate to fulfill the purpose of the visitor's interaction with Clestiq Shield.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. How We Use Information</h2>
                    <p>
                        We use the information we collect in various ways, including to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Provide, operate, and maintain our webste</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Security</h2>
                    <p>
                        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Changes to This Privacy Policy</h2>
                    <p>
                        Clestiq Shield may change its Privacy Policy from time to time, and in Clestiq Shield's sole discretion. Clestiq Shield encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us via <a href="/contact" className="text-primary hover:underline">our contact page</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
