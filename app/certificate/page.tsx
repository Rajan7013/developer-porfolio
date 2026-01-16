'use client';

import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Certificate() {
    const certificates = ['qk7xrNu1DTsd.jpg', 'qwk7TTbz2z9x.jpg', 'HK21BrpGz8FK.jpg', '4aELQF1q4HkZ.jpg', 'dw0gyMlJATN0.jpg', 'bfLLsCa2P5pD.jpg'];

    return (
        <div className="min-h-screen bg-background pt-20">
            <section id="certificate" className="section pt-8 pb-12 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="section-title text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-skin">
                            Certificates
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((img, i) => (
                            <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-bg-50 cursor-pointer hover:opacity-90 transition-opacity">
                                <Image src={`/images/${img}`} alt="Certificate" fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
