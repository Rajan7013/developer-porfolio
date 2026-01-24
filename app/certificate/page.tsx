'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FileText, Download, Award, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Certificate() {
    const images = [
        { src: 'HCL GUVI Certification.webp', title: 'HCL GUVI Certification' },
        { src: 'HCL GUVI Certification - 7B679r4OX11jMi5767.webp', title: 'HCL GUVI Advanced Certification' },
        { src: 'IMG-20260118-WA0006.jpg.webp', title: 'Course Completion Certificate' },
        { src: '549c83e1-b4d7-4e27-860e-ba48d2a50e6e (1).jpg.webp', title: 'Advanced Tech Certificate' },
    ];

    const pdfs = [
        { src: 'Introduction to Generative AI by IBM .pdf', title: 'IBM Generative AI' },
        { src: 'Python.pdf', title: 'Python Programming' },
        { src: 'Finance using Python.pdf', title: 'Finance with Python' },
        { src: 'Introduction of Digital Marketing By Great Learning.pdf', title: 'Digital Marketing' },
        { src: 'Exce for Begineers  By Davidson.pdf', title: 'Excel for Beginners' },
    ];

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    // Memoize next/prev functions to safely use in useEffect
    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
    }, [images.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    }, [images.length]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, nextImage, prevImage]);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="grow pt-24 pb-16">
                {/* Header */}
                <section className="px-2 sm:px-6 lg:px-8 mb-8 md:mb-16 text-center">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-2 md:mb-4">
                        My <span className="text-skin">Certifications</span>
                    </h1>
                    <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto">
                        Verified credentials in AI, Programming, and Digital Systems.
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">

                    {/* Image Gallery */}
                    <div className="mb-12 md:mb-20">
                        <h2 className="text-xl md:text-3xl font-bold text-text-primary mb-4 md:mb-8 flex items-center gap-2 md:gap-3">
                            <Award className="text-skin w-5 h-5 md:w-6 md:h-6" />
                            <span className="truncate">Official Certificates</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                            {images.map((cert, i) => (
                                <div
                                    key={i}
                                    onClick={() => openLightbox(i)}
                                    className="group relative bg-card rounded-xl md:rounded-2xl overflow-hidden border border-bg-50 shadow-sm hover:shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.4)] hover:border-skin transition-all duration-300 cursor-pointer"
                                >
                                    <div className="relative aspect-4/3 bg-bg-50 overflow-hidden">
                                        <Image
                                            src={`/image/Certificates/${cert.src}`}
                                            alt={cert.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 bg-black/75 text-white text-sm px-4 py-2 rounded-full transition-opacity">
                                                View Full Size
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-2 md:p-4">
                                        <h3 className="font-bold text-text-primary truncate text-sm md:text-base" title={cert.title}>{cert.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PDF List */}
                    <div>
                        <h2 className="text-lg md:text-3xl font-bold text-text-primary mb-3 md:mb-8 flex items-center gap-1.5 md:gap-3">
                            <FileText className="text-skin w-4 h-4 md:w-6 md:h-6" />
                            <span className="truncate">Course Documents & Badges</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                            {pdfs.map((doc, i) => (
                                <Link
                                    key={i}
                                    href={`/image/Certificates/${doc.src}`}
                                    target="_blank"
                                    className="flex items-center justify-between p-2 md:p-5 bg-card border border-bg-50 rounded-lg md:rounded-xl hover:border-skin/50 hover:bg-skin/5 transition-all group"
                                >
                                    <div className="flex items-center gap-1.5 md:gap-4 flex-1 min-w-0">
                                        <div className="p-1 md:p-2.5 bg-bg-50 text-skin rounded-md md:rounded-lg group-hover:bg-skin group-hover:text-white transition-colors shrink-0">
                                            <FileText size={16} className="md:w-5 md:h-5" />
                                        </div>
                                        <span className="font-semibold text-text-primary group-hover:text-skin transition-colors line-clamp-1 text-xs md:text-base">
                                            {doc.title}
                                        </span>
                                    </div>
                                    <Download size={14} className="text-text-secondary group-hover:text-skin ml-1.5 md:ml-4 shrink-0 md:w-[18px] md:h-[18px]" />
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black flex flex-col"
                    onClick={closeLightbox}
                >
                    {/* Top Controls */}
                    <div className="flex justify-end p-4 z-50 shrink-0">
                        <button
                            onClick={closeLightbox}
                            className="text-white/80 hover:text-white bg-white/10 p-2 rounded-full transition-colors backdrop-blur-md"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Main Content Area (Image + Nav) */}
                    <div className="grow relative w-full flex items-center justify-center overflow-hidden">

                        {/* Prev Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 md:left-4 z-50 text-white/50 hover:text-white p-4 hover:bg-white/5 rounded-full transition-all"
                        >
                            <ChevronLeft size={36} />
                        </button>

                        {/* Image Wrapper */}
                        <div
                            className="relative w-full h-full p-2 md:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={`/image/Certificates/${images[lightboxIndex].src}`}
                                alt={images[lightboxIndex].title}
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-2 md:right-4 z-50 text-white/50 hover:text-white p-4 hover:bg-white/5 rounded-full transition-all"
                        >
                            <ChevronRight size={36} />
                        </button>
                    </div>

                    {/* Bottom Caption Bar */}
                    <div className="bg-zinc-900/90 text-white p-4 pb-8 md:pb-6 text-center shrink-0 z-50 backdrop-blur-md border-t border-white/10">
                        <h3 className="font-medium text-base md:text-lg tracking-wide">{images[lightboxIndex].title}</h3>
                        <p className="text-zinc-400 text-xs md:text-sm mt-1 uppercase tracking-widest">{lightboxIndex + 1} / {images.length}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
