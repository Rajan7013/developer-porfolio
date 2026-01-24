'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Briefcase, GraduationCap, Code } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic can be added here
        const mailtoLink = `mailto:rajanprasaila@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                            Feel free to reach out if you would like to collaborate, discuss a project, or explore internship and full stack AI opportunities.
                        </p>
                    </div>
                </section>

                {/* Get in Touch */}
                <section className="px-2 sm:px-6 lg:px-8 mb-12 md:mb-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-text-primary mb-6 md:mb-8 text-center">
                            Get in Touch
                        </h2>
                        <p className="text-base md:text-lg text-text-secondary text-center mb-6 md:mb-8">
                            You can contact me directly using the details below:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Email */}
                            <a
                                href="mailto:rajanprasaila@gmail.com"
                                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-bg-50 rounded-xl hover:border-skin/50 hover:bg-skin/5 transition-all group"
                            >
                                <div className="p-2 md:p-3 bg-skin/10 rounded-full text-skin group-hover:bg-skin group-hover:text-white transition-all shrink-0">
                                    <Mail size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-text-primary mb-1 text-sm md:text-base">Email</h3>
                                    <p className="text-text-secondary group-hover:text-skin transition-colors text-xs md:text-sm truncate">rajanprasaila@gmail.com</p>
                                </div>
                            </a>

                            {/* Phone India */}
                            <a
                                href="tel:+917013146154"
                                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-bg-50 rounded-xl hover:border-skin/50 hover:bg-skin/5 transition-all group"
                            >
                                <div className="p-2 md:p-3 bg-skin/10 rounded-full text-skin group-hover:bg-skin group-hover:text-white transition-all shrink-0">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-text-primary mb-1 text-sm md:text-base">Phone (India)</h3>
                                    <p className="text-text-secondary group-hover:text-skin transition-colors text-xs md:text-sm">+91 70131 46154</p>
                                </div>
                            </a>

                            {/* Phone Nepal */}
                            <a
                                href="tel:+9779816721778"
                                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-bg-50 rounded-xl hover:border-skin/50 hover:bg-skin/5 transition-all group"
                            >
                                <div className="p-2 md:p-3 bg-skin/10 rounded-full text-skin group-hover:bg-skin group-hover:text-white transition-all shrink-0">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-text-primary mb-1 text-sm md:text-base">Phone (Nepal)</h3>
                                    <p className="text-text-secondary group-hover:text-skin transition-colors text-xs md:text-sm">+977 9816721778</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-bg-50 rounded-xl">
                                <div className="p-2 md:p-3 bg-skin/10 rounded-full text-skin shrink-0">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-text-primary mb-1 text-sm md:text-base">Location</h3>
                                    <p className="text-text-secondary text-xs md:text-sm">India / Nepal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect With Me */}
                <section className="px-2 sm:px-6 lg:px-8 mb-12 md:mb-16 bg-card border-y border-bg-50 py-12 md:py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-text-primary mb-6 md:mb-8 text-center">
                            Connect With Me
                        </h2>
                        <p className="text-base md:text-lg text-text-secondary text-center mb-6 md:mb-8">
                            I am open to:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-background rounded-xl border border-bg-50">
                                <div className="p-3 md:p-4 bg-skin/10 rounded-full text-skin mb-3 md:mb-4">
                                    <Code size={24} className="md:w-7 md:h-7" />
                                </div>
                                <h3 className="font-bold text-text-primary text-sm md:text-base">Full Stack & AI Development Roles</h3>
                            </div>

                            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-background rounded-xl border border-bg-50">
                                <div className="p-3 md:p-4 bg-skin/10 rounded-full text-skin mb-3 md:mb-4">
                                    <GraduationCap size={24} className="md:w-7 md:h-7" />
                                </div>
                                <h3 className="font-bold text-text-primary text-sm md:text-base">Internships & Academic Collaborations</h3>
                            </div>

                            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-background rounded-xl border border-bg-50">
                                <div className="p-3 md:p-4 bg-skin/10 rounded-full text-skin mb-3 md:mb-4">
                                    <Briefcase size={24} className="md:w-7 md:h-7" />
                                </div>
                                <h3 className="font-bold text-text-primary text-sm md:text-base">Freelance & Learning Projects</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Send a Message */}
                <section className="px-2 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-text-primary mb-6 md:mb-8 text-center">
                            Send a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="bg-card border border-bg-50 rounded-xl md:rounded-2xl p-4 md:p-8 space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm md:text-base font-semibold text-text-primary mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-background border border-bg-50 rounded-lg text-text-primary focus:outline-none focus:border-skin transition-colors text-sm md:text-base"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm md:text-base font-semibold text-text-primary mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-background border border-bg-50 rounded-lg text-text-primary focus:outline-none focus:border-skin transition-colors text-sm md:text-base"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm md:text-base font-semibold text-text-primary mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-background border border-bg-50 rounded-lg text-text-primary focus:outline-none focus:border-skin transition-colors resize-none text-sm md:text-base"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-skin text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg text-sm md:text-base"
                            >
                                Send Message <Send size={16} className="md:w-[18px] md:h-[18px]" />
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
