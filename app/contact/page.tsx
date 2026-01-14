'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you within 24 hours.');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '4rem', minHeight: '100vh' }}>
                <section className="section container">
                    <div className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">Let&apos;s discuss your project and bring your ideas to life</p>
                    </div>

                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h3 className="mb-8">Contact Information</h3>
                            {[
                                { icon: '📧', title: 'Email', val: 'contact@devsphere.dev' },
                                { icon: '📱', title: 'Phone', val: '+1 (555) 123-4567' },
                                { icon: '📍', title: 'Location', val: 'Tirupati, Andhra Pradesh, IN' },
                                { icon: '⏰', title: 'Business Hours', val: 'Mon-Sat: 9AM - 8PM IST' }
                            ].map((item, i) => (
                                <div key={i} className="contact-item">
                                    <div className="contact-icon">{item.icon}</div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p className="text-[#9CA3AF]">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form className="contact-form" onSubmit={handleContactSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input type="text" id="name" required placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input type="email" id="email" required placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="project">Project Type *</label>
                                <input type="text" id="project" required placeholder="e.g., E-Commerce Website" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Project Description *</label>
                                <textarea id="message" required placeholder="Tell us about your project..." />
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
