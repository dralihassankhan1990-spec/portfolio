// Decodes base64 image files (stored as text for GitHub's text-only API)
// into real binary images before the Next.js build.
// Run via the "vercel-build" npm script.
const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'img-manifest.json'), 'utf8')
);

let done = 0;
for (const [name, dest] of Object.entries(manifest)) {
    const b64path = path.join(__dirname, '..', 'assets', 'imgb64', name + '.b64');
    const outpath = path.join(__dirname, '..', dest);
    if (!fs.existsSync(b64path)) {
        console.warn('missing:', b64path);
        continue;
    }
    const buf = Buffer.from(fs.readFileSync(b64path, 'utf8').trim(), 'base64');
    fs.mkdirSync(path.dirname(outpath), { recursive: true });
    fs.writeFileSync(outpath, buf);
    done++;
}
console.log(`decoded ${done}/${Object.keys(manifest).length} images`);
