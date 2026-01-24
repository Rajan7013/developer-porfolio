'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import CountUp from '@/components/ui/CountUp';
import { Layers, Briefcase, Users, Clock, Headset, ArrowRight, Star, Globe, TrendingUp, Monitor, Smartphone, Video, Search, ShieldCheck, Database, Coins } from 'lucide-react';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background text-text-primary">

        {/* HERO SECTION */}
        {/* HERO SECTION */}
        <HeroSection />

        {/* MICRO TRUST LINE */}
        <section className="py-4 border-b border-bg-50 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-text-secondary font-medium text-lg">Trusted by startups, agencies, and business owners worldwide</p>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-8 bg-background border-b border-bg-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-2 divide-bg-50">
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-skin mb-2">
                  <CountUp end={8} suffix="+" />
                </div>
                <div className="text-text-secondary font-medium">Deployed Projects</div>
              </div>
              <div className="p-4 pl-8">
                <div className="text-xl md:text-2xl font-bold text-skin mb-2 h-12 flex items-center justify-center">
                  1 Paid Client + Academic Systems
                </div>
              </div>
              <div className="p-4 pl-8">
                <div className="text-xl md:text-2xl font-bold text-skin mb-2 h-12 flex items-center justify-center">
                  3rd Year
                </div>
                <div className="text-text-secondary font-medium">CSE Student</div>
              </div>
              <div className="p-4 pl-8">
                <div className="text-xl md:text-2xl font-bold text-skin mb-2 h-12 flex items-center justify-center">
                  24/7
                </div>
                <div className="text-text-secondary font-medium">Learner</div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE STATEMENT */}
        <section className="py-10 bg-card border-b border-bg-50">
          <div className="max-w-content mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Text */}
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.2]">
                  <span className="text-skin">I don’t</span> <span className="text-text-secondary">just build apps —</span> <br />
                  <span className="text-text-primary">I design and deploy complete systems that work in real-world conditions.</span>
                </h2>
                <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-lg">
                  From idea to production, I focus on performance, security, cost, and reliability.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg"><TrendingUp size={18} /></div>
                    <span className="font-semibold text-text-primary text-sm xl:text-base">Performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg"><ShieldCheck size={18} /></div>
                    <span className="font-semibold text-text-primary text-sm xl:text-base">Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-yellow-500/10 text-yellow-600 rounded-lg"><Coins size={18} /></div>
                    <span className="font-semibold text-text-primary text-sm xl:text-base">Cost</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-500/10 text-purple-600 rounded-lg"><Database size={18} /></div>
                    <span className="font-semibold text-text-primary text-sm xl:text-base">Reliability</span>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center lg:-mt-32">
                  {/* Light Mode Image */}
                  <Image
                    src="/image/light.webp"
                    alt="System Architecture - Light"
                    width={492}
                    height={492}
                    className="object-contain w-full h-full dark:hidden rounded-2xl shadow-2xl border border-blue-100"
                  />
                  {/* Dark Mode Image */}
                  <Image
                    src="/image/dark.webp"
                    alt="System Architecture - Dark"
                    width={492}
                    height={492}
                    className="object-contain w-full h-full hidden dark:block rounded-2xl shadow-2xl border border-bg-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-8 bg-background border-b border-bg-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-skin">
                What I Do
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Monitor, title: "Full Stack Web Development", desc: "Fast, scalable websites focused on conversion and performance." },
                { icon: Layers, title: "AI App Integration", desc: "Intelligent features for modern applications." },
                { icon: Smartphone, title: "PWA & Offline Systems", desc: "Web apps that work reliably without internet." },
                { icon: Search, title: "SEO-Ready Website Deployment", desc: "Built for visibility and organic traffic ease." },
                { icon: Users, title: "Admin Panels & Role-Based Systems", desc: "Secure implementation for complex user hierarchies." },
              ].map((service, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-bg-50 hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.4)] hover:border-skin hover:-translate-y-1 transition-all duration-300 group">
                  <div className="mb-4 inline-block p-3 bg-skin/10 rounded-xl text-skin group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-6">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONAL BRAND STATEMENT */}
        <section className="py-8 bg-card relative overflow-hidden border-b border-bg-50">
          {/* Decorative background vibe */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-skin/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-skin/5 rounded-full blur-3xl"></div>

          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-sm md:text-base font-bold text-skin mb-3 uppercase tracking-widest">My Philosophy</h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-text-primary">
              I build digital products that work in the real world — <span className="text-text-secondary">not just look good on a screen.</span>
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              I started by solving my own problems and learning through real projects.
              <br className="hidden md:block" />
              Today, I focus on building full systems — from design and database to deployment — that are reliable, fast, and practical.
            </p>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section className="py-8 bg-background border-b border-bg-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-title text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Selected Projects</h2>
              <p className="text-text-secondary">Real revenue-generating results, not just code.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Using placeholders or your existing projects logic - keeping it static for strictly following copy */}
              {[
                { title: "Consultancy Platform", res: "Comprehensive data flow management", bg: "bg-blue-900/10", tag: "Live Demo" },
                { title: "Health Assistant AI", res: "Intelligent user support insights", bg: "bg-green-900/10", tag: "AI System" },
                { title: "School Management", res: "Streamlined admin operations", bg: "bg-purple-900/10", tag: "Academic Project" }
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden border border-bg-50 group hover:shadow-2xl transition-all relative`}>
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded text-skin shadow-sm z-10 border border-skin/10">
                    {item.tag}
                  </span>
                  <div className={`h-40 ${item.bg} flex items-center justify-center text-skin/20`}>
                    <Globe size={48} />
                  </div>
                  <div className="p-5 bg-card">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-skin font-medium text-sm">
                      <ArrowRight size={14} />
                      <span>{item.res}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-text-primary hover:text-skin transition-colors">
                View All Projects <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CLIENT VOICE */}
        <section className="py-8 bg-card/30 border-b border-bg-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-6 text-skin flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" size={24} />)}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
              &quot;Rajan is not just a developer — he understands the problem deeply. The quality and performance of our academic platform improved significantly.&quot;
            </blockquote>
            <cite className="not-italic">
              <div className="font-bold text-text-primary text-lg">Academic Project Mentor</div>
              <div className="text-text-secondary">University Project Guide</div>
            </cite>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-text-primary">
              Let’s build something <span className="text-skin">real</span> together.
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              I’m looking for opportunities to apply my skills, learn from experienced teams, and ship real products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/projects" className="px-8 py-3.5 rounded-full font-bold border-2 border-skin text-skin hover:bg-skin hover:text-white transition-all">
                View My Work
              </Link>
              <Link href="/contact" className="px-8 py-3.5 rounded-full font-bold bg-skin text-white hover:opacity-90 transition-all shadow-lg shadow-skin/25">
                Contact Me
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

