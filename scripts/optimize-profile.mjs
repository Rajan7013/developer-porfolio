import sharp from 'sharp';
// Pre-encode the above-the-fold portrait once, avoiding cold image-server conversions.
await Promise.all([400, 640, 960].map(width =>
    sharp('public/image/home-profile.webp')
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 55, effort: 6 })
        .toFile(`public/image/home-profile-${width}.avif`)
));
