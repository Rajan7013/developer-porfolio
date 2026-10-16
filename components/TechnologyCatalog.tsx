import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Layers, KeyRound, Server, Database, BrainCircuit, Cloud, Globe, ShieldCheck, Activity, Search, FlaskConical, Palette } from 'lucide-react';
import Footer from '@/components/Footer';
import TechnologyLogo from '@/components/TechnologyLogo';
import { technologyCategories } from '@/lib/technology-data';

const categoryIcons = [Layers, KeyRound, Server, Database, BrainCircuit, Cloud, Globe, ShieldCheck, Activity, Search, FlaskConical, Palette];
const flow = [
    { title: 'Client & interface', detail: 'The browser or mobile app sends a request.', tech: 'React', icon: Layers },
    { title: 'Domain & edge', detail: 'DNS, HTTPS, and the CDN route the request.', tech: 'Cloudflare', icon: Globe },
    { title: 'Identity & access', detail: 'Sessions and permissions protect private actions.', tech: 'Clerk Auth', icon: KeyRound },
    { title: 'Application & APIs', detail: 'Services validate input and run business logic.', tech: 'FastAPI (Python)', icon: Server },
    { title: 'Data & AI services', detail: 'APIs query storage or call retrieval and AI workflows as needed.', tech: 'PostgreSQL', icon: Database },
    { title: 'Response & observability', detail: 'Results return to the client; logs and metrics support improvement.', tech: 'Sentry', icon: Activity },
];

export default function TechnologyCatalog({ title = 'Technology Stack & System Architecture' }: { title?: string }) {
    return (
        <>
            <main id="main-content" className="min-h-screen bg-background text-text-primary pt-24 pb-16">
                <header className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
                    <p className="text-skin text-xs font-bold uppercase tracking-[0.2em] mb-4">From interface to infrastructure</p>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">{title}</h1>
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed">My toolkit for web applications, management software, and AI systems — technologies I work with and continue exploring through projects.</p>
                </header>

                <section aria-labelledby="architecture-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="grid lg:grid-cols-2 items-center gap-8 bg-card border border-bg-50 rounded-2xl p-5 sm:p-8">
                        <div>
                            <p className="text-skin text-xs font-bold uppercase tracking-widest mb-3">System design</p>
                            <h2 id="architecture-heading" className="text-2xl md:text-3xl font-bold mb-4">A clear path from request to response</h2>
                            <p className="text-text-secondary leading-relaxed mb-6">I connect interfaces, identity, APIs, data, and deployment into a complete system. The tools vary with the project’s needs, budget, and scale.</p>
                            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-text-secondary">
                                {['Clear service boundaries', 'Secure access and validation', 'Reliable data and storage', 'Observable deployments'].map(item => <li key={item} className="flex items-center gap-2"><ShieldCheck size={16} className="text-skin shrink-0" />{item}</li>)}
                            </ul>
                        </div>
                        <figure className="w-full max-w-sm mx-auto">
                            <div className="relative aspect-square overflow-hidden rounded-2xl">
                                <Image src="/image/light.webp" alt="Illustration of connected web, mobile, cloud, database, and security components" fill sizes="(max-width: 768px) 90vw, 384px" className="object-contain dark:hidden" />
                                <Image src="/image/dark.webp" alt="Illustration of connected web, mobile, cloud, database, and security components" fill sizes="(max-width: 768px) 90vw, 384px" className="object-contain hidden dark:block" />
                            </div>
                            <figcaption className="text-xs text-center text-text-secondary mt-3">Interfaces, services, data, and infrastructure working together.</figcaption>
                        </figure>
                    </div>
                    <figure className="mt-6">
                        <figcaption className="text-sm text-text-secondary mb-4">Example request flow · read left to right, then continue on the next row.</figcaption>
                        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {flow.map((step, index) => (
                                <li key={step.title} className="rounded-xl bg-card border border-bg-50 p-5 flex flex-col min-h-48">
                                    <div className="flex items-center justify-between mb-4"><TechnologyLogo name={step.tech} /><span className="text-sm font-mono text-skin">0{index + 1}</span></div>
                                    <h3 className="font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-text-secondary grow">{step.detail}</p>
                                    {index < flow.length - 1 && <span className="inline-flex items-center gap-2 mt-3 text-xs text-skin">Next: {flow[index + 1].title}<ArrowRight size={14} className="hidden md:block" /><ArrowDown size={14} className="md:hidden" /></span>}
                                </li>
                            ))}
                        </ol>
                    </figure>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Technology categories" className="flex flex-wrap gap-2 mb-8">
                        {technologyCategories.map(category => <a key={category.id} href={`#${category.id}`} className="rounded-full border border-bg-50 px-3 py-2 text-xs font-medium text-text-secondary hover:text-skin hover:border-skin transition-colors">{category.title}</a>)}
                    </nav>
                    <div className="space-y-6">
                        {technologyCategories.map((category, index) => {
                            const Icon = categoryIcons[index];
                            return (
                                <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-24 rounded-2xl border border-bg-50 bg-card p-4 sm:p-6 lg:p-8">
                                    <header className="flex items-start gap-4 mb-6">
                                        <div className="h-11 w-11 flex shrink-0 items-center justify-center bg-skin/10 rounded-xl text-skin"><Icon size={22} /></div>
                                        <div><h2 id={`${category.id}-title`} className="text-xl sm:text-2xl font-bold">{category.title}</h2><p className="text-sm text-text-secondary mt-1 leading-relaxed">{category.description}</p></div>
                                        <span className="hidden sm:block ml-auto text-sm font-mono text-text-secondary">{String(index + 1).padStart(2, '0')}</span>
                                    </header>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-fr gap-3">
                                        {category.items.map(name => (
                                            <li key={name} className="flex flex-col items-center justify-center text-center gap-3 min-h-32 rounded-xl bg-background border border-bg-50 p-3 hover:border-skin/50 transition-colors">
                                                <TechnologyLogo name={name} size="large" />
                                                <span className="text-xs sm:text-sm font-medium leading-snug break-words">{name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            );
                        })}
                    </div>
                    <div className="mt-10 p-8 rounded-2xl border border-bg-50 bg-card text-center">
                        <h2 className="text-2xl font-bold mb-3">See the tools in practice</h2>
                        <p className="text-text-secondary mb-5">Explore the project-specific stacks behind my business, finance, education, and AI applications.</p>
                        <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-skin">View projects <ArrowRight size={18} /></Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
