"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Zap, Lock, Activity, Eye, FileKey, ArrowRight } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 dark:opacity-20" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
              Protecting GenAI Applications in Real-time
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
              Clestiq <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Shield</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              The Unified AI Security Platform. Secure your LLMs with defense-in-depth architecture,
              from input sanitization to output hallucination checks.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="http://localhost:3001/auth/signup"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/20 hover:shadow-primary/40 ring-offset-2 focus:ring-2 ring-primary"
              >
                Get Started Free
              </a>
              <Link
                href="/docs"
                className="px-8 py-4 bg-card text-foreground border border-input shadow-sm hover:bg-accent/10 hover:border-primary/50 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                Read Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your requests flow through our intelligent security layers before ever reaching the LLM, ensuring safety at every step.
            </p>
          </div>
          <div className="bg-background rounded-2xl border border-border shadow-sm p-4 md:p-8 flex justify-center">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Core Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
              Comprehensive Protection Suite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Sentinel"
              description="The Input Security Agent. Specialized in detecting and neutralizing incoming threats before they process."
              icon={ShieldCheck}
              features={["SQL Injection Detection", "XSS & Command Injection", "PII Redaction", "Input Sanitization"]}
              delay={0.1}
            />
            <ServiceCard
              title="Guardian"
              description="The Output Validation Agent. Ensures AI generated content is safe, accurate, and on-brand."
              icon={Lock}
              features={["Hallucination Detection", "Toxicity Scoring", "Tone Compliance", "Data Leakage Prevention"]}
              delay={0.2}
            />
            <ServiceCard
              title="Eagle-Eye"
              description="Identity & Management Layer. Complete visibility and control over your API usage."
              icon={Activity}
              features={["API Key Management", "Usage Analytics", "Role-Based Access", "Multi-App Support"]}
              delay={0.3}
            />
            <ServiceCard
              title="Gateway"
              description="High-Performance Proxy. The central nervous system orchestrating secure communication."
              icon={Zap}
              features={["Ultra-low Latency", "Request Routing", "Load Balancing", "Traceability"]}
              delay={0.4}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
