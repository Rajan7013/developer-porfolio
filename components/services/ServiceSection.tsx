import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';

interface SubService {
    title: string;
    description: string;
    target?: string;
    stack?: string;
    deliverables?: string[];
}

interface ServiceSectionProps {
    id: string;
    title: string;
    icon: string;
    description?: string;
    subservices: SubService[];
    reversed?: boolean;
}

export default function ServiceSection({
    id,
    title,
    icon,
    description,
    subservices,
    reversed = false,
}: ServiceSectionProps) {
    return (
        <SectionWrapper id={id} className="border-b border-gray-800 last:border-0">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 ${reversed ? 'lg:flex-row-reverse' : ''}`}>

                {/* Header Column */}
                <div className={`lg:col-span-4 ${reversed ? 'lg:order-last' : ''}`}>
                    <div className="sticky top-24">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-4xl mb-6 border border-accent/20">
                            {icon}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                        {description && (
                            <p className="text-lg text-text-secondary mb-8">{description}</p>
                        )}
                        <div className="hidden lg:block w-20 h-1 bg-accent rounded-full" />
                    </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 space-y-8">
                    {subservices.map((sub, index) => (
                        <div
                            key={index}
                            className="bg-card p-8 rounded-2xl border border-gray-800 hover:border-accent/30 transition-colors"
                        >
                            <h3 className="text-2xl font-bold text-white mb-3">{sub.title}</h3>
                            <p className="text-text-secondary mb-6">{sub.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {sub.target && (
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1 block">
                                            Best For
                                        </span>
                                        <p className="text-sm text-gray-300">{sub.target}</p>
                                    </div>
                                )}

                                {sub.stack && (
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1 block">
                                            Tech Stack
                                        </span>
                                        <p className="text-sm text-gray-300">{sub.stack}</p>
                                    </div>
                                )}
                            </div>

                            {sub.deliverables && (
                                <div className="mt-6 pt-6 border-t border-gray-800">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 block">
                                        Key Deliverables
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {sub.deliverables.map((item, i) => (
                                            <span
                                                key={i}
                                                className="bg-background px-3 py-1 rounded-full text-xs text-text-secondary border border-gray-800"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
