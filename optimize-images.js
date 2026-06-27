const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'assets', 'img');

async function optimizeImages() {
    try {
        const files = fs.readdirSync(imgDir);
        for (const file of files) {
            if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
                const filePath = path.join(imgDir, file);
                const parsed = path.parse(filePath);
                const outPath = path.join(imgDir, `${parsed.name}.webp`);

                let width = 800; // Default for portraits
                if (file.includes('dashboard')) {
                    width = 1200; // Wider for dashboard
                }

                console.log(`Optimizing ${file} to ${outPath} (width: ${width})...`);
                await sharp(filePath)
                    .resize(width)
                    .webp({ quality: 80 })
                    .toFile(outPath);
                console.log(`Success: ${file}`);
            }
        }
    } catch (e) {
        console.error('Error optimizing images:', e);
    }
}

optimizeImages();
