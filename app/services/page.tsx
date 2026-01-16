'use client';

import React from 'react';
import { Smartphone, Laptop, Palette, Code, Video, Monitor } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Services() {
    const services = [
        { title: 'App Design', desc: 'I design Apps that not only look beautiful but also offer exceptional functionality.', icon: Smartphone },
        { title: 'Web Design', desc: 'I design Website that not only look beautiful but also offer exceptional functionality', icon: Laptop },
        { title: 'Graphics Design', desc: 'I design graphics that not only look beautiful but also convey deep meaning and purpose.', icon: Palette },
        { title: 'Web Development', desc: 'I develop Website that not only look beautiful but also offer exceptional functionality', icon: Code },
        { title: 'Video Editor', desc: 'I edit videos that not only look beautiful but also engage and captivate audiences.', icon: Video },
        { title: 'UI / UX Design', desc: 'I design UI/UX that not only looks beautiful but also understands user requirements and behavior.', icon: Monitor },
    ];

    return (
        <div className="min-h-screen bg-background pt-20">
            <section id="services" className="section pt-8 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="section-title text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-skin">
                            Services
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-card p-8 rounded-2xl shadow-sm border border-bg-50 hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className="mb-4 group-hover:scale-110 transition-transform text-skin">
                                    <service.icon size={40} />
                                </div>
                                <h4 className="text-xl font-bold text-text-primary mb-3">{service.title}</h4>
                                <p className="text-text-secondary leading-6">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
