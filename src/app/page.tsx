"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Zap, Lock, Activity, Eye, FileKey, ArrowRight, BarChart3, Cloud, Server, FileText, Network, LayoutDashboard, Bell, FolderOpen } from "lucide-react";
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
              The Unified AI Security Platform. Secure your LLMs with <strong>defense-in-depth architecture</strong>,
              from advanced input sanitization to output hallucination checks and PII redaction.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://platform.shield.clestiq.com/auth/signup"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/20 hover:shadow-primary/40 ring-offset-2 focus:ring-2 ring-primary"
              >
                Get Started Free
              </a>
              <Link
                href="/api-reference"
                className="px-8 py-4 bg-card text-foreground border border-input shadow-sm hover:bg-accent/10 hover:border-primary/50 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                API Reference
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Defense-in-Depth Architecture</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Requests flow through our intelligent security layers—<strong>Sentinel</strong> and <strong>Guardian</strong>—ensuring
              safety before and after every LLM interaction. Managed by <strong>Eagle-Eye</strong> and observed via <strong>Datadog</strong>.
            </p>
          </div>
          <div className="bg-background rounded-2xl border border-border shadow-sm p-4 md:p-8 flex justify-center overflow-hidden">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Core Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
              Comprehensive Protection Suite
            </p>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
              Four specialized microservices working in harmony to secure your AI infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Sentinel"
              description="The Input Security Agent. Specialized in detecting and neutralizing incoming threats."
              icon={ShieldCheck}
              features={[
                "SQL & Command Injection",
                "XSS Protection",
                "PII Redaction",
                "Input Sanitization",
                "LLM Forwarding",
              ]}
              delay={0.1}
            />
            <ServiceCard
              title="Guardian"
              description="The Output Validation Agent. Ensures AI generated content is safe, accurate, and on-brand."
              icon={Lock}
              features={[
                "Hallucination Detection",
                "Toxicity & Tone Check",
                "Data Leak Prevention",
                "PII Leak Detection",
                "False Refusal Check",
                "Structured Output"
              ]}
              delay={0.2}
            />
            <ServiceCard
              title="Eagle-Eye"
              description="Identity & Management Layer. Complete visibility and control over your API usage."
              icon={Activity}
              features={[
                "Usage Analytics",
                "User Management",
                "App Management",
                "API Key Management",
              ]}
              delay={0.3}
            />
            <ServiceCard
              title="Gateway"
              description="The central nervous system orchestrating secure communication."
              icon={Zap}
              features={[
                "Ultra-low Latency",
                "Request Routing",
                "Load Balancing",
                "Traceability",
                "Rate Limiting (Redis)"
              ]}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Observability Section */}
      <section id="observability" className="py-24 bg-gradient-to-b from-background to-muted/50 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#632CA6]/10 border border-[#632CA6]/20 text-[#632CA6] text-sm font-medium">
                <Activity className="w-4 h-4" />
                Powered by Datadog
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Full Visibility with <span className="text-[#632CA6]">Datadog</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just secure your AI; we give you X-Ray vision into it. Clestiq Shield integrates natively
                with the Datadog Cloud Platform to provide end-to-end observability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">APM Traces</h3>
                    <p className="text-sm text-muted-foreground mt-1">End-to-end request tracing from Gateway to LLM models.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500 mt-1">
                    <FileKey className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Unified Logs</h3>
                    <p className="text-sm text-muted-foreground mt-1">Centralized logging for all 4 microservices with context.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Real-time Metrics</h3>
                    <p className="text-sm text-muted-foreground mt-1">Track token usage, latency, and threat detection rates.</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 mt-1">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">K8s Cluster Stats</h3>
                    <p className="text-sm text-muted-foreground mt-1">Infrastructure visibility via Kube State Metrics integration.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature List Side */}
            <div className="flex-1">
              <div className="bg-card/50 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#632CA6]" />
                  <span>Monitoring Capabilities</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                  {[
                    { name: "Continuous Profiler", icon: BarChart3 },
                    { name: "Infra Monitoring", icon: Server },
                    { name: "APM", icon: Activity },
                    { name: "Log Management", icon: FileText },
                    { name: "Metrics", icon: BarChart3 },
                    { name: "Traces Correlation", icon: Network },
                    { name: "Dashboards", icon: LayoutDashboard },
                    { name: "Monitors", icon: Eye },
                    { name: "Alerting", icon: Bell },
                    { name: "Case Management", icon: FolderOpen },
                  ].map((feature) => (
                    <div key={feature.name} className="group flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-[#632CA6]/30 hover:bg-[#632CA6]/5 transition-all duration-300 cursor-default">
                      <div className="w-10 h-10 rounded-lg bg-[#632CA6]/10 flex items-center justify-center text-[#632CA6] group-hover:scale-110 group-hover:bg-[#632CA6] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(99,44,166,0.3)]">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
