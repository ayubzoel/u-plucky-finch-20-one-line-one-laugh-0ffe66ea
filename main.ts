// One Line, One Laugh — a single funny line, at most 200 characters.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My phone died mid-argument, and honestly, it was the most mature thing either of us has ever done.";

// Gate: the entry must be 1–200 characters of real text, not only whitespace.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote entry.txt (${line.length} characters)`);
