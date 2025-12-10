"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Zap, Lock, Activity, Eye, FileKey } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Advanced Security",
      description: "Protect your AI applications with enterprise-grade security protocols and real-time threat detection.",
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Optimized for speed, ensuring your AI responses are secure without compromising performance.",
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "We ensure your sensitive data remains private with state-of-the-art encryption standards.",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Track API usage, threats, and performance metrics in real-time through our intuitive dashboard.",
    },
    {
      icon: Eye,
      title: "Eagle Eye Vision",
      description: "Comprehensive visibility into your AI traffic, giving you full control over your ecosystem.",
    },
    {
      icon: FileKey,
      title: "Key Management",
      description: "Effortlessly manage API keys and access controls for all your applications in one place.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] dark:bg-[#020617] text-gray-900 dark:text-gray-100 font-sans">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Removed gradient blur */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
              Secure Your AI Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Clestiq Shield provides the ultimate defense for your AI applications.
              Monitor, secure, and manage your AI infrastructure with confidence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-primary hover:bg-indigo-700 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl shadow-primary/30"
              >
                Get Started Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/20 rounded-full font-bold text-lg transition-transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl p-2 shadow-2xl">
              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5">
                <p className="text-gray-400 font-medium">Interactive Dashboard Preview Image Placeholder</p>
                {/*  You can replace this with an actual screenshot using <Image /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to secure your AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-gray-50 dark:bg-white/5 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/95 dark:bg-primary/90">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to secure your AI infrastructure?
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Join thousands of developers who trust Clestiq Shield for their AI security needs.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

    </div>
  );
}
