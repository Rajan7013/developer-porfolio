import React from 'react';
import Link from 'next/link';
import { ExternalLink, Globe, Briefcase, HeartPulse, BrainCircuit, School, GraduationCap, ArrowRight } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    category: string;
    icon: React.ElementType;
}

const projects: Project[] = [
    {
        title: 'Consultancy Platform',
        description: 'A full-stack consultancy platform with user management, secure authentication, and seamless data flow between frontend and backend.',
        techStack: ['Next.js 16', 'Supabase', 'Drizzle ORM', 'Tailwind CSS', 'Framer Motion', 'Zod', 'React Hook Form'],
        liveLink: 'https://www.pinnaclenepal.org/',
        category: 'Full Stack',
        icon: Briefcase,
    },
    {
        title: 'Health Assistant AI',
        description: 'An AI-powered health assistant that provides intelligent responses and basic symptom guidance using generative AI.',
        techStack: ['Next.js 15', 'Genkit AI', 'Firebase', 'Tailwind CSS', 'ShadCN UI'],
        liveLink: 'https://health-assistant-ai-ashen.vercel.app/',
        category: 'AI Application',
        icon: HeartPulse,
    },
    {
        title: 'DocMind AI / QA System',
        description: 'An enterprise-grade RAG platform with Voice Input, Multi-language support, and zero-hallucination answers from uploaded documents.',
        techStack: ['React (Vite)', 'Tailwind CSS', 'Clerk Auth', 'Supabase Vector', 'Gemini AI', 'Python'],
        liveLink: 'https://rajan-docai.vercel.app/',
        category: 'AI / RAG',
        icon: BrainCircuit,
    },
    {
        title: 'School Demo Platform',
        description: 'A demo school management website showcasing information pages, structure, and basic administrative features.',
        techStack: ['Next.js 16', 'Tailwind CSS', 'Framer Motion'],
        liveLink: 'https://bfps-ruddy.vercel.app/',
        category: 'Educational',
        icon: School,
    },
    {
        title: 'College Portal with AI',
        description: 'A modern education portal with generative AI integration, authentication, and cloud file storage.',
        techStack: ['Next.js 16', 'Firebase', 'Clerk Auth', 'Generative AI', 'AWS S3'],
        liveLink: 'https://edu-svcet.vercel.app/',
        category: 'Educational / AI',
        icon: GraduationCap,
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section pt-8 pb-12 bg-background">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-3 md:mb-4">
                        Building High-Performance <span className="text-skin">Full Stack & AI Systems</span>
                    </h1>
                    <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto mt-3 md:mt-4">
                        A selection of real-world projects I have built and deployed. These include full-stack applications, AI systems, and responsive web platforms designed to work in production environments.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-bg-50 shadow-sm hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.4)] hover:border-skin hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-3 md:mb-4">
                                <div className="p-2 md:p-3 bg-skin/10 rounded-full text-skin">
                                    <project.icon size={20} className="md:w-6 md:h-6" />
                                </div>
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    className="p-1.5 md:p-2 text-text-secondary hover:text-skin transition-colors"
                                    title="View Live"
                                >
                                    <ExternalLink size={18} className="md:w-5 md:h-5" />
                                </Link>
                            </div>

                            <h2 className="text-lg md:text-xl font-bold text-text-primary mb-2 group-hover:text-skin transition-colors">
                                {project.title}
                            </h2>

                            <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6 grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="space-y-3 md:space-y-4">
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-0.5 md:py-1 bg-bg-50 text-text-secondary rounded-md border border-bg-50/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-3 md:pt-4 border-t border-bg-50 flex items-center justify-between">
                                    <span className="text-xs font-medium text-skin bg-skin/10 px-2 md:px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="text-xs md:text-sm font-semibold text-text-primary hover:text-skin flex items-center gap-1 transition-colors"
                                    >
                                        Live Demo <Globe size={12} className="md:w-3.5 md:h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
