import { motion } from "framer-motion";
import { ArrowRight, Database, Globe, Lock, Shield, Brain, Terminal, Activity } from "lucide-react";

export function ArchitectureDiagram() {
    return (
        <div className="w-full py-12 px-4 overflow-x-auto">
            <div className="min-w-[1000px] flex items-center justify-between gap-6 relative pb-60">
                {/* Background Connection Line - Main Flow */}
                <div className="absolute top-[40px] left-[50px] w-[800px] h-0.5 bg-border -z-10" />

                {/* User/Client */}
                <div className="flex flex-col items-center gap-2 z-10 w-24">
                    <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <span className="font-semibold text-sm">Client</span>
                </div>

                <ArrowRight className="w-6 h-6 text-muted-foreground/50" />

                {/* Gateway */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 z-10 p-4 rounded-xl bg-card border border-border shadow-md w-40"
                >
                    <div className="p-2 bg-accent/10 rounded-lg text-accent mb-1">
                        <Terminal className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-sm">Gateway</span>
                    <span className="text-xs text-muted-foreground text-center">Auth & Routing</span>
                </motion.div>

                <ArrowRight className="w-6 h-6 text-muted-foreground/50" />

                {/* Sentinel */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 z-10 p-4 rounded-xl bg-card border border-border shadow-md w-40 border-b-4 border-b-primary"
                >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mb-1">
                        <Shield className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-sm">Sentinel</span>
                    <span className="text-xs text-muted-foreground text-center">Input Security</span>
                </motion.div>

                <ArrowRight className="w-6 h-6 text-muted-foreground/50" />

                {/* LLM */}
                <div className="flex flex-col items-center gap-2 z-10 w-32">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl text-primary-foreground">
                        <Brain className="w-10 h-10" />
                    </div>
                    <span className="font-semibold text-sm">LLM Model</span>
                </div>

                <ArrowRight className="w-6 h-6 text-muted-foreground/50" />

                {/* Guardian */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 z-10 p-4 rounded-xl bg-card border border-border shadow-md w-40 border-b-4 border-b-primary"
                >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mb-1">
                        <Lock className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-sm">Guardian</span>
                    <span className="text-xs text-muted-foreground text-center">Output Validation</span>
                </motion.div>

                {/* Eagle Eye (Management) */}
                <div className="absolute top-[-150px] left-[220px] flex flex-col items-center gap-2 z-10">
                    <div className="h-28 w-[1px] bg-border absolute bottom-[-28px] left-1/2 border-l border-dashed border-muted-foreground/50" />
                    <div className="p-3 rounded-xl bg-card border border-border shadow-sm flex items-center gap-3 w-48">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Database className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">Eagle-Eye</span>
                            <span className="text-[10px] text-muted-foreground">Management & Analytics</span>
                        </div>
                    </div>
                </div>

                {/* Datadog Observability Hub */}
                <div className="absolute top-[250px] left-0 w-full flex flex-col items-center gap-2 z-0">
                    {/* Connections to Datadog */}
                    <svg className="absolute bottom-full left-0 w-full h-48 pointer-events-none overflow-visible z-[-1]">
                        {/* Gateway to DD (Left) - approx 220px */}
                        <path d="M 220 -50 C 220 50, 500 0, 500 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="text-primary/20" />

                        {/* Sentinel to DD (Center) - approx 460px */}
                        <path d="M 460 -50 C 460 50, 500 0, 500 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="text-primary/20" />

                        {/* Guardian to DD (Right) - approx 900px */}
                        <path d="M 900 -50 C 900 50, 500 0, 500 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="text-primary/20" />

                        {/* Eagle Eye to DD (Top Left) - from top -150px */}
                        <path d="M 300 -150 C 300 -50, 500 0, 500 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="text-primary/10 opacity-40" />
                    </svg>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-1 rounded-2xl bg-gradient-to-tr from-[#632CA6] to-[#7F45C6] shadow-xl relative z-20"
                    >
                        <div className="px-6 py-4 rounded-xl bg-[#2C1D42] text-white flex items-center gap-8 min-w-[500px]">
                            <div className="p-3 bg-[#632CA6]/20 rounded-full border border-[#632CA6]/50">
                                <Activity className="w-8 h-8 text-[#A66EFA]" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <span className="font-bold text-lg tracking-wide">Datadog Observability</span>
                                <span className="text-xs text-gray-300">Unified Telemetry Platform</span>
                            </div>
                            <div className="flex flex-col gap-1 text-[10px] font-mono text-gray-400 text-right">
                                <span>TRACES & LOGS</span>
                                <span>METRICS & PROFILES</span>
                                <span className="text-[#A66EFA]">K8S CLUSTER STATS</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
