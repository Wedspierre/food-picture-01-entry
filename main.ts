// food-picture-01 entry (Node 22, standard library only).
// The entry is the picture sitting next to this file: entry.png, a
// photorealistic bowl of steaming tonkotsu ramen — chopsticks lifting
// glossy noodles, a jammy soft-boiled egg, chashu pork, spring onions
// and chili oil in warm golden light. This program just delivers those
// exact bytes to the grader's output directory; the judge sees the
// file as-is, nothing is re-encoded or resized.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// The grader's output directory may not exist yet — create it so the
// copy never fails on a missing folder.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`delivered entry.png to ${outDir}`);
