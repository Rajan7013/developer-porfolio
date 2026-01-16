'use client';

import React from 'react';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background pt-20">
            <Projects />
            <Footer />
        </div>
    );
}
