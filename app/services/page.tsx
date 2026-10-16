import React from 'react';
import { Code, Mail, MessageSquare, Server, Network, Briefcase, Brain, Palette, Globe, Image as ImageIcon, Video, Search, Lightbulb, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import TechnologyLogo from '@/components/TechnologyLogo';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: 'Bulk Email & Mail Automation',
            desc: 'Build bulk email systems with audience lists, reusable templates, scheduled campaigns, transactional notifications, delivery tracking, and unsubscribe management.',
            icon: Mail
        },
        {
            title: 'WhatsApp Customer Support Agents',
            desc: 'Build WhatsApp chatbot agents that automatically answer customer questions using business information, handle FAQs, capture enquiries, and hand off complex requests to your team.',
            icon: MessageSquare
        },
        {
            title: 'Management Software',
            desc: 'Build company, school, finance, and task management platforms with dashboards, role-based access, approvals, and reporting.',
            icon: Briefcase
        },
        {
            title: 'DevOps & Cloud Deployment',
            desc: 'Set up deployment pipelines, containerized applications, hosting, custom domains, and monitoring for dependable releases.',
            icon: Server
        },
        {
            title: 'System Architecture Engineering',
            desc: 'Plan application boundaries, API contracts, database schemas, authentication, caching, and infrastructure around your product requirements.',
            icon: Network
        },
        {
            title: 'Technical SEO',
            desc: 'Improve crawlability, metadata, structured data, sitemaps, and page performance, then track search visibility and user experience.',
            icon: Search
        },
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
            <main id="main-content" className="pt-24 pb-16">
                {/* Header */}
                <section className="px-2 sm:px-6 lg:px-8 mb-12 md:mb-16">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4 md:mb-6">
                            Web Development & <span className="text-skin">AI Services</span>
                        </h1>
                        <h2 className="text-xl md:text-3xl font-bold text-text-primary mb-3 md:mb-4">
                            Software, automation, and cloud delivery
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

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-text-primary mb-3">SEO & Performance Toolkit</h2>
                    <p className="text-text-secondary text-center max-w-2xl mx-auto mb-8">Tools for measuring search visibility, finding technical issues, and improving the page experience.</p>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-fr gap-4">
                        {['Google Search Console', 'Bing Webmaster Tools', 'Google Analytics', 'Lighthouse', 'PageSpeed Insights', 'Structured Data'].map(name => (
                            <li key={name} className="bg-card border border-bg-50 rounded-xl p-4 min-h-36 flex flex-col items-center justify-center text-center gap-3"><TechnologyLogo name={name} size="large" /><span className="text-sm font-medium text-text-primary">{name}</span></li>
                        ))}
                    </ul>
                    <div className="text-center mt-6"><Link href="/stack#seo" className="text-skin font-semibold">Explore the full technology stack →</Link></div>
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
                                    className="flex flex-col items-center text-center p-8 bg-card rounded-xl border border-bg-50 hover:bg-linear-to-br hover:from-skin/10 hover:to-transparent transition-all duration-300 group"
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
                    <div className="max-w-4xl mx-auto text-center bg-linear-to-br from-skin/10 to-skin/5 border border-skin/20 rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 md:mb-4">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-base md:text-xl text-text-secondary mb-6 md:mb-8">
                            I&apos;m open to internships, freelance projects, and full stack AI roles.
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