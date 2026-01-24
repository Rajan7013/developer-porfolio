'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Briefcase, GraduationCap, Code, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import Footer from '@/components/Footer';

import { GOOGLE_SCRIPT_URL } from '@/lib/analytics';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE' || !GOOGLE_SCRIPT_URL) {
            alert('Please configure the Google Script URL in app/contact/page.tsx');
            return;
        }

        setStatus('submitting');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // standard for Google Apps Script to avoid CORS errors on client
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'contact',
                    ...formData
                }),
            });

            // With no-cors we can't check response.ok, so we assume success if no network error
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917013146154'; // Default to your number
    const whatsappMessage = encodeURIComponent("Hi Rajan, I saw your portfolio and would like to discuss a project / opportunity with you.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="min-h-screen bg-background">
            <main className="pt-24 pb-16">
                {/* Header */}
                <section className="px-2 sm:px-6 lg:px-8 mb-12 md:mb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-3 md:mb-4">
                            Contact <span className="text-skin">Rajan Prasaila Yadav</span>
                        </h1>
                        <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
                            Feel free to reach out for collaborations, projects, or internship opportunities.
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

                        {/* Left Column: Info & WhatsApp */}
                        <div className="space-y-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center lg:text-left">
                                Get in Touch
                            </h2>

                            {/* WhatsApp CTA */}
                            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 md:p-8 text-center hover:bg-green-500/15 transition-all">
                                <div className="inline-flex p-4 bg-green-500 text-white rounded-full mb-4 shadow-lg shadow-green-500/30">
                                    <MessageCircle size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-green-500 mb-2">Chat on WhatsApp</h3>
                                <p className="text-text-secondary mb-6 max-w-sm mx-auto">
                                    Quickest way to reach me. Click below to start a chat with a pre-filled message.
                                </p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
                                >
                                    Open WhatsApp <MessageCircle size={18} />
                                </a>
                            </div>

                            {/* Contact Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                <a href="mailto:rajanprasaila@gmail.com" className="flex items-center gap-4 p-4 bg-card border border-bg-50 rounded-xl hover:border-skin/50 transition-all group">
                                    <div className="p-3 bg-skin/10 rounded-full text-skin group-hover:bg-skin group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">Email</p>
                                        <p className="font-semibold text-text-primary group-hover:text-skin transition-colors">rajanprasaila@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+917013146154" className="flex items-center gap-4 p-4 bg-card border border-bg-50 rounded-xl hover:border-skin/50 transition-all group">
                                    <div className="p-3 bg-skin/10 rounded-full text-skin group-hover:bg-skin group-hover:text-white transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">Phone (India)</p>
                                        <p className="font-semibold text-text-primary group-hover:text-skin transition-colors">+91 70131 46154</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 bg-card border border-bg-50 rounded-xl">
                                    <div className="p-3 bg-skin/10 rounded-full text-skin">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">Location</p>
                                        <p className="font-semibold text-text-primary">India / Nepal</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div>
                            <div className="bg-card border border-bg-50 rounded-2xl p-6 md:p-8 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                                    <Send className="text-skin" size={24} />
                                    Send a Message
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 bg-background border border-bg-50 rounded-lg focus:outline-none focus:border-skin focus:ring-1 focus:ring-skin transition-colors disabled:opacity-50"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 bg-background border border-bg-50 rounded-lg focus:outline-none focus:border-skin focus:ring-1 focus:ring-skin transition-colors disabled:opacity-50"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 bg-background border border-bg-50 rounded-lg focus:outline-none focus:border-skin focus:ring-1 focus:ring-skin transition-colors resize-none disabled:opacity-50"
                                            placeholder="Tell me about your project, internship opportunity, or how I can help..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-skin text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-skin/25 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? (
                                            <>Sending...</>
                                        ) : (
                                            <>Send Message <Send size={18} /></>
                                        )}
                                    </button>

                                    {/* Status Messages */}
                                    {status === 'success' && (
                                        <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg text-sm">
                                            <CheckCircle2 size={18} />
                                            <span>Message sent successfully! Check your email for a confirmation.</span>
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg text-sm">
                                            <AlertCircle size={18} />
                                            <span>Something went wrong. Please try again or use WhatsApp.</span>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
