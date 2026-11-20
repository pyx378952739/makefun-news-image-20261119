// news-image-20261119 entry: the image is entry.png beside this file, and this
// program copies it to the grader's output directory. Node 22, standard library
// only. Deterministic: every run writes the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) throw new Error('entry.png missing beside main.ts');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
