import React from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
    return (
        <section className="min-h-[90vh] max-h-[820px] flex items-center pt-24 pb-12">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text */}
                    <div className="space-y-6 animate-fade-in-up">
                        {/* Eyebrow */}
                        <div className="inline-block">
                            <span className="text-accent text-sm font-semibold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                                Digital Engineering Studio
                            </span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Solutions Engineered for{' '}
                            <span className="text-gradient">Relentless Growth</span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
                            Precision-engineered digital solutions designed to help you execute and scale with confidence.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button href="/consultation" size="large">
                                Get a Free Consultation
                            </Button>
                            <Button href="/portfolio" variant="secondary" size="large">
                                View Our Work
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-purple-600/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center overflow-hidden">
                            {/* Placeholder for service image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                            <div className="relative z-10 text-center p-8">
                                <div className="w-32 h-32 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-16 h-16 text-accent"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-white font-semibold text-xl">Engineered for Scale</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
