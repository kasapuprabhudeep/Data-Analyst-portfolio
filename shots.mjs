/* eslint-disable no-console */
/**
 * Visual verification harness — real-viewport, per-section captures.
 *   node shots.mjs [baseURL]
 * Scroll-driven reveals are settled by scrolling like a reader, so every
 * screenshot shows the site exactly as a visitor sees it.
 */
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = process.argv[2] ?? 'http://localhost:4173/';
mkdirSync('shots', { recursive: true });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const SECTIONS = ['home', 'work', 'about', 'experience', 'credentials', 'contact'];

const studio = (page) => ({
  async goto() {
    await page.goto(BASE, { waitUntil: 'networkidle0', timeout: 45000 });
    await page.evaluate(() => document.fonts.ready);
    await wait(1200);
  },
  /** Scroll through the page like a reader so all once-reveals complete. */
  async settle() {
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y <= h; y += innerHeight * 0.8) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
    });
    await wait(1400);
  },
  async toSection(id) {
    await page.evaluate((sid) => {
      const el = document.getElementById(sid);
      if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'instant' });
    }, id);
    await wait(1200);
  },
  async take(name) {
    await page.screenshot({ path: `shots/${name}.png` });
    console.log(`shot: ${name}.png`);
  },
});

const run = async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
  });

  const page = await browser.newPage();
  const S = studio(page);
  page.on('pageerror', (e) => console.log(`[pageerror] ${e?.message}`));

  /* ── 1440 × 900 — every section as the reader sees it ─────── */
  await page.setViewport({ width: 1440, height: 900 });
  await S.goto();
  await S.take('desktop-hero');

  const overflow = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
  }));
  console.log(`overflow probe: scrollW=${overflow.scrollW} clientW=${overflow.clientW}`);

  await S.settle();
  for (const id of SECTIONS.slice(1)) {
    await S.toSection(id);
    await S.take(`desktop-${id}`);
  }

  /* Project case-study dialog */
  const row = await page.waitForSelector('#work button.case-row', { timeout: 8000 }).catch(() => null);
  if (row) {
    await S.toSection('work');
    await row.click();
    await wait(700);
    await S.take('desktop-project-modal');
    await page.keyboard.press('Escape');
  }

  /* Filter interaction */
  await S.toSection('work');
  const filterButtons = await page.$$('#work button.chip');
  if (filterButtons[3]) {
    await filterButtons[3].click();
    await wait(500);
    await S.take('desktop-work-filtered');
    await filterButtons[0].click();
  }

  /* ── 768 × 1024 ───────────────────────────────────────────── */
  await page.setViewport({ width: 768, height: 1024 });
  await S.goto();
  await S.take('tablet-hero');
  await S.settle();
  for (const id of ['work', 'about', 'contact']) {
    await S.toSection(id);
    await S.take(`tablet-${id}`);
  }

  /* ── 390 × 844 ────────────────────────────────────────────── */
  await page.setViewport({ width: 390, height: 844 });
  await S.goto();
  await S.take('phone-hero');
  await S.settle();
  for (const id of ['work', 'experience', 'contact']) {
    await S.toSection(id);
    await S.take(`phone-${id}`);
  }

  const menuBtn = await page.$('button[aria-label="Open menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await wait(800);
    await S.take('phone-menu');
  }

  await browser.close();
  console.log('done');
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
