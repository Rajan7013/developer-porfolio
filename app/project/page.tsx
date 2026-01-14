'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectPage() {
    const projectItems = [
        {
            icon: '🎓',
            title: 'Pinnacle Nepal',
            cat: 'EdTech • Consultancy',
            desc: 'Platform for educational consultancy & visas.',
            tags: ['Next.js', 'Tailwind', 'Framer Motion'],
            bg: '',
            delay: '0s',
            link: 'https://pinnacle-nepal.vercel.app/',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80' /* Student Studying / Exams */
        },
        {
            icon: '🏫',
            title: 'Edu SVCET',
            cat: 'Education • Ecosystem',
            desc: 'Digital ecosystem managing academics.',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            delay: '0.1s',
            link: 'https://edu-svcet.vercel.app/',
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80' /* Classic University Building */
        },
        {
            icon: '🎒',
            title: 'BFPS School',
            cat: 'Education • School Website',
            desc: 'Modern school website with event calendar.',
            tags: ['Next.js', 'React', 'Tailwind'],
            bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            delay: '0.2s',
            link: 'https://bfps-ruddy.vercel.app/',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80' /* Kids Learning / Classroom */
        },
        {
            icon: '🤖',
            title: 'Health Assistant AI',
            cat: 'Healthcare • AI',
            desc: 'AI assistant for preliminary symptom checking.',
            tags: ['AI', 'Python', 'React', 'FastAPI'],
            bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            delay: '0.3s',
            link: 'https://health-assistant-ai-ashen.vercel.app/',
            image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80' /* Medical Data / Tech */
        },
        {
            icon: '🔍',
            title: 'Image Search Engine',
            cat: 'Tools • Search',
            desc: 'High-performance search with masonry grid.',
            tags: ['React', 'Unsplash API', 'CSS Grid'],
            bg: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            delay: '0.4s',
            link: 'https://image-search-website-five.vercel.app/',
            image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80' /* Abstract Photography/Grid */
        },
        {
            icon: '📄',
            title: 'DocAI RAG System',
            cat: 'AI • Enterprise',
            desc: 'RAG system for analyzing complex documents.',
            tags: ['LLM', 'LangChain', 'Vector DB'],
            bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            delay: '0.5s',
            link: 'https://docai-alpha.vercel.app/',
            image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80' /* Documents / Reading */
        }
    ];

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '4rem', minHeight: '100vh' }}>
                <section className="section container">
                    <div className="section-header">
                        <h2 className="section-title">Our Projects</h2>
                        <p className="section-subtitle">Showcasing our best work and successful project deliveries</p>
                    </div>

                    <div className="portfolio-grid">
                        {projectItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio-card block no-underline"
                                style={{ animationDelay: item.delay }}
                            >
                                <div className="portfolio-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="portfolio-content">
                                    <h3 className="portfolio-title">{item.title}</h3>
                                    <div className="portfolio-category">{item.cat}</div>
                                    <p className="portfolio-desc">{item.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
