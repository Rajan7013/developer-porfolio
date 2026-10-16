'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, UserRound, FileBadge, Layers, MessageSquare, Menu, X, FolderGit2, Sun, Moon, Palette, Code2 } from 'lucide-react';

const colors = [
    { name: 'color-1', hex: '#c8102e', rgb: '200, 16, 46' },
    { name: 'color-2', hex: '#a43b08', rgb: '164, 59, 8' },
    { name: 'color-3', hex: '#16734f', rgb: '22, 115, 79' },
    { name: 'color-4', hex: '#1854b4', rgb: '24, 84, 180' },
    { name: 'color-5', hex: '#ab087b', rgb: '171, 8, 123' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [activeColor, setActiveColor] = useState('#c8102e');

    // Links matching source project
    const navItems = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: UserRound },
        { name: 'Services', href: '/services', icon: Layers },
        { name: 'Certificates', href: '/certificate', icon: FileBadge },
        { name: 'Stack', href: '/stack', icon: Code2 },
        { name: 'Projects', href: '/projects', icon: FolderGit2 },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
    ];

    // Theme Toggle
    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    // Color Set
    const setColor = (hex: string, rgb: string) => {
        setActiveColor(hex);
        document.documentElement.style.setProperty('--skin-color', hex);
        document.documentElement.style.setProperty('--skin-color-rgb', rgb);
        setShowColorPicker(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-sm border-b border-bg-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-[70px] items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-bold font-script relative z-50">
                        <span className="text-skin text-4xl">R</span>ajan
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2 xl:gap-5">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 font-medium group ${isActive
                                            ? 'text-skin bg-skin/10 font-bold shadow-[0_0_10px_rgba(var(--skin-color-rgb),0.2)]'
                                            : 'text-text-secondary hover:text-skin hover:bg-skin/5'
                                        }`}
                                >
                                    <item.icon size={18} className={`transition-colors ${isActive ? 'text-skin' : 'text-skin group-hover:text-skin'}`} />
                                    {item.name}
                                </Link>
                            );
                        })}

                        {/* Desktop Theme Controls */}
                        <div className="flex items-center gap-3 ml-4 border-l border-bg-50 pl-4">
                            {/* Color Picker */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                    className="p-2 text-text-secondary hover:text-skin transition-colors"
                                    aria-label="Theme colors"
                                >
                                    <Palette size={20} />
                                </button>
                                {showColorPicker && (
                                    <div className="absolute right-0 top-12 bg-card border border-bg-50 rounded-lg shadow-lg p-3 w-40">
                                        <p className="text-xs font-semibold text-text-primary mb-2">Theme Colors</p>
                                        <div className="flex flex-wrap gap-2">
                                            {colors.map((color) => (
                                                <button
                                                    key={color.name}
                                                    aria-label={`Use ${color.hex} accent color`}
                                                    onClick={() => setColor(color.hex, color.rgb)}
                                                    style={{ backgroundColor: color.hex }}
                                                    className={`w-7 h-7 rounded-full border-2 ${activeColor === color.hex ? 'border-text-primary scale-110' : 'border-bg-50'} transition-all`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Theme Mode Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-text-secondary hover:text-skin transition-colors"
                                aria-label="Toggle theme"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3">
                        {/* Mobile Theme Controls in Header */}
                        <div className="relative">
                            <button
                                onClick={() => setShowColorPicker(!showColorPicker)}
                                className="p-2 text-text-secondary hover:text-skin transition-colors"
                                aria-label="Theme colors"
                            >
                                <Palette size={20} />
                            </button>
                            {showColorPicker && (
                                <div className="absolute right-0 top-12 bg-card border border-bg-50 rounded-lg shadow-lg p-3 w-40 z-50">
                                    <p className="text-xs font-semibold text-text-primary mb-2">Theme Colors</p>
                                    <div className="flex flex-wrap gap-2">
                                        {colors.map((color) => (
                                            <button
                                                key={color.name}
                                                    aria-label={`Use ${color.hex} accent color`}
                                                onClick={() => setColor(color.hex, color.rgb)}
                                                style={{ backgroundColor: color.hex }}
                                                className={`w-7 h-7 rounded-full border-2 ${activeColor === color.hex ? 'border-text-primary scale-110' : 'border-bg-50'} transition-all`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="p-2 text-text-secondary hover:text-skin transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-text-primary p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-card border-t border-bg-50">
                        <div className="flex flex-col py-4 space-y-1 items-end">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 text-lg transition-colors font-medium border-b border-bg-50/50 w-full justify-end ${isActive
                                            ? 'text-skin bg-skin/10'
                                            : 'text-text-primary hover:text-skin hover:bg-skin/5'
                                            }`}
                                    >
                                        <item.icon size={22} className="text-skin" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
