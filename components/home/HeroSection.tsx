
import React from 'react';
import ProfileImage from '@/components/ProfileImage';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function HeroSection() {
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
                    <p className="text-lg lg:text-[18px] font-medium text-emerald-700 dark:text-emerald-400 h-8">
                        Full Stack AI Developer
                    </p>

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
                        <a
                            href="/Rajan_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3.5 rounded-full font-semibold border-2 border-text-secondary text-text-secondary hover:bg-text-secondary hover:text-white transition-all shadow-sm flex items-center justify-center gap-2"
                        >
                            <Download size={20} /> Resume
                        </a>
                    </div>
                </div>

                {/* Profile Image (Right) */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] aspect-3/2 lg:w-[480px] lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-bg-50 hover:rotate-3 transition-transform duration-500">
                        <ProfileImage alt="Rajan Prasaila Yadav - Full Stack AI Developer" sizes="(max-width: 480px) calc(100vw - 48px), (max-width: 1024px) 400px, 480px" />
                    </div>
                </div>

            </div>
        </section>
    );
}
