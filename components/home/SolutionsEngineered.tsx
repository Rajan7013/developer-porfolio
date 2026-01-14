import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';

export default function SolutionsEngineered() {
    const pillars = [
        {
            title: 'Execution',
            description: 'From concept to deployment, we deliver production-ready systems on time.',
        },
        {
            title: 'Automation',
            description: 'Streamline operations with intelligent workflows and AI-powered tools.',
        },
        {
            title: 'Scalability',
            description: 'Architecture designed to grow with your business, from startup to enterprise.',
        },
        {
            title: 'Intelligence',
            description: 'Data-driven insights and AI integration that give you a competitive edge.',
        },
    ];

    return (
        <SectionWrapper id="solutions" className="bg-gradient-to-b from-card/50 to-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left - Diagram/Illustration */}
                <div className="relative">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/10 to-purple-600/10 border border-accent/20 p-8 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {pillars.map((pillar, index) => (
                                <div
                                    key={index}
                                    className="aspect-square bg-card/50 backdrop-blur-sm rounded-lg border border-accent/30 flex items-center justify-center p-4 hover:bg-accent/10 transition-colors"
                                >
                                    <span className="text-white font-bold text-center text-sm">
                                        {pillar.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right - Content */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Solutions <span className="text-gradient">Engineered</span> for Growth
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Our approach combines technical excellence with strategic thinking to deliver systems that scale.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="border-l-4 border-accent pl-6 py-2">
                                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                                <p className="text-text-secondary">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
