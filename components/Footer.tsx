'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-card border-t border-bg-50 text-text-secondary py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="font-medium text-lg text-text-primary">
                        <span className="font-script text-2xl text-skin mr-1">R</span>ajan Prasaila Yadav
                    </p>
                    <p className="text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>

                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/ajit-prasad-600083238/" target="_blank" className="hover:text-skin transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/designerajit/" target="_blank" className="hover:text-skin transition-colors">Instagram</a>
                    <a href="https://www.behance.net/ajitprasad2" target="_blank" className="hover:text-skin transition-colors">Behance</a>
                    <a href="https://www.youtube.com/@TechWorldAjit" target="_blank" className="hover:text-skin transition-colors">YouTube</a>
                </div>
            </div>
        </footer>
    );
}
