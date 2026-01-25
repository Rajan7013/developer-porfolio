'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Layers, Database, Cpu, Globe, Shield, Activity, Server, Zap, Lock, Monitor, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StackPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background text-text-primary pt-[74px] font-sans selection:bg-skin selection:text-white">

                {/* --- H1 HEADER --- */}
                <section className="pt-2 pb-6 md:pb-8 md:pt-4 text-center border-b border-bg-50 bg-background relative overflow-hidden">
                    {/* Decorative blur */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-skin/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block p-1.5 px-3 rounded-full bg-skin/10 text-skin border border-skin/20 text-xs font-bold tracking-widest uppercase mb-3"
                        >
                            Production Architecture
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight text-text-primary"
                        >
                            Full Stack AI Technology Stack
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
                        >
                            A real-world, performance-first stack used to build scalable web, AI, and automation systems.
                        </motion.p>
                    </div>
                </section>

                {/* --- WHY THIS STACK EXISTS --- */}
                <section className="py-6 md:py-8 bg-card border-b border-bg-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-background rounded-3xl border border-bg-50 p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.2)] transition-shadow duration-500"
                        >
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-text-primary border-b border-bg-50 pb-2">
                                    <Zap className="text-skin" />
                                    Built for performance, not for trends
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-lg text-text-secondary leading-relaxed mb-6">
                                            This stack is not a collection of popular tools. It is a production architecture optimized for:
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "Speed and SEO (SSR + static optimization)",
                                                "Zero-cost or low-cost deployment",
                                                "Security and scalability",
                                                "Real-world reliability"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 font-medium text-text-primary">
                                                    <div className="w-2 h-2 rounded-full bg-skin shadow-[0_0_10px_var(--skin-color)]"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-center bg-card/50 rounded-2xl p-6 border border-bg-50">
                                        <p className="text-center font-mono text-sm text-text-secondary">
                                            <span className="block text-4xl font-bold text-text-primary mb-2">100%</span>
                                            Real-world Application<br />in Live Systems
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- CORE TECHNOLOGY LAYERS (BENTO GRID) --- */}
                <section className="py-6 md:py-8 bg-background border-b border-bg-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-6 text-center"
                        >
                            <h2 className="text-2xl font-bold text-text-primary relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-skin">
                                Core Technology Layers
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* FRONTEND */}
                            <LayerCard
                                title="Frontend Technology"
                                icon={Layers}
                                items={[
                                    { name: "Next.js (App Router)", desc: "Server-side rendering, pre-rendering, and edge performance.", logo: "next-js.svg" },
                                    { name: "TypeScript", desc: "Prevents runtime failures and enforces architecture discipline.", logo: "typescript.svg" },
                                    { name: "Tailwind CSS", desc: "Atomic styling for speed, consistency, responsive design.", logo: "tailwind-css.svg" },
                                    { name: "Framer Motion", desc: "Smooth UI animations without performance loss.", logo: "framer-motion.svg" },
                                    { name: "Lucide Icons", desc: "Lightweight, scalable SVG icon system.", logo: "lucid icons.png" }
                                ]}
                                className="md:col-span-2"
                            />

                            {/* BACKEND */}
                            <LayerCard
                                title="Backend Technology"
                                icon={Server}
                                items={[
                                    { name: "Node.js", desc: "High-performance asynchronous runtime.", logo: "nodejs.svg" },
                                    { name: "Python", desc: "AI, Data Science, and backend automation.", logo: "python.svg" },
                                    { name: "Next.js API Routes / Express", desc: "Secure and fast API endpoints.", logo: "next-js.svg" },
                                    { name: "JWT Authentication", desc: "Stateless, scalable user sessions." },
                                    { name: "Zod Validation", desc: "Runtime validation for data safety." }
                                ]}
                            />

                            {/* DATABASE */}
                            <LayerCard
                                title="Database & Storage"
                                icon={Database}
                                items={[
                                    { name: "Firebase", desc: "Realtime database, authentication, free-tier friendly.", logo: "firebase.svg" },
                                    { name: "PostgreSQL", desc: "Relational consistency and data integrity.", logo: "postgresql-inc.svg" },
                                    { name: "Prisma", desc: "Type-safe database access." }
                                ]}
                            />

                            {/* AI & AUTOMATION */}
                            <LayerCard
                                title="AI & Automation Layer"
                                icon={Cpu}
                                items={[
                                    { name: "OpenAI / ChatGPT", desc: "Natural language reasoning and automation.", logo: "chatgpt.svg" },
                                    { name: "Google Gemini", desc: "Multimodal AI capabilities and long context window.", logo: "gemini.svg" },
                                    { name: "Claude AI", desc: "High-intelligence reasoning and coding tasks.", logo: "claude.svg" }
                                ]}
                                className="md:col-span-2"
                            />

                            {/* DEVOPS */}
                            <LayerCard
                                title="DevOps & Hosting"
                                icon={Globe}
                                items={[
                                    { name: "Vercel", desc: "Edge deployment, CDN, SSR optimization.", logo: "vercel.svg" },
                                    { name: "GitHub Actions", desc: "Automated CI/CD.", logo: "github.svg" },
                                    { name: "Cloudflare", desc: "Caching, firewall, performance protection.", logo: "cloudflare.svg" }
                                ]}
                            />

                            {/* SECURITY */}
                            <LayerCard
                                title="Security Layer"
                                icon={Shield}
                                items={[
                                    { name: "OAuth & JWT", desc: "Authentication and authorization." },
                                    { name: "Middleware Guards", desc: "Role-based access control." },
                                    { name: "Rate Limiting", desc: "Abuse protection." }
                                ]}
                            />

                            {/* MONITORING */}
                            <LayerCard
                                title="Monitoring & Performance"
                                icon={Activity}
                                items={[
                                    { name: "Lighthouse", desc: "Performance audits." },
                                    { name: "Sentry", desc: "Error tracking.", logo: "sentry-3.svg" },
                                    { name: "Google Analytics", desc: "Traffic and system behavior.", logo: "google-analytics.svg" }
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* --- SYSTEM ARCHITECTURE --- */}
                <section className="py-6 md:py-8 bg-card border-b border-bg-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-6"
                        >
                            <h2 className="text-2xl font-bold text-text-primary relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-skin">
                                System Architecture
                            </h2>
                            <p className="mt-4 text-text-secondary">How the data flows through the system</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                            {/* Connector Line Desktop */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-skin/50 to-transparent -translate-y-1/2 z-0"></div>

                            <ArchBlock
                                icon={User}
                                title="Client"
                                items={["Browser / Mobile", "React UI"]}
                                step="01"
                            />

                            <ArchBlock
                                icon={Globe}
                                title="Edge Network"
                                items={["Vercel CDN", "Middleware Cache"]}
                                step="02"
                            />

                            <ArchBlock
                                icon={Server}
                                title="Compute Layer"
                                items={["Next.js Server", "API Routes", "Auth Guards"]}
                                isActive
                                step="03"
                            />

                            <ArchBlock
                                icon={Database}
                                title="Data & AI"
                                items={["Postgres / Firebase", "LLM Inference"]}
                                step="04"
                            />
                        </div>
                    </div>
                </section>

                {/* --- PERFORMANCE METRICS --- */}
                <section className="py-6 md:py-8 bg-background border-b border-bg-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-bg-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.2)] transition-shadow duration-500"
                        >
                            <div className="p-4 border-b border-bg-50 bg-background/50">
                                <h2 className="text-xl font-bold text-text-primary text-center">Performance Metrics</h2>
                            </div>
                            <div className="divide-y divide-bg-50">
                                <MetricRow label="Performance" value="96–100" />
                                <MetricRow label="Accessibility" value="96–100" />
                                <MetricRow label="Best Practices" value="96–100" />
                                <MetricRow label="SEO" value="100" highlight />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- LIVE SYSTEMS --- */}
                <section className="py-6 md:py-8 bg-card border-b border-bg-50">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-2xl font-bold mb-6 text-text-primary">Live Systems Using This Stack</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: "Consultancy Platform", url: "https://www.pinnaclenepal.org/", external: true },
                                { name: "School Management System", url: "https://bfps-ruddy.vercel.app/", external: true },
                                { name: "College Portal with AI", url: "https://edu-svcet.vercel.app/", external: true },
                                { name: "AI-powered Tools", url: "https://health-assistant-ai-ashen.vercel.app/", external: true },
                                { name: "Portfolio", url: "https://rajan-portfolio-iota.vercel.app/", external: true }
                            ].map((sys, i) => (
                                <Link
                                    key={i}
                                    href={sys.url}
                                    target={sys.external ? "_blank" : undefined}
                                    className="px-6 py-3 rounded-full bg-background border border-bg-50 text-text-secondary font-medium hover:text-skin hover:border-skin hover:shadow-[0_0_20px_rgba(var(--skin-color-rgb),0.3)] hover:-translate-y-1 transition-all duration-300"
                                >
                                    {sys.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FINAL CALLOUT --- */}
                <section className="py-10 bg-background">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <div className="p-6 rounded-3xl bg-skin/5 border border-skin/20">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">This stack is not theoretical.</h3>
                            <p className="text-xl text-text-secondary">It is the system behind everything I build.</p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}

// --- SUB-COMPONENTS ---

function LayerCard({ title, icon: Icon, items, className = "" }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`bg-card rounded-2xl border border-bg-50 p-4 md:p-5 hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.4)] hover:border-skin hover:-translate-y-1 transition-all duration-300 group shadow-sm ${className}`}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-bg-50 text-skin group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-text-primary">{title}</h3>
            </div>
            <div className="space-y-3">
                {items.map((item: any, i: number) => (
                    <div key={i} className="group/item flex items-start gap-4">
                        {/* Logo */}
                        {item.logo && (
                            <div className="w-10 h-10 shrink-0 bg-bg-50/50 rounded-lg p-1.5 border border-bg-50 group-hover/item:border-skin/20 transition-colors">
                                <img
                                    src={`/technology logo/${item.logo}`}
                                    alt={item.name}
                                    className="w-full h-full object-contain drop-shadow-sm"
                                />
                            </div>
                        )}

                        <div>
                            <div className="font-bold text-text-primary mb-1 group-hover/item:text-skin transition-colors">{item.name}</div>
                            <div className="text-sm text-text-secondary leading-snug">{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

function ArchBlock({ icon: Icon, title, items, isActive, step }: any) {
    return (
        <div className={`relative z-10 bg-background rounded-2xl border p-6 flex flex-col items-center text-center transition-all duration-300 ${isActive ? 'border-skin shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.3)]' : 'border-bg-50 hover:border-skin hover:shadow-xl'}`}>
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card border border-bg-50 flex items-center justify-center text-xs font-bold text-text-secondary shadow-sm">
                {step}
            </div>
            <div className={`p-4 rounded-full mb-4 ${isActive ? 'bg-skin/20 text-skin' : 'bg-bg-50 text-text-secondary'}`}>
                <Icon size={28} />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">{title}</h3>
            <ul className="space-y-1">
                {items.map((it: any, i: number) => (
                    <li key={i} className="text-sm text-text-secondary">{it}</li>
                ))}
            </ul>
        </div>
    );
}

function MetricRow({ label, value, highlight }: any) {
    return (
        <div className="flex justify-between items-center p-6 hover:bg-bg-50/50 transition-colors cursor-default">
            <span className="font-medium text-text-secondary text-lg">{label}</span>
            <span className={`font-bold text-2xl ${highlight ? 'text-emerald-500' : 'text-text-primary'}`}>{value}</span>
        </div>
    );
}
