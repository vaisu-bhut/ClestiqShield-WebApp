import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Database, Globe, Lock, Shield, Brain, Terminal, Activity, Server, FileText, Router, Layers, Play, Cpu, Box, Bell, Mail, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

// Define simulation steps for Chat Flow
const CHAT_STEPS = [
    { x: 50, y: 284, text: "Client initiates secure chat request" },
    { x: 180, y: 284, text: "Redis: Checking Rate Limits & Cache" },
    { x: 320, y: 284, text: "Gateway: Authenticating & Routing" },
    { x: 550, y: 284, text: "Sentinel: Scanning for Injection Attacks" },
    { x: 780, y: 80, text: "LLM Platform: Processing with Context" }, // Moved LLM way up
    { x: 550, y: 284, text: "Sentinel: Validating Prompt Safety" }, // Return to Sentinel flow
    { x: 1000, y: 284, text: "Guardian: Validating Output for Hallucinations" },
    { x: 780, y: 80, text: "LLM Platform: Guardian Similarity Check" }, // Guardian calls LLM
    { x: 1000, y: 284, text: "Guardian: Safety Check Passed" },
    { x: 320, y: 284, text: "Gateway: Compressing & Encrypting Response" },
    { x: 50, y: 284, text: "Client receives secure response" },
];

// Define simulation steps for Management Flow
const MGMT_STEPS = [
    { x: 50, y: 284, text: "Client requests API Key creation" },
    { x: 320, y: 250, text: "Gateway: Routing to Management Service" },
    { x: 390, y: 100, text: "Eagle-Eye: verifying user permissions" },
    { x: 580, y: 100, text: "SQL DB: Persisting new API Key hash" },
    { x: 390, y: 100, text: "Eagle-Eye: Generating audit logs" },
    { x: 320, y: 250, text: "Gateway: Returning success status" },
    { x: 50, y: 284, text: "Client receives new API Key" },
];

export function ArchitectureDiagram() {
    const [activeSimulation, setActiveSimulation] = useState<"chat" | "mgmt" | null>(null);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (activeSimulation) {
            const steps = activeSimulation === "chat" ? CHAT_STEPS : MGMT_STEPS;
            if (currentStep < steps.length - 1) {
                timer = setTimeout(() => {
                    setCurrentStep((prev) => prev + 1);
                }, 2500); // 2.5s per step
            } else {
                timer = setTimeout(() => {
                    setActiveSimulation(null);
                    setCurrentStep(0);
                }, 3000);
            }
        }
        return () => clearTimeout(timer);
    }, [activeSimulation, currentStep]);

    const startSimulation = (type: "chat" | "mgmt") => {
        setActiveSimulation(type);
        setCurrentStep(0);
    };

    const currentStepData = activeSimulation
        ? (activeSimulation === "chat" ? CHAT_STEPS[currentStep] : MGMT_STEPS[currentStep])
        : null;

    return (
        <div className="w-full flex flex-col items-center gap-8">

            {/* Controls */}
            <div className="flex gap-4 z-30">
                <button
                    onClick={() => startSimulation("chat")}
                    disabled={!!activeSimulation}
                    className="px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 font-bold hover:bg-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
                >
                    <Play className="w-4 h-4 fill-current" /> Simulate Chat
                </button>
                <button
                    onClick={() => startSimulation("mgmt")}
                    disabled={!!activeSimulation}
                    className="px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/50 text-blue-500 font-bold hover:bg-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
                >
                    <Play className="w-4 h-4 fill-current" /> Simulate Management
                </button>
            </div>

            {/* Dynamic Status Text */}
            <div className="h-12 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {currentStepData && (
                        <motion.div
                            key={currentStepData.text}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-lg font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                        >
                            {">"} {currentStepData.text}
                        </motion.div>
                    )}
                    {!activeSimulation && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-muted-foreground text-sm"
                        >
                            Select a simulation to visualize the architecture
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full py-12 px-4 overflow-x-auto bg-[#0a0a0a] rounded-3xl border border-white/5 relative">
                <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                <div className="min-w-[1100px] h-[850px] relative">

                    {/* --- NODES --- */}

                    {/* 1. Client (Left) */}
                    <div className="absolute top-[250px] left-[20px] z-20 flex flex-col items-center gap-3">
                        <div className={`w-20 h-20 rounded-full bg-black border-2 transition-colors duration-500 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] ${currentStepData && currentStep === 0 || (activeSimulation === 'chat' && currentStep === 10) || (activeSimulation === 'mgmt' && currentStep === 6) ? 'border-white shadow-white/20' : 'border-primary/50'}`}>
                            <Globe className="w-10 h-10 text-primary" />
                        </div>
                        <span className="font-bold text-sm tracking-widest uppercase text-muted-foreground">Client</span>
                    </div>

                    {/* Redis Node */}
                    <div className="absolute top-[260px] left-[160px] z-20">
                        <motion.div
                            animate={{ scale: (activeSimulation === 'chat' && currentStep === 1) ? 1.1 : 1 }}
                            className={`w-28 p-3 rounded-xl bg-card border shadow-lg flex flex-col items-center gap-2 ${activeSimulation === 'chat' && currentStep === 1 ? 'border-red-500 shadow-red-500/20' : 'border-red-500/30'}`}
                        >
                            <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                <Server className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xs">Redis Cache</span>
                        </motion.div>
                    </div>

                    {/* 2. Gateway */}
                    <div className="absolute top-[250px] left-[320px] z-20">
                        <motion.div
                            animate={{ scale: (currentStepData && (activeSimulation === 'chat' && [2, 9].includes(currentStep)) || (activeSimulation === 'mgmt' && [1, 5].includes(currentStep))) ? 1.1 : 1 }}
                            className={`w-40 p-4 rounded-xl bg-card border shadow-lg flex flex-col items-center gap-2 relative transition-colors duration-500 ${(currentStepData && (activeSimulation === 'chat' && [2, 9].includes(currentStep)) || (activeSimulation === 'mgmt' && [1, 5].includes(currentStep))) ? 'border-primary shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'border-primary/30'}`}
                        >
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <span className="font-bold">Gateway</span>
                        </motion.div>
                    </div>

                    {/* 3. Eagle Eye & DB - Shifted Right slightly */}
                    <div className="absolute top-[50px] left-[400px] z-20 flex items-center gap-8">
                        <motion.div
                            animate={{ scale: (activeSimulation === 'mgmt' && [2, 4].includes(currentStep)) ? 1.1 : 1 }}
                            className={`w-40 p-4 rounded-xl bg-card border shadow-lg flex flex-col items-center gap-2 ${activeSimulation === 'mgmt' && [2, 4].includes(currentStep) ? 'border-blue-500 shadow-blue-500/20' : 'border-blue-500/30'}`}
                        >
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                <Layers className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-blue-100">Eagle-Eye</span>
                        </motion.div>

                        {/* SQL DB */}
                        <motion.div
                            animate={{ scale: (activeSimulation === 'mgmt' && currentStep === 3) ? 1.1 : 1 }}
                            className={`w-32 p-3 rounded-xl bg-[#0f172a] border shadow-md flex flex-col items-center gap-2 ${activeSimulation === 'mgmt' && currentStep === 3 ? 'border-blue-400 shadow-blue-400/20' : 'border-blue-500/20'}`}
                        >
                            <Database className="w-6 h-6 text-blue-400" />
                            <span className="text-xs font-mono text-blue-300">PostgreSQL</span>
                        </motion.div>
                    </div>

                    {/* 4. Sentinel */}
                    <div className="absolute top-[250px] left-[550px] z-20">
                        <motion.div
                            animate={{ scale: (activeSimulation === 'chat' && [3, 5].includes(currentStep)) ? 1.1 : 1 }}
                            className={`w-40 p-4 rounded-xl bg-card border shadow-lg flex flex-col items-center gap-2 border-b-4 ${activeSimulation === 'chat' && [3, 5].includes(currentStep) ? 'border-emerald-400 shadow-emerald-400/20' : 'border-emerald-500/30 border-b-emerald-500'}`}
                        >
                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                                <Shield className="w-6 h-6" />
                            </div>
                            <span className="font-bold">Sentinel</span>
                        </motion.div>
                    </div>

                    {/* 5. LLM Platform (Center Top) - SHARED RESOURCE */}
                    <div className="absolute top-[50px] left-[780px] z-20">
                        <motion.div
                            animate={{ scale: (activeSimulation === 'chat' && [4, 7].includes(currentStep)) ? 1.1 : 1 }}
                            className={`w-48 h-40 rounded-3xl bg-gradient-to-br from-[#1e1e2e] to-[#0f0f16] border border-purple-500/30 flex flex-col items-center justify-center shadow-2xl relative ${activeSimulation === 'chat' && [4, 7].includes(currentStep) ? 'shadow-[0_0_40px_rgba(168,85,247,0.4)] border-purple-400' : ''}`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-2 shadow-inner">
                                <Brain className="w-8 h-8 text-white relative z-10" />
                                <div className="absolute inset-0 bg-white/20 blur-md rounded-full animate-pulse" />
                            </div>
                            <span className="font-bold text-white tracking-wide">LLM Platform</span>
                            <span className="text-[10px] text-gray-400 mt-1">Provider Agnostic</span>
                        </motion.div>
                    </div>

                    {/* 6. Guardian (Right) */}
                    <div className="absolute top-[250px] left-[1000px] z-20">
                        <motion.div
                            animate={{ scale: (activeSimulation === 'chat' && [6, 8].includes(currentStep)) ? 1.1 : 1 }}
                            className={`w-40 p-4 rounded-xl bg-card border shadow-lg flex flex-col items-center gap-2 border-b-4 ${activeSimulation === 'chat' && [6, 8].includes(currentStep) ? 'border-emerald-400 shadow-emerald-400/20' : 'border-emerald-500/30 border-b-emerald-500'}`}
                        >
                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                                <Lock className="w-6 h-6" />
                            </div>
                            <span className="font-bold">Guardian</span>
                        </motion.div>
                    </div>

                    {/* --- OBSERVABILITY LAYER (Agents) --- */}
                    {/* Datadog Agent - Positioned at Left 350 (Right Edge 542) */}
                    <div className="absolute top-[500px] left-[350px] z-20">
                        <div className="w-48 p-3 rounded-lg bg-[#632CA6]/10 border border-[#632CA6]/40 flex flex-col items-center gap-2 bg-black/50 backdrop-blur-sm">
                            <Box className="w-6 h-6 text-[#A66EFA]" />
                            <span className="text-xs font-bold text-[#A66EFA]">Datadog Agent</span>
                            <span className="text-[12px] text-gray-400 text-center leading-tight">Logs, Traces, Metrics</span>
                        </div>
                    </div>
                    {/* Kube Agent - Positioned at Left 600 (Left Edge 600) */}
                    <div className="absolute top-[500px] left-[600px] z-20">
                        <div className="w-24 p-3 rounded-lg bg-[#326CE5]/10 border border-[#326CE5]/40 flex flex-col items-center gap-2 bg-black/50 backdrop-blur-sm">
                            <Cpu className="w-6 h-6 text-[#326CE5]" />
                            <span className="text-xs font-bold text-[#326CE5]">Kube Agent</span>
                            <span className="text-[12px] text-gray-400 text-center leading-tight">Infra Stats</span>
                        </div>
                    </div>

                    {/* 7. Datadog Platform (Mid-Bottom) */}
                    <div className="absolute top-[650px] left-0 right-0 z-20 flex justify-center">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="w-[90%] h-24 bg-[#1a1025] border border-[#632CA6]/30 rounded-2xl flex items-center justify-between px-8 relative overflow-hidden"
                        >
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="p-3 bg-[#632CA6] rounded-lg">
                                    <Activity className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-white">Datadog Observability Platform</h3>
                                    <p className="text-sm text-[#A66EFA]">Ingesting Metrics, Logs, & Traces</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- ALERTING LAYER (Bottom) --- */}
                    <div className="absolute top-[800px] left-0 right-0 z-20 flex justify-center gap-16">
                        {/* Monitor / Alert Node */}
                        <motion.div
                            className="flex flex-col items-center gap-2 bg-[#2d1b4e] p-3 rounded-xl border border-[#A66EFA]/50"
                            animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(166,110,250,0)", "0 0 20px rgba(166,110,250,0.3)", "0 0 0 rgba(166,110,250,0)"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Bell className="w-5 h-5 text-[#A66EFA]" />
                            <span className="text-xs font-bold text-white">Monitors & Detectors</span>
                        </motion.div>
                        {/* Email Alert */}
                        <div className="flex flex-col items-center gap-2 opacity-80">
                            <div className="p-2 bg-gray-800 rounded-lg border border-gray-700">
                                <Mail className="w-4 h-4 text-orange-400" />
                            </div>
                            <span className="text-[10px] text-gray-400">Email Alerts</span>
                        </div>
                        {/* Case Management */}
                        <div className="flex flex-col items-center gap-2 opacity-80">
                            <div className="p-2 bg-gray-800 rounded-lg border border-gray-700">
                                <Briefcase className="w-4 h-4 text-red-400" />
                            </div>
                            <span className="text-[10px] text-gray-400">Case Management</span>
                        </div>
                    </div>

                    {/* --- CONNECTIONS  --- */}
                    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 0.2 }} />
                                <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0.2 }} />
                            </linearGradient>
                        </defs>

                        {/* Chat Flow Line */}
                        <path d="M 50 290 L 160 290" stroke="#334155" strokeWidth="2" strokeDasharray="6 6" />{/* Client -> Redis */}
                        <path d="M 220 290 L 320 290" stroke="#334155" strokeWidth="2" strokeDasharray="6 6" />{/* Redis -> Gateway */}
                        <path d="M 480 290 L 550 290" stroke="#334155" strokeWidth="2" strokeDasharray="6 6" />{/* Gateway -> Sentinel */}

                        {/* Triangle Flow: Sentinel -> LLM, Guardian -> LLM */}
                        <path d="M 630 250 L 780 130" stroke="#10b981" strokeWidth="2" strokeDasharray="6 6" className="opacity-50" />{/* Sentinel -> LLM */}
                        <path d="M 1080 250 L 870 130" stroke="#10b981" strokeWidth="2" strokeDasharray="6 6" className="opacity-50" />{/* Guardian -> LLM */}

                        {/* Connecting Sentinel to Guardian directly */}
                        <path d="M 710 290 L 1000 290" stroke="#334155" strokeWidth="2" strokeDasharray="6 6" className="opacity-20" />

                        {/* Management Flow Line */}
                        <path d="M 400 250 C 400 150, 480 150, 480 100" stroke="#1e40af" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                        <path d="M 630 90 L 660 90" stroke="#1e40af" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />

                        {/* Observability Flows (Converging to Agents) */}
                        {/* Gateway (Center 400) -> DD Agent (Target ~400) */}
                        <path d="M 400 350 L 400 500" stroke="#632CA6" strokeWidth="1" className="opacity-30" />

                        {/* Eagle-Eye (Center 480) -> DD Agent (Target ~480) */}
                        <path d="M 480 180 L 480 500" stroke="#632CA6" strokeWidth="1" className="opacity-30" strokeDasharray="4 4" />

                        {/* Sentinel (Center 630) -> DD Agent (Target ~520, right side of box) */}
                        <path d="M 630 350 L 520 500" stroke="#632CA6" strokeWidth="1" className="opacity-30" />

                        {/* Guardian (Center 1080) -> DD Agent (Target ~540, right edge) */}
                        <path d="M 1080 350 L 540 500" stroke="#632CA6" strokeWidth="1" className="opacity-30" />

                        {/* Kube Agent (Left 600) -> DD Agent (Right 542) */}
                        {/* Path from Kube Left Edge (600) to DD Right Edge (542) */}
                        <path d="M 600 550 L 542 550" stroke="#326CE5" strokeWidth="1" className="opacity-30" strokeDasharray="2 2" />

                        {/* DD Agent (Center ~446) to Platform */}
                        <path d="M 446 580 L 446 650" stroke="#632CA6" strokeWidth="2" className="opacity-50" />

                        {/* Alerting Flows */}
                        <path d="M 500 750 L 500 800" stroke="#A66EFA" strokeWidth="2" className="opacity-50" strokeDasharray="4 4" />
                        <path d="M 600 750 L 600 800" stroke="#A66EFA" strokeWidth="2" className="opacity-50" strokeDasharray="4 4" />
                        <path d="M 540 820 L 580 820" stroke="#A66EFA" strokeWidth="1" className="opacity-30" />
                        <path d="M 640 820 L 680 820" stroke="#A66EFA" strokeWidth="1" className="opacity-30" />
                    </svg>

                    {/* --- SIMULATION CURSOR --- */}
                    <AnimatePresence>
                        {currentStepData && (
                            <motion.div
                                key="cursor"
                                className={`absolute z-40 w-4 h-4 rounded-full border-2 bg-background shadow-[0_0_20px_currentColor] flex items-center justify-center ${activeSimulation === 'chat' ? 'border-emerald-400 text-emerald-400 shadow-emerald-400/50' : 'border-blue-400 text-blue-400 shadow-blue-400/50'}`}
                                initial={{ top: currentStepData.y, left: currentStepData.x, scale: 0 }}
                                animate={{ top: currentStepData.y, left: currentStepData.x, scale: 1.2 }}
                                exit={{ scale: 0 }}
                                transition={{ type: "tween", ease: "easeInOut", duration: 1.2 }}
                            >
                                <div className="w-1.5 h-1.5 bg-current rounded-full animate-ping" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Constant Observability Particles */}
                    {/* 1. Services To DD Agent */}
                    {/* Gateway -> DD Agent */}
                    <motion.div className="absolute w-1.5 h-1.5 bg-[#A66EFA] rounded-full z-30" animate={{ top: [350, 500], left: [400, 400], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                    {/* Eagle-Eye -> DD Agent */}
                    <motion.div className="absolute w-1.5 h-1.5 bg-[#A66EFA] rounded-full z-30" animate={{ top: [180, 500], left: [480, 480], opacity: [1, 0] }} transition={{ duration: 2.0, repeat: Infinity, ease: "linear", delay: 0.6 }} />
                    {/* Sentinel -> DD Agent */}
                    <motion.div className="absolute w-1.5 h-1.5 bg-[#A66EFA] rounded-full z-30" animate={{ top: [350, 500], left: [630, 520], opacity: [1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.2 }} />
                    {/* Guardian -> DD Agent */}
                    <motion.div className="absolute w-1.5 h-1.5 bg-[#A66EFA] rounded-full z-30" animate={{ top: [350, 500], left: [1080, 540], opacity: [1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.4 }} />

                    {/* 2. Kube Agent -> DD Agent (Horizontal flow) */}
                    <motion.div className="absolute top-[550px] w-2 h-2 bg-[#326CE5] z-30" animate={{ left: [600, 542], opacity: [1, 0], rotate: [0, 90] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />

                    {/* 3. DD Agent To Platform (Falling particles) */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={`dd-agent-particle-${i}`}
                            className={`absolute top-[580px] w-2 h-2 rounded-full z-30 ${i === 0 ? "bg-orange-400" : i === 1 ? "bg-purple-400" : "bg-blue-400"}`}
                            style={{ left: 446 + (i * 10 - 10) }}
                            animate={{ top: [580, 650], opacity: [1, 0] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                        />
                    ))}

                    {/* 4. Alerting Signals (DD -> Monitor) */}
                    <motion.div
                        className="absolute top-[750px] left-[550px] w-1 h-8 bg-gradient-to-b from-[#A66EFA] to-transparent z-30 opacity-50"
                        animate={{ top: [750, 800], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                </div>
            </div>
        </div>
    );
}
