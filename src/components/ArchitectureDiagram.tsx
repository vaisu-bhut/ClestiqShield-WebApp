import { motion } from "framer-motion";
import { ArrowRight, Database, Globe, Lock, Shield, Brain, Terminal } from "lucide-react";

export function ArchitectureDiagram() {
    return (
        <div className="w-full py-12 px-4 overflow-x-auto">
            <div className="min-w-[800px] flex items-center justify-between gap-4 relative">
                {/* Background Connection Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 transform -translate-y-1/2" />

                {/* User/Client */}
                <div className="flex flex-col items-center gap-2 z-10">
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
                <div className="flex flex-col items-center gap-2 z-10">
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

                <ArrowRight className="w-6 h-6 text-muted-foreground/50" />

                {/* Eagle Eye (Management) - Floating above or distinct */}
                <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <div className="h-20 w-[1px] bg-border absolute bottom-[-20px] left-1/2" />
                    <div className="p-3 rounded-xl bg-card border border-border shadow-sm flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Database className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">Eagle-Eye</span>
                            <span className="text-[10px] text-muted-foreground">Management & Analytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
