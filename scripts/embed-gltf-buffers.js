import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function embedBuffer(dir) {
  const gltfPath = path.join(dir, 'scene.gltf');
  const binPath = path.join(dir, 'scene.bin');
  if (!fs.existsSync(gltfPath) || !fs.existsSync(binPath)) {
    console.warn('Missing files in', dir);
    return;
  }

  const gltf = JSON.parse(fs.readFileSync(gltfPath, 'utf8'));
  const bin = fs.readFileSync(binPath);
  const b64 = bin.toString('base64');

  if (!gltf.buffers || !gltf.buffers[0]) {
    console.warn('No buffers found in', gltfPath);
    return;
  }

  gltf.buffers[0].uri = `data:application/octet-stream;base64,${b64}`;

  const outPath = path.join(dir, 'scene_embedded.gltf');
  fs.writeFileSync(outPath, JSON.stringify(gltf));
  console.log('Wrote', outPath);
}

const targets = [
  path.join(__dirname, '..', 'public', 'desktop_pc'),
  path.join(__dirname, '..', 'public', 'planet'),
];

for (const t of targets) {
  try {
    embedBuffer(t);
  } catch (e) {
    console.error('Failed for', t, e);
  }
}
