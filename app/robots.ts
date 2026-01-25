import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: ['*', 'GPTBot', 'ChatGPT-User', 'Google-Extended', 'Claude-Web', 'CCBot', 'bingbot'],
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://rajan-portfolio-iota.vercel.app/sitemap.xml',
    };
}
