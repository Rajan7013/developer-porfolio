'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
    const services = [
        {
            title: 'Website Development',
            desc: 'High-performance, responsive websites built with Next.js and modern frameworks.',
            image: '/images/services/service-web-dev.avif',
            delay: '0'
        },
        {
            title: 'Mobile App Development',
            desc: 'Native and cross-platform mobile apps for iOS and Android using React Native.',
            image: '/images/services/service-mobile-app.avif',
            delay: '100'
        },
        {
            title: 'UI/UX Design',
            desc: 'User-centric design with stunning visuals and intuitive navigation flows.',
            image: '/images/services/service-ui-ux.avif',
            delay: '200'
        },
        {
            title: 'AI Integration',
            desc: 'Smart AI solutions using Gemini, OpenAI, and custom LLM integration.',
            image: '/images/services/service-ai-integration.avif',
            delay: '300'
        },
        {
            title: 'Data Analytics',
            desc: 'Transform raw data into actionable insights with interactive properties.',
            image: '/images/services/service-data-analytics.avif',
            delay: '400'
        },
        {
            title: 'Digital Media',
            desc: 'Professional video editing, motion graphics, and digital content creation.',
            image: '/images/services/service-digital-media.avif',
            delay: '500'
        },
        {
            title: 'Security & Auth',
            desc: 'Enterprise-grade security, OAuth integration, and role-based access control.',
            image: '/images/services/service-security.avif',
            delay: '600'
        },
        {
            title: 'Cloud & DevOps',
            desc: 'Scalable cloud architecture and CI/CD pipelines on AWS and Vercel.',
            image: '/images/services/service-cloud-devops.avif',
            delay: '700'
        }
    ];

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '4rem', minHeight: '100vh' }}>
                <section className="section container">
                    <div className="section-header">
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">Comprehensive digital solutions tailored to your business needs</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card" style={{ animationDelay: `${service.delay}ms` }}>
                                <div className="service-image-container">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="service-image"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://placehold.co/800x800/1e293b/3b82f6?text=${encodeURIComponent(service.title)}`;
                                        }}
                                    />
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
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
