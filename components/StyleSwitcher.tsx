'use client';

import { useState, useEffect } from 'react';

const colors = [
    { name: 'color-1', hex: '#ec1839', rgb: '236, 24, 57' },
    { name: 'color-2', hex: '#fa5b0f', rgb: '250, 91, 15' },
    { name: 'color-3', hex: '#37b182', rgb: '55, 177, 130' },
    { name: 'color-4', hex: '#1854b4', rgb: '24, 84, 180' },
    { name: 'color-5', hex: '#f021b2', rgb: '240, 33, 178' },
];

export default function StyleSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [activeColor, setActiveColor] = useState('#ec1839');

    // Toggle switch panel
    const toggleSwitcher = () => setIsOpen(!isOpen);

    // Theme Toggle
    const toggleTheme = () => {
        setIsDark(!isDark);
        const root = document.documentElement;
        console.log('Toggling theme. Current classes:', root.className);
        root.classList.toggle('dark');
        console.log('New classes:', root.className);
    };

    // Color Set
    const setColor = (hex: string, rgb: string) => {
        setActiveColor(hex);
        document.documentElement.style.setProperty('--skin-color', hex);
        document.documentElement.style.setProperty('--skin-color-rgb', rgb);
    };

    // Close on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    return (
        <div
            className="fixed top-[80px] z-[9999] transition-all duration-300 ease-in-out"
            style={{ right: isOpen ? '0' : '-200px' }}
        >
            {/* Toggle Button */}
            <div
                onClick={toggleSwitcher}
                className="absolute left-[-40px] top-0 w-[40px] h-[40px] bg-card text-skin flex items-center justify-center cursor-pointer rounded-l-lg shadow-md"
            >
                <span className="text-xl animate-spin-slow">⚙️</span>
            </div>

            {/* Panel */}
            <div className="bg-card w-[200px] p-4 rounded-bl-lg shadow-lg border border-bg-50">
                <h4 className="text-text-primary text-base font-semibold border-b border-bg-50 pb-2 mb-2">Theme Colors</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setColor(color.hex, color.rgb)}
                            style={{ backgroundColor: color.hex }}
                            className={`w-7 h-7 rounded-full cursor-pointer border border-bg-50 ${activeColor === color.hex ? 'ring-2 ring-offset-2 ring-skin' : ''}`}
                        />
                    ))}
                </div>

                <h4 className="text-text-primary text-base font-semibold border-b border-bg-50 pb-2 mb-2">Theme Mode</h4>
                <div className="flex gap-2 text-text-secondary">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full border border-bg-50 ${!isDark ? 'bg-skin text-white' : ''}`}
                    >
                        ☀️
                    </button>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full border border-bg-50 ${isDark ? 'bg-skin text-white' : ''}`}
                    >
                        🌙
                    </button>
                </div>
            </div>
        </div>
    );
}
