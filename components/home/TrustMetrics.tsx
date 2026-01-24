import React from 'react';
import Card from '../ui/card';

export default function TrustMetrics() {
    const metrics = [
        {
            icon: '🚀',
            number: '150+',
            label: 'Projects Delivered',
        },
        {
            icon: '⚙️',
            number: '50+',
            label: 'Systems Deployed',
        },
        {
            icon: '⭐',
            number: '98%',
            label: 'Client Satisfaction',
        },
        {
            icon: '📅',
            number: '5+',
            label: 'Years of Experience',
        },
    ];

    return (
        <section className="py-12 bg-linear-to-b from-transparent to-card/50">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <Card key={index} hover={false} className="text-center">
                            <div className="text-4xl mb-3">{metric.icon}</div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {metric.number}
                            </div>
                            <div className="text-sm text-text-secondary">{metric.label}</div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
