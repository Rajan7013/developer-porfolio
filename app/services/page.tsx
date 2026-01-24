'use client';

import React from 'react';
import { Code, Brain, Palette, Globe, Image as ImageIcon, Video, Search, Lightbulb, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: 'Full Stack Web Development',
            desc: 'Build fast, secure, and scalable web applications using React, Next.js, Firebase, MongoDB, and cloud platforms.',
            icon: Code
        },
        {
            title: 'AI Application Development',
            desc: 'Create chatbots, document analyzers, RAG systems, and automation tools using Gemini, ChatGPT, and modern AI APIs.',
            icon: Brain
        },
        {
            title: 'UI/UX & App Design',
            desc: 'Design clean, responsive, and user-focused interfaces using Figma, Tailwind CSS, and modern design systems.',
            icon: Palette
        },
        {
            title: 'Website Development',
            desc: 'Develop SEO-ready, high-performance websites with custom domains, hosting, and analytics.',
            icon: Globe
        },
        {
            title: 'Graphics & Digital Assets',
            desc: 'Create banners, posters, social media creatives, and presentation designs that communicate clearly.',
            icon: ImageIcon
        },
        {
            title: 'Video Editing & Reels',
            desc: 'Edit demo videos, reels, and product walkthroughs for portfolios and social media.',
            icon: Video
        },
    ];

    const approach = [
        { step: 'Research first', icon: Search },
        { step: 'Design the system', icon: Lightbulb },
        { step: 'AI-assisted coding', icon: Brain },
        { step: 'Testing & deployment', icon: Rocket },
        { step: 'Continuous improvement', icon: CheckCircle },
    ];

    return (
        <div className="min-h-screen bg-background">
            <main className="pt-24 pb-16">
                {/* Header */}
                <section className="px-2 sm:px-6 lg:px-8 mb-12 md:mb-16">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 md:mb-6">
                            Services – Full Stack & AI Development by <span className="text-skin">Rajan Prasaila Yadav</span>
                        </h1>
                        <h2 className="text-xl md:text-3xl font-bold text-text-primary mb-3 md:mb-4">
                            What I Can Help You Build
                        </h2>
                        <p className="text-base md:text-xl text-text-secondary max-w-3xl mx-auto">
                            I build real, working digital systems — from idea to deployment — using modern web and AI technologies.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="px-2 sm:px-6 lg:px-8 mb-16 md:mb-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-card p-4 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-bg-50 hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.4)] hover:border-skin hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="mb-3 md:mb-4 group-hover:scale-110 transition-transform text-skin">
                                        <service.icon size={32} className="md:w-10 md:h-10" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2 md:mb-3">{service.title}</h3>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* My Approach */}
                <section className="px-2 sm:px-6 lg:px-8 mb-16 md:mb-24 bg-card border-y border-bg-50 py-12 md:py-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 md:mb-12 text-center">
                            My Approach
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                            {approach.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center text-center p-4 md:p-6 bg-background rounded-xl border border-bg-50 hover:border-skin/50 transition-all group"
                                >
                                    <div className="mb-3 md:mb-4 p-3 md:p-4 bg-skin/10 rounded-full text-skin group-hover:bg-skin group-hover:text-white transition-all">
                                        <item.icon size={24} className="md:w-7 md:h-7" />
                                    </div>
                                    <p className="font-semibold text-text-primary text-sm md:text-base">{item.step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-2 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-skin/10 to-skin/5 border border-skin/20 rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 md:mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-base md:text-xl text-text-secondary mb-6 md:mb-8">
                            I'm open to internships, freelance projects, and full stack AI roles.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-skin text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg text-sm md:text-base"
                        >
                            Contact Me <ArrowRight size={18} className="md:w-5 md:h-5" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

//A