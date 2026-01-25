'use client';

import React from 'react';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

import Script from 'next/script';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background pt-20">
            <Script
                id="projects-json-ld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Rajan Prasaila Yadav Project Portfolio",
                        "itemListElement": [
                            {
                                "@type": "SoftwareApplication",
                                "name": "EduNexus",
                                "applicationCategory": "EducationalApplication",
                                "operatingSystem": "Web",
                                "url": "https://edu-svcet.vercel.app/",
                                "creator": { "@type": "Person", "name": "Rajan Prasaila Yadav" }
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "Health Assistant AI",
                                "applicationCategory": "MedicalApplication",
                                "operatingSystem": "Web",
                                "url": "https://health-assistant-ai-ashen.vercel.app/",
                                "creator": { "@type": "Person", "name": "Rajan Prasaila Yadav" }
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "Pinnacle Nepal",
                                "applicationCategory": "BusinessApplication",
                                "operatingSystem": "Web",
                                "url": "https://www.pinnaclenepal.org/",
                                "creator": { "@type": "Person", "name": "Rajan Prasaila Yadav" }
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "RupeeRapid",
                                "applicationCategory": "FinanceApplication",
                                "operatingSystem": "Web",
                                "url": "https://rupeerrapid.vercel.app/",
                                "creator": { "@type": "Person", "name": "Rajan Prasaila Yadav" }
                            }
                        ]
                    })
                }}
            />
            <Projects />
            <Footer />
        </div>
    );
}
