'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <div className="min-h-screen bg-background pt-20">
            <section id="contact" className="section pt-24 pb-24 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="section-title text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-skin">
                            Contact Me
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto bg-background rounded-2xl p-8 shadow-lg border border-bg-50">
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold text-text-primary">Have Any Questions?</h3>
                            <p className="text-text-secondary">I'm at your services</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                                <div className="text-center group">
                                    <div className="mb-2 text-skin flex justify-center group-hover:scale-110 transition-transform">
                                        <Mail size={32} />
                                    </div>
                                    <h4 className="text-lg font-bold text-text-primary">Email</h4>
                                    <p className="text-text-secondary">rajanprasaila@gmail.com</p>
                                </div>
                                <div className="text-center group">
                                    <div className="mb-2 text-skin flex justify-center group-hover:scale-110 transition-transform">
                                        <Phone size={32} />
                                    </div>
                                    <h4 className="text-lg font-bold text-text-primary">Phone</h4>
                                    <p className="text-text-secondary">+91 00000 00000</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <a href="mailto:rajanprasaila@gmail.com" className="px-8 py-3 bg-skin text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg block w-full sm:w-auto mx-auto text-center">
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
