'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-card border-t border-bg-50 text-text-secondary py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Line 1: Brand Info */}
                <div className="text-center mb-3">
                    <p className="font-bold text-sm md:text-base text-text-primary">
                        Rajan Prasaila Yadav <span className="text-skin mx-1 hidden sm:inline">|</span>
                        <span className="block sm:inline font-medium text-text-secondary mt-0.5 sm:mt-0">Student Full Stack AI Developer</span>
                    </p>
                    <a href="mailto:info@rajan.dev" className="text-skin hover:underline text-xs md:text-sm mt-1 inline-block">info@rajan.dev</a>
                </div>

                {/* Line 2: Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium mb-4 text-sm">
                    <Link href="/" className="hover:text-skin transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-skin transition-colors">About</Link>
                    <Link href="/services" className="hover:text-skin transition-colors">Services</Link>
                    <Link href="/projects" className="hover:text-skin transition-colors">Projects</Link>
                    <Link href="/contact" className="hover:text-skin transition-colors">Contact</Link>
                </div>

                {/* Line 3: Copyright */}
                <div className="text-center pt-3 border-t border-bg-50">
                    <p className="text-xs md:text-sm text-text-secondary">
                        © {new Date().getFullYear()} Rajan Prasaila Yadav. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
