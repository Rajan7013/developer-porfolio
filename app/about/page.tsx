'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Search, PenTool, Code, ShieldCheck, Target, Book, Rocket } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            <main className="min-h-screen bg-background text-text-primary pt-24">

                {/* SEO H1 - Visually part of header or top section */}
                <div className="max-w-content mx-auto px-6 mb-6 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
                        Architecting Intelligent <span className="text-skin">Digital Experiences</span>
                    </h1>
                </div>

                {/* SECTION 1 — INTRO (Who I Am) */}
                <section className="py-8 bg-card border-b border-bg-50">
                    <div className="max-w-content mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            {/* Text Left */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-sm font-bold text-skin mb-3 uppercase tracking-widest">About Me</h2>
                                <h3 className="text-3xl font-bold mb-6 text-text-primary">
                                    Hi, I’m Rajan Prasaila Yadav
                                </h3>
                                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                                    I’m a 3rd-year B.Tech student and a full stack developer who builds and deploys real-world web and AI applications.
                                </p>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    I focus on creating complete systems — from frontend to backend, database, and cloud deployment — using modern, cost-efficient, and scalable technologies.
                                </p>
                            </div>

                            {/* Image Right */}
                            <div className="order-1 lg:order-2 flex justify-center">
                                {/* Placeholder for Personal Image - using a colored div for now or light/dark abstract if available */}
                                {/* Personal Image - Landscape */}
                                <div className="relative w-full max-w-[400px] aspect-3/2 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl hover:rotate-3 transition-transform duration-500">
                                    <Image
                                        src="/image/home-profile.webp"
                                        alt="Rajan Prasaila Yadav"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 — MY JOURNEY */}
                <section className="py-8 bg-background border-b border-bg-50">
                    <div className="max-w-content mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Image Left */}
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-[400px] aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/image/developer.webp"
                                        alt="My Developer Journey"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                </div>
                            </div>

                            {/* Text Right */}
                            <div>
                                <h2 className="text-sm font-bold text-skin mb-3 uppercase tracking-widest">My Journey</h2>
                                <h3 className="text-3xl font-bold mb-6 text-text-primary">
                                    From small ideas to real-world systems
                                </h3>
                                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                                    I started by building small projects at night after college, learning through practice and mistakes.
                                </p>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Today, I have deployed multiple real-world systems across education, finance, and AI tools — all built using free and open technologies and optimized for performance and reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — HOW I WORK */}
                <section className="py-8 bg-card border-b border-bg-50">
                    <div className="max-w-content mx-auto px-6 text-center">
                        <h2 className="text-sm font-bold text-skin mb-3 uppercase tracking-widest">How I Work</h2>
                        <h3 className="text-3xl font-bold mb-8 text-text-primary">My development process</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { title: "Research & Planning", icon: Search },
                                { title: "System Design", icon: PenTool },
                                { title: "AI-Assisted Dev", icon: Code },
                                { title: "Testing & Security", icon: ShieldCheck },
                                { title: "Deployment", icon: Rocket },
                            ].map((step, idx) => (
                                <div key={idx} className="bg-background p-6 rounded-2xl border border-bg-50 flex flex-col items-center gap-4 hover:border-skin/30 transition-colors group">
                                    <div className="p-3 bg-skin/10 text-skin rounded-xl group-hover:scale-110 transition-transform">
                                        <step.icon size={24} />
                                    </div>
                                    <span className="font-bold text-text-primary">{step.title}</span>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            I use AI to speed up coding, but the system architecture, logic, and decisions are mine. Every project is tested, optimized, and deployed to work in real environments.
                        </p>
                    </div>
                </section>

                {/* SECTION 4 — VALUES */}
                <section className="py-8 bg-background border-b border-bg-50">
                    <div className="max-w-content mx-auto px-6 text-center">
                        <h2 className="text-sm font-bold text-skin mb-3 uppercase tracking-widest">What I Believe</h2>
                        <h3 className="text-3xl font-bold mb-8 text-text-primary">Principles that guide my work</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Build before you talk", desc: "Action speaks louder than plans.", icon: Target },
                                { title: "Learn by doing", desc: "Real experience beats theory.", icon: Book },
                                { title: "Solve real problems", desc: "Utility over hype.", icon: Rocket },
                            ].map((val, idx) => (
                                <div key={idx} className="bg-card p-6 rounded-2xl border border-bg-50 hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.4)] hover:border-skin hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-skin/10 text-skin rounded-full flex items-center justify-center mx-auto mb-4">
                                        <val.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                                    <p className="text-text-secondary">{val.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 text-lg text-text-secondary">
                            These values help me stay focused on creating practical, reliable, and useful digital products.
                        </p>
                    </div>
                </section>

                {/* SECTION 5 — CTA */}
                <section className="py-12 bg-card">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-sm font-bold text-skin mb-3 uppercase tracking-widest">Let’s Connect</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Open to full stack AI opportunities</h3>
                        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                            I’m open to internships, projects, and full-time opportunities where I can learn, contribute, and build real systems.
                        </p>
                        <Link href="/contact" className="inline-block px-8 py-3.5 bg-skin text-white font-bold rounded-full shadow-lg shadow-skin/25 hover:opacity-90 hover:scale-105 transition-all">
                            Contact Me
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}