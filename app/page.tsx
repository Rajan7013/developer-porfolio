'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TypingAnimation from '@/components/TypingAnimation';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section id="home" className="section flex items-center min-h-screen pt-8 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-3xl font-bold text-text-primary">
                  Hi, I am <span className="text-3xl font-bold text-skin ml-2">Rajan Prasaila Yadav</span>
                </h3>
                <h3 className="text-3xl font-bold text-text-primary flex items-center gap-2">
                  I'm a <TypingAnimation />
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg max-w-xl">
                  I'm a Google Certified Designer with extensive experience for over 6 years.
                  My Expertise is to Design & Develop Software, Graphics Design, Video Editing and many more...
                </p>
                <div className="flex gap-4 pt-4">
                  <Link href="/contact" className="px-8 py-3 bg-skin text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg">
                    Hire Me
                  </Link>
                  <a href="https://drive.google.com/drive/folders/1jCWqn8vjORThrPvIRkcO2VTpYz7UJMPb?usp=sharing" target="_blank" className="px-8 py-3 bg-transparent border border-skin text-skin rounded-full font-semibold hover:bg-skin hover:text-white transition-all shadow-lg">
                    Download CV
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 flex justify-center relative">
                <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">

                  <Image
                    src="/images/home-profile.png"
                    alt="Rajan Prasaila Yadav"
                    fill
                    className="object-contain drop-shadow-2xl relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
