import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A Little Sunshine — one emoji, and nothing else.
// U+1F31E SUN WITH FACE: literal warmth (a smiling sun), universal across
// ages and backgrounds, clearly chosen rather than the default smiley, and
// warm without touch — a hug from a stranger can feel too familiar, while
// a smiling sun gives warmth with no intimacy.
const EMOJI = "\u{1F31E}";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Guard: read the file back and refuse to finish silently if what landed
// on disk is not exactly the one emoji (no newline, no extra bytes).
const written = readFileSync(outPath, "utf8");
if (written !== EMOJI) {
  throw new Error(
    `entry.txt mismatch: expected exactly ${JSON.stringify(EMOJI)}, got ${JSON.stringify(written)}`,
  );
}
if (Buffer.byteLength(written, "utf8") !== 4) {
  throw new Error(`entry.txt must be exactly 4 bytes, got ${Buffer.byteLength(written, "utf8")}`);
}
