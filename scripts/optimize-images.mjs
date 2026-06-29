import sharp from "sharp";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, extname, basename } from "node:path";

const PUBLIC_DIR = join(process.cwd(), "public");

const TARGETS = [
  { src: "matrix-bg.jpg", out: "matrix-bg.webp", quality: 70 },
  { src: "quito-stockity.png", out: "quito-stockity.webp", quality: 80 },
  { src: "quito-stockity-chair.png", out: "quito-stockity-chair.webp", quality: 80 },
  { src: "quito-chair.png", out: "quito-chair.webp", quality: 80 },
  { src: "candles-bg.jpg", out: "candles-bg.webp", quality: 70 },
  { src: "depoimento-1.png", out: "depoimento-1.webp", quality: 75 },
  { src: "depoimento-2.png", out: "depoimento-2.webp", quality: 75 },
  { src: "logo.png", out: "logo.webp", quality: 80 },
];

async function optimize() {
  console.log("Otimizando imagens para WebP...\n");
  let totalOriginal = 0;
  let totalWebp = 0;
  for (const t of TARGETS) {
    const srcPath = join(PUBLIC_DIR, t.src);
    const outPath = join(PUBLIC_DIR, t.out);
    if (!existsSync(srcPath)) {
      console.log(`  SKIP ${t.src} (nao encontrado)`);
      continue;
    }
    const original = await readFile(srcPath);
    const webp = await sharp(original).webp({ quality: t.quality }).toBuffer();
    await writeFile(outPath, webp);
    totalOriginal += original.length;
    totalWebp += webp.length;
    const reduction = ((1 - webp.length / original.length) * 100).toFixed(0);
    console.log(`  ${t.src} -> ${t.out}: ${(original.length / 1024).toFixed(0)} KB -> ${(webp.length / 1024).toFixed(0)} KB (-${reduction}%)`);
  }
  console.log(`\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB -> ${(totalWebp / 1024 / 1024).toFixed(2)} MB`);
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});