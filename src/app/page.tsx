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
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 dark:opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now monitoring 1M+ AI requests daily
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
              Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Clestiq Shield provides the ultimate defense for your AI applications.
              Monitor, secure, and manage your AI infrastructure with confidence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/20 hover:shadow-primary/40 ring-offset-2 focus:ring-2 ring-primary"
              >
                Get Started Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-card text-foreground border border-input shadow-sm hover:bg-accent/10 hover:border-primary/50 rounded-full font-bold text-lg transition-all hover:scale-105"
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
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl p-2 shadow-2xl shadow-primary/10">
              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-muted/20 flex items-center justify-center border border-border/50 relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/dashboard_mockup.png"
                  alt="Clestiq Shield Dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
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
                className="p-8 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/95">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-primary to-background" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to secure your AI infrastructure?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Join thousands of developers who trust Clestiq Shield for their AI security needs.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-background text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-secondary transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

    </div>
  );
}
