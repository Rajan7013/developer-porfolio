'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    Code, Smartphone, Video, Megaphone,
    Palette, Brain, Target, Rocket,
    Heart, Globe, CheckCircle, ArrowRight,
    Users, Award, TrendingUp, Zap
} from 'lucide-react';

export default function AboutPage() {

    // --- 1. DATA OBJECTS ---
    const ceoProfile = {
        name: "Rajan Prasaila Yadav",
        title: "CEO & Lead Architect",
        image: "/images/developer.png",
        quote: "Creativity is intelligence having fun. My goal is to solve complex problems with elegant designs and robust code.",
        skills: ["Web & Mobile App Design", "UI/UX Architecture", "Video Editing", "Social Media Ads", "Problem Solving", "Creative Thinking"]
    };

    const philosophyCards = [
        { title: "Our Mission", icon: <Rocket size={32} />, desc: "To empower businesses by bridging the gap between creative storytelling and high-performance technology.", color: "#3b82f6" },
        { title: "Our Vision", icon: <Globe size={32} />, desc: "A digital world where every interaction is intuitive, every design is purposeful, and every ad converts.", color: "#10b981" },
        { title: "Our Goal", icon: <Target size={32} />, desc: "To deliver 100% measurable growth for our clients through data-driven ads and pixel-perfect development.", color: "#f59e0b" },
        { title: "We Believe In", icon: <Heart size={32} />, desc: "Transparency, hard work, and the magic that happens when logic meets creativity.", color: "#ec4899" }
    ];

    const expertiseCards = [
        { title: "Development", icon: <Code size={28} />, items: ["Next.js & React Websites", "Mobile App Development", "Clean Code Architecture", "API Integration"] },
        { title: "Creative Studio", icon: <Video size={28} />, items: ["Professional Video Editing", "Motion Graphics", "UI/UX Design", "Brand Identity"] },
        { title: "Digital Growth", icon: <Megaphone size={28} />, items: ["Social Media Ads (FB/Insta)", "Post Handling & Strategy", "SEO Optimization", "Conversion Tracking"] }
    ];

    const teamMembers = [
        { name: "Rajan Prasaila", role: "Full Stack Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajan", skills: ["React", "Next.js", "Node.js"] },
        { name: "Sarah Chen", role: "UI/UX Designer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", skills: ["Figma", "Adobe XD", "Prototyping"] },
        { name: "Michael Torres", role: "Video Editor", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", skills: ["Premiere Pro", "After Effects", "DaVinci"] },
        { name: "Emily Watson", role: "Marketing Strategist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily", skills: ["Facebook Ads", "Analytics", "SEO"] }
    ];

    const stats = [
        { number: "50+", label: "Projects Completed", icon: <Award size={32} /> },
        { number: "30+", label: "Happy Clients", icon: <Users size={32} /> },
        { number: "98%", label: "Client Satisfaction", icon: <TrendingUp size={32} /> },
        { number: "24/7", label: "Support Available", icon: <Zap size={32} /> }
    ];

    const technicalSkills = [
        { name: "React & Next.js", level: 95, color: "#22d3ee" },
        { name: "TypeScript", level: 90, color: "#3b82f6" },
        { name: "Node.js & APIs", level: 85, color: "#10b981" },
        { name: "Video Editing", level: 92, color: "#f59e0b" },
        { name: "Social Media Ads", level: 88, color: "#ec4899" },
        { name: "UI/UX Design", level: 93, color: "#8b5cf6" }
    ];

    return (
        <>
            <Navbar />

            <style jsx global>{`
                /* --- BASE LAYOUT --- */
                .page-wrapper {
                    background-color: #020617;
                    color: white;
                    min-height: 100vh;
                    padding-top: 6rem; /* Header space */
                    overflow-x: hidden;
                }
                .container-custom {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }

                /* --- MASTER SPACING CONTROL --- */
                /* This is the SINGLE SOURCE OF TRUTH for gaps */
                .section-gap {
                    margin-bottom: 0; /* Not used anymore */
                }
                .section-header {
                    text-align: center;
                    margin-top: 3rem; /* UNIFORM gap BEFORE each section */
                    margin-bottom: 1.5rem; /* Space between title and content */
                }

                /* --- ANIMATIONS --- */
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes progressBar {
                    from { width: 0%; }
                    to { width: var(--progress-width); }
                }

                /* --- CARD STYLES --- */
                .magic-card {
                    background: #0f172a;
                    border: 3px solid #334155;
                    border-radius: 20px;
                    padding: 1rem 1rem 0.25rem 1rem;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    position: relative;
                    cursor: pointer;
                    height: 100%;
                    animation: slideUp 0.8s ease-out forwards;
                }
                .magic-card:hover {
                    border-color: #06b6d4;
                    box-shadow: 0 0 30px rgba(6, 182, 212, 0.4);
                    transform: translateY(-8px);
                    background: #1e293b;
                }
                .magic-card:active {
                    border-color: #d946ef;
                    box-shadow: 0 0 40px rgba(217, 70, 239, 0.6);
                    transform: scale(0.96);
                    background: #1e1b4b;
                }

                /* --- HERO WIDGET --- */
                .hero-widget {
                    position: absolute;
                    bottom: 30px;
                    left: -40px;
                    background: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(12px);
                    border: 2px solid #22d3ee;
                    border-radius: 16px;
                    padding: 1.5rem 2rem;
                    min-width: 200px;
                    box-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
                    animation: float 6s ease-in-out infinite reverse;
                    z-index: 10;
                }
                @media (max-width: 768px) {
                    .hero-widget {
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: -30px;
                        width: 90%;
                    }
                }

                /* --- BUTTONS & MISC --- */
                .neon-btn {
                    padding: 0.8rem 2.5rem;
                    background: transparent;
                    border: 1px solid #22d3ee;
                    color: #22d3ee;
                    font-weight: 600;
                    letter-spacing: 1px;
                    border-radius: 8px;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    transition: 0.3s;
                    box-shadow: 0 0 10px rgba(34, 211, 238, 0.1);
                    cursor: pointer;
                }
                .neon-btn:hover {
                    background: rgba(34, 211, 238, 0.1);
                    box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
                    color: white;
                    border-color: white;
                }
                .text-gradient {
                    background: linear-gradient(to right, #22d3ee, #818cf8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .progress-bar {
                    height: 8px;
                    background: #1e293b;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-top: 0.5rem;
                }
                .progress-fill {
                    height: 100%;
                    border-radius: 10px;
                    animation: progressBar 1.5s ease-out forwards;
                    box-shadow: 0 0 10px currentColor;
                }
                .stat-card {
                    background: #0f172a;
                    border: 2px solid #334155;
                    border-radius: 16px;
                    padding: 2rem;
                    text-align: center;
                    transition: all 0.3s ease;
                }
                .stat-card:hover {
                    border-color: #22d3ee;
                    box-shadow: 0 0 25px rgba(34, 211, 238, 0.3);
                    transform: translateY(-5px);
                }
                @keyframes pulseGlow {
                    0% { box-shadow: 0 0 15px rgba(34, 211, 238, 0.3); }
                    50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.5); }
                    100% { box-shadow: 0 0 15px rgba(34, 211, 238, 0.3); }
                }
                .hero-image-glow {
                    animation: pulseGlow 3s infinite ease-in-out;
                    transition: box-shadow 0.3s ease;
                }
                .hero-image-glow:hover {
                    animation: none;
                    box-shadow: 0 0 40px rgba(168, 85, 247, 0.7); /* Purple glow on hover */
                }

                .about-hero-image {
                    margin-top: -0.5rem; /* Balanced spacing: minimized gap, no cutoff */
                }

                @media (min-width: 1024px) {
                    .about-hero-text {
                        margin-top: -6.75rem !important;
                    }
                    .about-hero-image {
                        margin-top: -4.25rem !important;
                        margin-left: 5rem !important;
                    }
                }
            `}</style>

            <main>
                {/* --- 1. HERO SECTION --- */}
                <section id="about" className="page-section active" style={{ display: 'block', paddingTop: '3rem' }}>
                    <div className="hero">
                        <div className="container">
                            <div className="hero-content">
                                <div className="hero-text about-hero-text">
                                    <h1>About DevSphere</h1>
                                    <p>Hi, I'm <strong>{ceoProfile.name}</strong>. I combine technical expertise in web & mobile development with creative strategies to build digital empires. Full-stack development agency specializing in cutting-edge web & mobile applications.</p>
                                    <div className="hero-buttons">
                                        <button className="btn-primary">VIEW MY WORK</button>
                                        <button className="btn-secondary">Start Your Project</button>
                                    </div>
                                </div>
                                <div className="hero-image about-hero-image">
                                    <img
                                        src={ceoProfile.image}
                                        alt={ceoProfile.name}
                                        className="hero-image-glow"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', maxWidth: '400px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. STATS SECTION --- */}
                <div className="section container" style={{ marginTop: '-8rem' }}>
                    <div className="stats">
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">30+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support Available</div>
                        </div>
                    </div>
                </div>

                {/* --- 2. EXPERTISE SECTION (Magic Cards) --- */}
                <section id="expertise" className="page-section" style={{ marginTop: '-3rem' }}>
                    <div className="section-header">
                        <h2 className="section-title">My <span className="text-gradient">Expertise</span></h2>
                        <p className="section-subtitle">A comprehensive skill set designed for modern business growth.</p>
                    </div>
                    <div className="services-grid">
                        {expertiseCards.map((card, idx) => (
                            <div key={idx} className="magic-card" style={{ animationDelay: `${idx * 100}ms` }}>
                                <div style={{ width: '60px', height: '60px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#22d3ee' }}>
                                    {card.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{card.title}</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {card.items.map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: i === card.items.length - 1 ? '0' : '0.5rem', color: '#cbd5e1' }}>
                                            <CheckCircle size={16} color="#22d3ee" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- 4. TECHNICAL SKILLS SECTION --- */}
                <div className="section container" style={{ marginTop: '0.5rem' }}>
                    <div className="section-header">
                        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
                        <p className="section-subtitle">Mastery across development, design, and digital marketing.</p>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {technicalSkills.map((skill, idx) => (
                            <div key={idx} style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: 'white', fontWeight: '600' }}>{skill.name}</span>
                                    <span style={{ color: skill.color, fontWeight: '700' }}>{skill.level}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ '--progress-width': `${skill.level}%`, background: skill.color, color: skill.color } as React.CSSProperties}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 5. TEAM SECTION --- */}
                <div className="section container" style={{ marginTop: '0.5rem' }}>
                    <div className="section-header">
                        <h2 className="section-title">Meet The <span className="text-gradient">Team</span></h2>
                        <p className="section-subtitle">Talented individuals working together to create digital excellence.</p>
                    </div>
                    <div className="services-grid">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="magic-card" style={{ animationDelay: `${idx * 100}ms`, textAlign: 'center' }}>
                                <div style={{ width: '120px', height: '120px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid #22d3ee', boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
                                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{member.name}</h3>
                                <p style={{ color: '#22d3ee', marginBottom: '1rem', fontSize: '0.9rem' }}>{member.role}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                                    {member.skills.map((skill, i) => (
                                        <span key={i} style={{ padding: '0.3rem 0.8rem', background: 'rgba(34, 211, 238, 0.1)', border: '1px solid #22d3ee', borderRadius: '20px', fontSize: '0.75rem', color: '#94a3b8' }}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 6. PHILOSOPHY SECTION --- */}
                <div className="section container" style={{ marginTop: '0.5rem' }}>
                    <div className="section-header">
                        <h2 className="section-title">Our <span className="text-gradient">Philosophy</span></h2>
                        <p className="section-subtitle">The core values that drive every project we undertake.</p>
                    </div>
                    <div className="services-grid">
                        {philosophyCards.map((card, idx) => (
                            <div key={idx} className="magic-card" style={{ animationDelay: `${idx * 100 + 300}ms` }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{card.title}</h3>
                                    <div style={{ color: card.color }}>{card.icon}</div>
                                </div>
                                <div style={{ height: '2px', width: '50px', background: card.color, marginBottom: '1.5rem' }}></div>
                                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 7. CTA SECTION --- */}
                <div className="section container" style={{ marginTop: '0.5rem' }}>
                    <div className="magic-card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderColor: '#22d3ee' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ready to Build Something <span className="text-gradient">Amazing</span>?</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Let's collaborate to turn your vision into reality.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="neon-btn">START A PROJECT</button>
                            <button className="neon-btn" style={{ borderColor: '#818cf8', color: '#818cf8' }}>VIEW PORTFOLIO</button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}