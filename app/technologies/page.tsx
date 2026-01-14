'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TechnologiesPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '4rem', minHeight: '100vh' }}>
                <section className="section container">
                    <div className="section-header">
                        <h2 className="section-title">Technologies We Master</h2>
                        <p className="section-subtitle">Leveraging the latest and most powerful technologies to build exceptional digital products</p>
                    </div>

                    <div className="tech-stack-container">
                        {[
                            {
                                category: "Frontend Development",
                                items: [
                                    { icon: '⚛️', name: 'React.js' },
                                    { icon: '▲', name: 'Next.js' },
                                    { icon: '💚', name: 'Vue.js' },
                                    { icon: '⚡', name: 'Vite' },
                                    { icon: '🎨', name: 'Tailwind' },
                                    { icon: '📱', name: 'React Native' }
                                ]
                            },
                            {
                                category: "Backend Development",
                                items: [
                                    { icon: '🟢', name: 'Node.js' },
                                    { icon: '🐍', name: 'Python' },
                                    { icon: '🔥', name: 'Firebase' },
                                    { icon: '☕', name: 'Java' },
                                    { icon: '🐹', name: 'Go' },
                                    { icon: '🚀', name: 'Express' }
                                ]
                            },
                            {
                                category: "Database & Storage",
                                items: [
                                    { icon: '🍃', name: 'MongoDB' },
                                    { icon: '🐘', name: 'PostgreSQL' },
                                    { icon: '🐬', name: 'MySQL' },
                                    { icon: '🗄️', name: 'Redis' },
                                    { icon: '☁️', name: 'AWS S3' },
                                    { icon: '📦', name: 'R2 Storage' }
                                ]
                            },
                            {
                                category: "Authentication & Identity",
                                items: [
                                    { icon: '🔐', name: 'NextAuth' },
                                    { icon: '📧', name: 'Email/Pass' },
                                    { icon: '🇬', name: 'Google' },
                                    { icon: '🍎', name: 'Apple ID' },
                                    { icon: '📘', name: 'Facebook' },
                                    { icon: '🐙', name: 'GitHub' },
                                    { icon: '📸', name: 'Instagram' },
                                    { icon: '🎵', name: 'TikTok' }
                                ]
                            },
                            {
                                category: "Access Control (RBAC)",
                                items: [
                                    { icon: '👑', name: 'Super Admin' },
                                    { icon: '👔', name: 'Sub-Super' },
                                    { icon: '🛡️', name: 'Admin' },
                                    { icon: '👮', name: 'Sub-Admin' },
                                    { icon: '👤', name: 'Client/User' },
                                    { icon: '🌍', name: 'Public' }
                                ]
                            },
                            {
                                category: "Advanced AI & LLMs",
                                items: [
                                    { icon: '♊', name: 'Gemini' },
                                    { icon: '🧠', name: 'OpenAI' },
                                    { icon: '🤖', name: 'Claude' },
                                    { icon: '👁️', name: 'DeepSeek' },
                                    { icon: '⚡', name: 'Groq' },
                                    { icon: '✈️', name: 'Copilot' },
                                    { icon: '⬛', name: 'Blackbox' }
                                ]
                            },
                            {
                                category: "Cloud, DevOps & CDN",
                                items: [
                                    { icon: '☁️', name: 'AWS' },
                                    { icon: '🐳', name: 'Docker' },
                                    { icon: '☸️', name: 'Kubernetes' },
                                    { icon: '🐙', name: 'GitHub Actions' },
                                    { icon: '⚡', name: 'Cloudflare' },
                                    { icon: '🚀', name: 'Vercel' }
                                ]
                            },
                            {
                                category: "Testing & QA",
                                items: [
                                    { icon: '🃏', name: 'Jest' },
                                    { icon: '🌲', name: 'Cypress' },
                                    { icon: '🎭', name: 'Playwright' },
                                    { icon: '🧪', name: 'RTL' }
                                ]
                            },
                            {
                                category: "UI/UX & Design",
                                items: [
                                    { icon: '🎨', name: 'Figma' },
                                    { icon: '🖌️', name: 'Adobe XD' },
                                    { icon: '✨', name: 'Canva' },
                                    { icon: '🖼️', name: 'Photoshop' }
                                ]
                            }
                        ].map((cat, i) => (
                            <div key={i} className="tech-category-group">
                                <h3 className="tech-category-title">{cat.category}</h3>
                                <div className="tech-grid">
                                    {cat.items.map((tech, j) => (
                                        <div key={j} className="tech-item">
                                            <div className="tech-logo">{tech.icon}</div>
                                            <div className="tech-name">{tech.name}</div>
                                        </div>
                                    ))}
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
