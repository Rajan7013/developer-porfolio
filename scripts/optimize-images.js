const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// CONFIGURATION
const INPUT_DIR = path.join(__dirname, '../public/images/services/raw');
const OUTPUT_DIR = path.join(__dirname, '../public/images/services');
const SIZE = 800; // 1:1 Ratio, 800x800px

// Ensure directories exist
if (!fs.existsSync(INPUT_DIR)) {
    fs.mkdirSync(INPUT_DIR, { recursive: true });
    console.log(`Created input directory: ${INPUT_DIR}`);
    console.log("PLEASE PLACE YOUR GENERATED IMAGES HERE WITH NAMES LIKE 'web.png', 'mobile.png', etc.");
}
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Map user filenames to project standard names
const FILE_MAP = {
    'web': 'service-web-dev',
    'mobile': 'service-mobile-app',
    'ui': 'service-ui-ux',
    'ai': 'service-ai-integration',
    'data': 'service-data-analytics',
    'media': 'service-digital-media',
    'security': 'service-security',
    'cloud': 'service-cloud-devops'
};

async function processImages() {
    const files = fs.readdirSync(INPUT_DIR);

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const namePart = file.split('.')[0].toLowerCase();
            const projectFileName = FILE_MAP[Object.keys(FILE_MAP).find(k => namePart.includes(k))] || namePart;

            console.log(`Processing: ${file} -> ${projectFileName}`);

            // 1. Convert to AVIF (Modern, ultra-small)
            await sharp(path.join(INPUT_DIR, file))
                .resize(SIZE, SIZE, { fit: 'cover' })
                .sharpen() // Enhance details
                .avif({ quality: 60 }) // Aggressive compression
                .toFile(path.join(OUTPUT_DIR, `${projectFileName}.avif`));

            console.log(`  - Saved ${projectFileName}.avif`);

            // 2. Convert to WebP (Compatibility)
            await sharp(path.join(INPUT_DIR, file))
                .resize(SIZE, SIZE, { fit: 'cover' })
                .sharpen() // Enhance details
                .webp({ quality: 75 })
                .toFile(path.join(OUTPUT_DIR, `${projectFileName}.webp`));

            console.log(`  - Saved ${projectFileName}.webp`);
        }
    }
    console.log("✅ All images processed!");
}

processImages().catch(console.error);
