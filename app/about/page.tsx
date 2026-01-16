'use client';

import React from 'react';
import Link from 'next/link';
import SkillList from '@/components/SkillList';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';

export default function About() {
    const personalInfo = [
        { label: 'Age', value: '21' },
        { label: 'Website', value: 'https://ajit-prasad-portfolio.vercel.app' },
        { label: 'Email', value: 'rajanprasaila@gmail.com' },
        { label: 'Degree', value: 'BCA' },
        { label: 'Phone', value: '+91 00000 00000' },
        { label: 'City', value: 'Kolkata India' },
        { label: 'Freelance', value: 'Available' },
    ];

    const skills = [
        { category: 'Graphic Design', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Indesign', 'Adobe Lightroom', 'Canva'] },
        { category: 'Motion Graphic & Video Editing', items: ['After Effects', 'Premier Pro', 'Audition', 'Da Vinci Resolve', 'Final Cut Pro', 'Filmora'] },
        { category: 'UI / UX Design', items: ['Figma', 'Adobe XD', 'Prototyping', 'User research', 'Information architecture', 'App Design', 'Web Design'] },
        { category: 'Front End Web Developer', items: ['Html', 'Css', 'Javascript', 'Bootstrap', 'Tailwind', 'Jquery', 'React Js'] },
        { category: 'Cloud Computing', items: ['Google Cloud Platform'] },
        { category: 'Programming', items: ['C Language', 'Python', 'Java', 'Sql', 'Operating System', 'Oops'] },
        { category: 'Tools & Technology', items: ['Git & Github', 'Google Workspace', 'Ms Office'] }
    ];

    return (
        <div className="min-h-screen bg-background pt-20">
            <section id="about" className="section pt-8 pb-12 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Section Title */}
                    <div className="section-title text-center mb-16">
                        <h2 className="text-3xl font-bold text-text-primary relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-skin">
                            About Me
                        </h2>
                    </div>

                    {/* Bio & Content */}
                    <div className="max-w-4xl mx-auto space-y-6 mb-12">
                        <h3 className="text-2xl font-semibold text-text-primary">
                            I'm Rajan Prasaila Yadav & I am a <span className="text-skin">Designer & Developer</span>
                        </h3>
                        <p className="text-text-secondary leading-7">
                            Hello! I'm Rajan Prasaila Yadav, a passionate UI / UX designer and Web developer.
                            My journey in design and development is driven by a love for creating intuitive and engaging user experiences.
                            With a strong foundation in design principles and a keen eye for detail, I strive to craft interfaces that are not only visually appealing but also highly functional.
                        </p>
                    </div>

                    {/* Split Layout: Personal Info & Skills */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Left: Personal Info */}
                        <div>
                            <div className="grid grid-cols-1 gap-y-4">
                                {personalInfo.map((item, idx) => (
                                    <div key={idx} className="flex border-b border-bg-50 pb-2">
                                        <span className="font-semibold text-text-primary min-w-[120px]">{item.label} :</span>
                                        <span className="text-text-secondary">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-8">
                                <Link href="/contact" className="px-8 py-3 bg-skin text-white rounded-full font-semibold hover:opacity-90 transition-opacity inline-block shadow-lg">
                                    Contact Me
                                </Link>
                            </div>
                        </div>

                        {/* Right: Skills Accordion */}
                        <div>
                            <SkillList skills={skills} />
                        </div>
                    </div>

                    {/* Timelines Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Education */}
                        <Timeline
                            title="Education"
                            items={[
                                { date: "2025 - 2027", title: "Masters Of Computer Application", description: "SRM Institute Of Science And Technology, Chennai" },
                                { date: "2022 - 2025", title: "Bachelor Of Computer Application", description: "Techno India Hooghly Campus" },
                                { date: "2022 - 2023", title: "Arena Certified Expert In Motion Graphics", description: "Arena Animation" },
                                { date: "2020 - 2022", title: "Higher Secondary - ISC", description: "Dreamland High School" },
                                { date: "2020", title: "Matriculation - ICSE", description: "St Mary School" }
                            ]}
                        />

                        {/* Experience */}
                        <Timeline
                            title="Experience"
                            items={[
                                { date: "2024 - Working", title: "Instructor on Udemy & Youtuber", description: "Worked as an Instructor and Course Creator on Udemy, as well as a YouTuber, teaching over 1 Million students worldwide." },
                                { date: "2022 - Working", title: "Freelance", description: "Worked as a Freelancer at Fiverr & for Offline Clients National and International Delivered 150+ Projects" },
                                { date: "2021 - Working", title: "Tech Youtuber", description: "Worked as a Tech Youtuber @TechworldAjit with 45,000+ Subscribers" },
                                { date: "2019 - Working", title: "Graphic Designer & Video Editor", description: "Worked for Adhyatmik Bhajan with 1,00,000+ Subscribers on Youtube" }
                            ]}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}