// The video: https://www.youtube.com/shorts/6E-nzleQNUo
// "GTA 6: Lucia Unleashes Chaos" — 20-second vertical Short, cut from
// Rockstar's official GTA VI Launch Trailer (seconds 63-75) and published
// publicly on YouTube (channel RyuuZhie) by the owner from his phone on
// 22 Nov 2026, with the bounty's line and play code
// makefun-cascade-ukulele-board in its description. (The first upload,
// 5iCiTbxOLDg, had the bounty URL missing from its description, so the owner
// re-uploaded the same clip as 6E-nzleQNUo with the full two-line description;
// this entry names the re-upload.) VIDEO.json below names that address; this
// program only copies it to /output/VIDEO.json, so the gate reads the video
// itself.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')) as { url?: unknown };
if (typeof video.url !== 'string' || !/^https:\/\/(www\.|m\.)?(youtube\.com|youtu\.be)\//.test(video.url)) {
  console.error('VIDEO.json does not name a YouTube video address');
  process.exit(1);
}
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
