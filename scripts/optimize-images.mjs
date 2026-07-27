/**
 * One-shot image optimizer.
 *
 * 1. Finds every .webp in public/images that is actually PNG/JPEG bytes with a
 *    .webp extension (the repo has ~38 of these) and re-encodes it as real
 *    WebP in place — same filename, so no code changes needed.
 * 2. Re-encodes the oversized hero/landing PNGs to real WebP alongside the
 *    original (hero_new_1.png -> hero_new_1.webp) so code can switch to them.
 *
 * Originals of converted heroes are kept; the fake-webp files are replaced
 * (their "original" is the identical .png sitting next to them).
 *
 * Run: node scripts/optimize-images.mjs
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { join, extname } from 'path'
import sharp from 'sharp'

const IMAGES = 'public/images'
const MAX_WIDTH = 1920 // nothing on the site renders wider than this
const QUALITY = 80

const isRealWebp = (buf) =>
  buf.length > 12 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP'

let saved = 0
let converted = 0

// ── 1. Fix fake .webp files in place ────────────────────────────────
for (const name of readdirSync(IMAGES)) {
  if (extname(name).toLowerCase() !== '.webp') continue
  const path = join(IMAGES, name)
  const buf = readFileSync(path)
  if (isRealWebp(buf)) continue

  const before = buf.length
  const out = await sharp(buf)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer()
  writeFileSync(path, out)
  converted++
  saved += before - out.length
  console.log(`fixed fake webp: ${name}  ${(before / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB`)
}

// ── 2. WebP versions of the heavy hero/landing PNGs ─────────────────
const HEAVY_PNGS = [
  'hero_new_1.png',
  'hero_new_2.png',
  'hero_new_3.png',
  'school-tutoring-hero.png',
  'ai_marketing_illustration.png',
  'job_placement_illustration.png',
  'digital_marketing_overview.png',
  'digital_marketing_v2.png',
  'cybersecurity_v2.png',
]
for (const name of HEAVY_PNGS) {
  const src = join(IMAGES, name)
  let before
  try { before = statSync(src).size } catch { continue }
  const dest = src.replace(/\.png$/, '.webp')
  const out = await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer()
  writeFileSync(dest, out)
  converted++
  saved += before - out.length
  console.log(`hero/landing: ${name}  ${(before / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB webp`)
}

console.log(`\n${converted} files processed, ${(saved / 1024 / 1024).toFixed(1)} MB saved`)
