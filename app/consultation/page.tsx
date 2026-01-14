import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ConsultationForm from '@/components/ConsultationForm';

export default function ConsultationPage() {
    return (
        <>
            <Navbar />
            <main className="flex-grow pt-20">
                <SectionWrapper className="py-12 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Content */}
                        <div className="space-y-12">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                    Let&apos;s Build Something That <span className="text-gradient">Scales</span>
                                </h1>
                                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                                    Book a free 30-minute strategy session. We&apos;ll review your goals and provide a technical roadmap—no strings attached.
                                </p>

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: '🔍',
                                            title: 'Free Technical Review',
                                            desc: 'We analyze your current stack or requirements and identify bottlenecks.',
                                        },
                                        {
                                            icon: '💡',
                                            title: 'Growth Strategy',
                                            desc: 'Actionable advice on how to architect for 10x scalability.',
                                        },
                                        {
                                            icon: '📋',
                                            title: 'Tailored Roadmap',
                                            desc: 'A clear step-by-step plan to get from idea to market dominance.',
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 bg-accent/5 rounded-xl border border-accent/10">
                                            <div className="text-3xl">{item.icon}</div>
                                            <div>
                                                <h3 className="font-bold text-white">{item.title}</h3>
                                                <p className="text-sm text-text-secondary">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mini Testimonials */}
                            <div className="pt-8 border-t border-gray-800">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border-2 border-background" />
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Trusted by <span className="text-white font-bold">50+ founders</span>
                                    </div>
                                </div>
                                <p className="italic text-gray-400 text-sm">
                                    &quot;The strategy session alone was worth more than months of consulting with other agencies.&quot;
                                </p>
                                <p className="text-xs text-accent mt-2 font-bold">— CEO, FinTech Startup</p>
                            </div>
                        </div>

                        {/* Right Form */}
                        <ConsultationForm />

                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
}
