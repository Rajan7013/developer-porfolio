'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTypewriter from '@/hooks/useTypewriter';

export default function HeroSection() {
    const roles = [
        "Full Stack AI Developer"
    ];
    const displayText = useTypewriter(roles, 100, 2000, false);

    return (
        <section className="pt-24 pb-10 px-6 flex items-center bg-background">
            <div className="max-w-content w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

                {/* Left Content Stack */}
                <div className="flex flex-col gap-4 w-full lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">

                    {/* Name (H1) */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[56px] leading-[1.1] font-extrabold text-text-primary lg:whitespace-nowrap">
                        Hi, I’m <span className="text-skin">Rajan Prasaila<br className="lg:hidden" /> Yadav</span>
                    </h1>

                    {/* Main Tagline (H2) */}
                    <h2 className="text-2xl sm:text-3xl lg:text-[36px] leading-[1.2] font-bold text-text-primary">
                        I build scalable web & AI products for modern businesses
                    </h2>

                    {/* Typing Role (H3) */}
                    <h3 className="text-lg lg:text-[18px] font-medium text-emerald-500 h-8">
                        {displayText}
                    </h3>

                    {/* Supporting Text */}
                    <p className="text-lg lg:text-[18px] leading-[1.7] text-text-secondary">
                        I design and deploy real-world digital platforms that are fast, secure, and cost-efficient.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                        <Link
                            href="/contact"
                            className="px-7 py-3.5 rounded-full font-semibold bg-skin text-white hover:opacity-90 transition-opacity shadow-lg"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href="/projects"
                            className="px-7 py-3.5 rounded-full font-semibold border-2 border-skin text-skin hover:bg-skin hover:text-white transition-all shadow-sm"
                        >
                            View Live Work
                        </Link>
                    </div>
                </div>

                {/* Profile Image (Right) */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-[220px] h-[220px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-4 border-background">
                        <Image
                            src="/image/home-profile.webp"
                            alt="Rajan Prasaila Yadav"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
