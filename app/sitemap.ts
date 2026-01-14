import { MetadataRoute } from 'next';
import { portfolioData } from '@/lib/portfolio-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://relentlessgrowth.com'; // Replace with actual domain

    // Static pages
    const staticPages = [
        '',
        '/services',
        '/portfolio',
        '/about',
        '/contact',
        '/consultation',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic portfolio pages
    const portfolioPages = portfolioData.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...portfolioPages];
}
