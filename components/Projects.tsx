import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Layers, Globe, Briefcase, HeartPulse, BrainCircuit, School, GraduationCap } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    // repoLink?: string; // Optional if we have it
    category: string;
    icon: React.ElementType;
}

const projects: Project[] = [
    {
        title: 'Consultancy Platform',
        description: 'A comprehensive consultancy platform featuring robust backend handling, user management, and seamless data flow.',
        techStack: ['Next.js 16', 'Supabase', 'Drizzle ORM', 'Tailwind CSS', 'Framer Motion', 'Zod', 'React Hook Form'],
        liveLink: 'https://www.pinnaclenepal.org/',
        category: 'Full Stack',
        icon: Briefcase,
    },
    {
        title: 'Health Assistant AI',
        description: 'An AI-powered health assistant application providing intelligent insights and user support.',
        techStack: ['Next.js 15', 'Genkit AI', 'Firebase', 'Tailwind CSS', 'Shadcn UI'],
        liveLink: 'https://health-assistant-ai-ashen.vercel.app/',
        category: 'AI Application',
        icon: HeartPulse,
    },
    {
        title: 'QA System / DocAI Alpha',
        description: 'Advanced Question Answering system using RAG/AI to process and retrieve information from documents.',
        techStack: ['React (Vite)', 'Tailwind CSS', 'Clerk Auth', 'Lucide React', 'React Markdown', 'Python Backend'],
        liveLink: 'https://docai-alpha.vercel.app/',
        category: 'AI / RAG',
        icon: BrainCircuit,
    },
    {
        title: 'School Demo',
        description: 'A demonstration school management website showcasing informational pages and administrative features.',
        techStack: ['Next.js 16', 'Tailwind CSS', 'Framer Motion'],
        liveLink: 'https://bfps-ruddy.vercel.app/',
        category: 'Educational',
        icon: School,
    },
    {
        title: 'College Portal',
        description: 'A modern college education portal integrated with generative AI and cloud storage solutions.',
        techStack: ['Next.js 16', 'Firebase', 'Clerk Auth', 'Generative AI', 'AWS S3'],
        liveLink: 'https://edu-svcet.vercel.app/',
        category: 'Educational',
        icon: GraduationCap,
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section pt-8 pb-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="section-title text-center mb-16">
                    <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-skin">
                        Projects
                    </h2>
                    <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
                        A glimpse into my recent work, featuring full-stack applications, AI integrations, and responsive designs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-card rounded-2xl p-6 border border-bg-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-skin/10 rounded-full text-skin">
                                    <project.icon size={24} />
                                </div>
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    className="p-2 text-text-secondary hover:text-skin transition-colors"
                                    title="View Live"
                                >
                                    <ExternalLink size={20} />
                                </Link>
                            </div>

                            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-skin transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-text-secondary text-sm mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 bg-bg-50 text-text-secondary rounded-md border border-bg-50/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-bg-50 flex items-center justify-between">
                                    <span className="text-xs font-medium text-skin bg-skin/10 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="text-sm font-semibold text-text-primary hover:text-skin flex items-center gap-1 transition-colors"
                                    >
                                        Live Demo <Globe size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://drive.google.com/drive/folders/1jCWqn8vjORThrPvIRkcO2VTpYz7UJMPb?usp=sharing" target="_blank" className="px-8 py-3 bg-skin text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
