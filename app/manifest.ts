import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Rajan',
        short_name: 'Rajan',
        description: 'Full Stack AI Developer and System Designer building real-world production systems.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
            {
                src: '/icons/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
