import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { portfolioData, Project } from '@/lib/portfolio-data';

interface CaseStudyProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return portfolioData.map((project) => ({
        slug: project.slug,
    }));
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
    const project = portfolioData.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="flex-grow pt-20">
                {/* Project Hero */}
                <SectionWrapper className="pb-12 border-b border-gray-800">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-4 mb-6">
                            {project.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium border border-accent/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                            {project.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-800">
                            <div>
                                <span className="text-sm text-gray-400 block mb-1">Client</span>
                                <span className="text-white font-semibold">{project.client}</span>
                            </div>
                            <div>
                                <span className="text-sm text-gray-400 block mb-1">Year</span>
                                <span className="text-white font-semibold">{project.year}</span>
                            </div>
                            <div>
                                <span className="text-sm text-gray-400 block mb-1">Services</span>
                                <span className="text-white font-semibold">Development, AI</span>
                            </div>
                            <div>
                                <span className="text-sm text-gray-400 block mb-1">Outcome</span>
                                <span className="text-white font-semibold">Success</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Case Study Content */}
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Sidebar (Architecture) */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-card p-8 rounded-2xl border border-gray-800 sticky top-32">
                                <h3 className="text-xl font-bold text-white mb-6">Architecture</h3>
                                <ul className="space-y-4">
                                    {project.architecture.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-accent mt-1">▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-gray-800">
                                    <Button href="/consultation" size="default" className="w-full">
                                        Build Similar
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">
                            {/* Problem */}
                            <section>
                                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    {project.problem}
                                </p>
                            </section>

                            {/* Approach */}
                            <section>
                                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    {project.approach}
                                </p>
                            </section>

                            {/* Approach Visual Placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                                <span className="text-gray-500">Solution Architecture Diagram</span>
                            </div>

                            {/* Results */}
                            <section>
                                <h2 className="text-3xl font-bold mb-8">Key Results</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {project.results.map((result, i) => (
                                        <div key={i} className="bg-accent/5 p-6 rounded-xl border border-accent/10">
                                            <div className="text-3xl font-bold text-accent mb-2">✦</div>
                                            <p className="font-medium text-white">{result}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Bottom CTA */}
                <section className="py-24 bg-card border-t border-gray-800">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for similar results?</h2>
                        <Button href="/consultation" size="large">
                            Start Your Project
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
