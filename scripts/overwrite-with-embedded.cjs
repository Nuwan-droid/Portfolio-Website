const fs = require('fs');
const path = require('path');

const targets = [
  path.join(__dirname, '..', 'public', 'desktop_pc'),
  path.join(__dirname, '..', 'public', 'planet'),
];

for (const dir of targets) {
  const embedded = path.join(dir, 'scene_embedded.gltf');
  const dest = path.join(dir, 'scene.gltf');
  if (!fs.existsSync(embedded)) {
    console.warn('Embedded file missing:', embedded);
    continue;
  }
  fs.copyFileSync(embedded, dest);
  console.log('Overwrote', dest, 'with embedded glTF');
}
