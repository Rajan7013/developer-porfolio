'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, UserRound, Briefcase, FileBadge, Layers, MessageSquare, Menu, X, FolderGit2 } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Links matching source project
    const navItems = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: UserRound },
        { name: 'Services', href: '/services', icon: Layers },
        { name: 'Certificates', href: '/certificate', icon: FileBadge },
        { name: 'Projects', href: '/projects', icon: FolderGit2 },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
    ];

    return (
        <nav className="fixed top-0 w-full z-40 bg-card/95 backdrop-blur-sm border-b border-bg-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-[70px] items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-bold font-script relative z-50">
                        <span className="text-skin text-4xl">R</span>ajan
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-2 text-text-secondary hover:text-skin transition-colors font-medium group"
                            >
                                <item.icon size={18} className="text-skin group-hover:text-skin" />
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center z-50">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-text-primary p-2 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-background/95 backdrop-blur-md transition-transform duration-300 lg:hidden z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 text-2xl text-text-primary hover:text-skin font-medium transition-colors group"
                        >
                            <item.icon size={24} className="text-skin" />
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
