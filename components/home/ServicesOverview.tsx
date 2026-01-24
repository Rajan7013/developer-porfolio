import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/button';
import SectionWrapper from '../ui/SectionWrapper';

export default function ServicesOverview() {
    const services = [
        {
            icon: '🌐',
            name: 'Website Development',
            description: 'Scalable web applications built with modern frameworks',
        },
        {
            icon: '📱',
            name: 'Mobile App Development',
            description: 'Cross-platform apps that deliver native experiences',
        },
        {
            icon: '🤖',
            name: 'AI Integration',
            description: 'Intelligent systems that automate and optimize',
        },
        {
            icon: '📊',
            name: 'Data & Analytics',
            description: 'Transform data into actionable business insights',
        },
        {
            icon: '📢',
            name: 'Digital Media & Marketing',
            description: 'Creative campaigns that drive growth and engagement',
        },
        {
            icon: '🎨',
            name: 'UI/UX Design',
            description: 'User-centered designs that convert and delight',
        },
    ];

    return (
        <SectionWrapper id="services">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                <p className="text-xl text-text-secondary">
                    Built for scale, security, and speed
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {services.map((service, index) => (
                    <Card key={index} glow>
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {service.name}
                        </h3>
                        <p className="text-text-secondary">{service.description}</p>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Button href="/services" variant="secondary">
                    View All Services →
                </Button>
            </div>
        </SectionWrapper>
    );
}
