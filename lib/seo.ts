import type { Metadata } from 'next';
export const siteUrl = 'https://rajan-portfolio-iota.vercel.app';
export function pageMetadata(title: string, description: string, path: string): Metadata {
    return {
        title, description,
        alternates: { canonical: `${siteUrl}${path}` },
        openGraph: { title, description, url: `${siteUrl}${path}`, siteName: 'Rajan Portfolio', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rajan Prasaila Yadav — Full Stack AI Developer' }] },
        twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
    };
}
