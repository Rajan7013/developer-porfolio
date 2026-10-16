import React from 'react';
import TechnologyLogo from '@/components/TechnologyLogo';
import Link from 'next/link';
import { ExternalLink, Briefcase, HeartPulse, BrainCircuit, School, GraduationCap } from 'lucide-react';

import { portfolioData } from '@/lib/portfolio-data';
import { Github, Wallet, ClipboardList } from 'lucide-react';

const projectIcons = { business: Briefcase, health: HeartPulse, ai: BrainCircuit, school: School, education: GraduationCap, finance: Wallet, tasks: ClipboardList };

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section pt-8 pb-12 bg-background">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-3 md:mb-4">
                        Web, AI & <span className="text-skin">Management Software Projects</span>
                    </h1>
                    <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto mt-3 md:mt-4">
                        Explore my work across business management, finance, education, and AI — including live apps, prototypes, and projects in development.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
                    {portfolioData.map((project) => {
                        const Icon = projectIcons[project.icon];
                        return (
                        <div
                            key={project.title}
                            className="group bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-bg-50 shadow-sm hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.4)] hover:border-skin hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-3 md:mb-4">
                                <div className="p-2 md:p-3 bg-skin/10 rounded-full text-skin">
                                    <Icon size={20} className="md:w-6 md:h-6" />
                                </div>
                                <span className="text-xs text-text-secondary text-right max-w-[65%]">{project.status || 'Live app'}</span>
                            </div>

                            <h2 className="text-lg md:text-xl font-bold text-text-primary mb-2 group-hover:text-skin transition-colors">
                                {project.title}
                            </h2>

                            <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6 grow leading-relaxed">
                                {project.description}
                            </p>

                            {project.highlights && (
                                <ul className="text-sm text-text-secondary space-y-2 mb-5 list-disc pl-4">
                                    {project.highlights.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            )}
                            <div className="space-y-3 md:space-y-4">
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 md:py-1 bg-bg-50 text-text-secondary rounded-md border border-bg-50/50"
                                        >
                                            <TechnologyLogo name={tech} size="small" />
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-3 md:pt-4 border-t border-bg-50 flex flex-wrap items-center gap-3">
                                    <span className="text-xs font-medium text-skin bg-skin/10 px-2 py-1 rounded-full">{project.category}</span>
                                    {project.liveLink && (
                                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="text-sm font-semibold text-text-primary hover:text-skin inline-flex items-center gap-1">
                                            {project.status?.startsWith('Staging') ? 'Open app' : 'Live Demo'} <ExternalLink size={14} />
                                        </Link>
                                    )}
                                    {project.githubLink && (
                                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="text-sm font-semibold text-text-primary hover:text-skin inline-flex items-center gap-1">
                                            GitHub <Github size={14} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
