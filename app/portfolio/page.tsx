'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
    const portfolioItems = [
        {
            icon: '🏥', title: 'Health Assistant AI Chatbot', cat: 'Healthcare • AI Integration',
            desc: 'An intelligent healthcare chatbot powered by advanced NLP, providing 24/7 medical guidance.',
            tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'], bg: '', delay: '0s'
        },
        {
            icon: '🎓', title: 'EduNexus Ecosystem', cat: 'Education • SaaS Platform',
            desc: 'Comprehensive education management system with student tracking and virtual classrooms.',
            tags: ['Next.js', 'PostgreSQL', 'WebRTC', 'AWS'], bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', delay: '0.1s'
        },
        {
            icon: '🎯', title: 'Educational Consultancy', cat: 'EdTech • Web Application',
            desc: 'Modern consultancy platform connecting students with top educational advisors.',
            tags: ['React', 'Firebase', 'Stripe', 'Tailwind'], bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', delay: '0.2s'
        },
        {
            icon: '📚', title: 'RAG Document System', cat: 'AI • Enterprise',
            desc: 'Retrieval-Augmented Generation system for intelligent document processing.',
            tags: ['Python', 'LangChain', 'Vector DB', 'FastAPI'], bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', delay: '0.3s'
        },
        {
            icon: '🛒', title: 'E-Commerce Marketplace', cat: 'E-Commerce • Full-Stack',
            desc: 'Multi-vendor marketplace with advanced search, payment processing, and inventory.',
            tags: ['Next.js', 'Stripe', 'Redis', 'Docker'], bg: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', delay: '0.4s'
        },
        {
            icon: '💼', title: 'Project Management SaaS', cat: 'Business • SaaS',
            desc: 'Collaborative project management tool with time tracking and reporting.',
            tags: ['Vue.js', 'Node.js', 'Socket.io', 'MySQL'], bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', delay: '0.5s'
        }
    ];

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
                <section className="section container">
                    <div className="section-header">
                        <h2 className="section-title">Our Portfolio</h2>
                        <p className="section-subtitle">Showcasing our best work and successful project deliveries</p>
                    </div>

                    <div className="portfolio-grid">
                        {portfolioItems.map((item, i) => (
                            <div key={i} className="portfolio-card" style={{ animationDelay: item.delay }}>
                                <div className="portfolio-image" style={{ background: item.bg || undefined }}>{item.icon}</div>
                                <div className="portfolio-content">
                                    <h3 className="portfolio-title">{item.title}</h3>
                                    <div className="portfolio-category">{item.cat}</div>
                                    <p className="portfolio-desc">{item.desc}</p>
                                    <div className="portfolio-tags">
                                        {item.tags.map((tag, j) => <span key={j} className="tag">{tag}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
