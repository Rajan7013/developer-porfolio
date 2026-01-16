import React from 'react';
import Card from '../ui/Card';
import SectionWrapper from '../ui/SectionWrapper';

export default function FeaturedPortfolio() {
    const projects = [
        {
            name: 'EduNexus Ecosystem',
            description: 'Comprehensive educational platform with AI-powered learning paths',
            stack: ['Next.js', 'Python', 'PostgreSQL', 'AI/ML'],
            image: '🎓',
        },
        {
            name: 'Health Assistant AI',
            description: 'Intelligent health monitoring and recommendation system',
            stack: ['React Native', 'TensorFlow', 'Node.js', 'MongoDB'],
            image: '🏥',
        },
        {
            name: 'RAG Knowledge System',
            description: 'Enterprise knowledge base with semantic search and AI chat',
            stack: ['LangChain', 'Vector DB', 'FastAPI', 'React'],
            image: '🧠',
        },
    ];

    return (
        <SectionWrapper id="portfolio">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                <p className="text-xl text-text-secondary">
                    Real solutions, real results
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full">
                        {/* Thumbnail */}
                        <div className="aspect-video bg-linear-to-br from-accent/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center text-6xl">
                            {project.image}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                        <p className="text-text-secondary mb-4 grow">{project.description}</p>

                        {/* Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href={`/portfolio/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-accent hover:text-blue-400 font-semibold transition-colors inline-flex items-center gap-2"
                        >
                            View Case Study
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
