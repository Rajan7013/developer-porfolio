import React from 'react';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';


import { portfolioData } from '@/lib/portfolio-data';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background pt-20">
            <script
                id="projects-json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Rajan Prasaila Yadav Project Portfolio",
                        "itemListElement": portfolioData.map((project, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "SoftwareApplication",
                                "name": project.title,
                                "description": project.description,
                                "operatingSystem": "Web",
                                "url": project.liveLink || project.githubLink,
                                "creator": { "@type": "Person", "name": "Rajan Prasaila Yadav" }
                            }
                        }))
                    })
                }}
            />
            <main id="main-content"><Projects /></main>
            <Footer />
        </div>
    );
}
