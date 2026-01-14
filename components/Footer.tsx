'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="logo">DevSphere</h3>
                        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                            Building the future of digital experiences with cutting-edge technology and innovative solutions.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">Services</Link></li>
                            <li><Link href="/project" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">Project</Link></li>
                            <li><Link href="/about" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        {/* Adding Social Links placeholder or keeping it simple as per original */}
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="#" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">Twitter</a></li>
                            <li><a href="#" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DevSphere. All rights reserved. Built with ❤️ using modern web technologies.</p>
                </div>
            </div>
        </footer>
    );
}
