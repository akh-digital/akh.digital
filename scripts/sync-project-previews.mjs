import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import path from 'node:path';

const contentRoot = path.resolve('src/content/projects');
const publicRoot = path.resolve('public/projects');

const projectDirs = readdirSync(contentRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

for (const projectDir of projectDirs) {
  const projectContentDir = path.join(contentRoot, projectDir);
  const projectPublicDir = path.join(publicRoot, projectDir);
  const case1Files = readdirSync(projectContentDir)
    .filter((file) => /case-1@2x\.webp$/.test(file))
    .sort();

  if (!case1Files.length) continue;

  mkdirSync(projectPublicDir, { recursive: true });

  for (const filename of case1Files) {
    const src = path.join(projectContentDir, filename);
    const dst = path.join(projectPublicDir, filename);

    if (existsSync(src)) {
      cpSync(src, dst, { force: true, recursive: false });
    }
  }
}
