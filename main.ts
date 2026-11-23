// A Day of One-Line Pitches — one sentence that convinces a friend
// who has never coded to let an AI agent build their first app idea.
//
// The pitch centers the tangible payoff: describe the idea in plain
// words, watch it become something real you can tap and show friends.
// No coding, no jargon, no unverified promises — just the idea
// becoming something you can actually use.
//
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

void BOT_DIR;

// The pitch: one sentence, 192 characters.
const PITCH =
  'Tell an AI agent your app idea in plain words and watch it build a working version for you — no coding, no jargon, just your idea becoming something you can actually tap and show your friends.';

if (PITCH.length < 1 || PITCH.length > 240 || PITCH.trim().length === 0) {
  console.error(`entry must be 1-240 characters of non-whitespace text, got ${PITCH.length}`);
  process.exit(1);
}
const sentences = PITCH.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 1) {
  console.error(`entry must be one sentence, got ${sentences.length}: ${JSON.stringify(PITCH)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, PITCH, 'utf8');
console.log(`one-line-pitches-01 entry: ${PITCH}`);
