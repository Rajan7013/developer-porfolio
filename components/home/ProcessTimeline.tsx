import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';

export default function ProcessTimeline() {
    const steps = [
        {
            number: '01',
            title: 'Discovery',
            description: 'Understanding your goals, challenges, and requirements',
        },
        {
            number: '02',
            title: 'Design',
            description: 'Creating user-centered designs and system architecture',
        },
        {
            number: '03',
            title: 'Engineering',
            description: 'Building scalable, secure, and performant solutions',
        },
        {
            number: '04',
            title: 'Testing',
            description: 'Rigorous QA to ensure reliability and quality',
        },
        {
            number: '05',
            title: 'Launch',
            description: 'Smooth deployment with zero downtime',
        },
        {
            number: '06',
            title: 'Scale',
            description: 'Continuous optimization and growth support',
        },
    ];

    return (
        <SectionWrapper id="process" className="bg-linear-to-b from-transparent to-card/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
                <p className="text-xl text-text-secondary">
                    From concept to scale, we&apos;ve got you covered
                </p>
            </div>

            {/* Desktop - Horizontal Timeline */}
            <div className="hidden lg:block">
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-12 left-0 right-0 h-0.5 bg-accent/30" />

                    <div className="grid grid-cols-6 gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Circle */}
                                <div className="w-24 h-24 mx-auto bg-card border-4 border-accent rounded-full flex items-center justify-center mb-4 relative z-10">
                                    <span className="text-2xl font-bold text-accent">{step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-text-secondary">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile - Vertical Timeline */}
            <div className="lg:hidden space-y-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                        {/* Circle and Line */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-card border-4 border-accent rounded-full flex items-center justify-center shrink-0">
                                <span className="text-lg font-bold text-accent">{step.number}</span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="w-0.5 h-full bg-accent/30 mt-2" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="pb-8">
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-text-secondary">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
