'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when route changes
    useEffect(() => {
        // Menu will close automatically when pathname changes
        // This is handled by the key prop on navigation
        return () => {
            setIsMenuOpen(false);
        };
    }, [pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    const linkClass = (path: string) =>
        `bg-transparent border-none cursor-pointer font-medium transition-colors ${isActive(path) ? 'text-white' : 'text-[#9CA3AF] hover:text-white'}`;

    return (
        <nav ref={menuRef}>
            <div className="container">
                <Link href="/" className="logo">⚡ DevSphere</Link>

                {/* Mobile menu */}
                <ul className={`nav-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <li>
                        <Link href="/" className={linkClass('/')}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className={linkClass('/services')}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/project" className={linkClass('/project')}>
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={linkClass('/about')}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/technologies" className={linkClass('/technologies')}>
                            Tech Stack
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={linkClass('/contact')}>
                            Contact
                        </Link>
                    </li>
                    {!isMenuOpen && (
                        <li>
                            <Link
                                href="/contact"
                                className="cta-btn"
                                style={{
                                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
                                }}
                            >
                                Get Started
                            </Link>
                        </li>
                    )}
                </ul>

                {/* Hamburger Menu - Proper 3 lines */}
                <div
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ cursor: 'pointer' }}
                >
                    <span style={{
                        transform: isMenuOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none',
                        transition: 'all 0.3s ease'
                    }}></span>
                    <span style={{
                        opacity: isMenuOpen ? 0 : 1,
                        transition: 'all 0.3s ease'
                    }}></span>
                    <span style={{
                        transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
                        transition: 'all 0.3s ease'
                    }}></span>
                </div>
            </div>
        </nav>
    );
}
