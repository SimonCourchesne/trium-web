#!/usr/bin/env node

import process from "node:process";

const baseUrl = process.env.PRIVACY_PDF_BASE_URL ?? "http://localhost:3000";
const outputDir = process.env.PRIVACY_PDF_OUTPUT_DIR ?? new URL("../public/", import.meta.url).pathname;

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("This generator requires Playwright.");
  console.error("Install it with `npm install -D playwright`, then run `npx playwright install chromium`.");
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });

try {
  for (const lang of ["en", "fr"]) {
    const page = await browser.newPage({
      viewport: { width: 1400, height: 1800 },
      deviceScaleFactor: 2,
    });

    await page.goto(`${baseUrl}/privacy`, { waitUntil: "networkidle" });

    if (lang === "fr") {
      await page.getByRole("button", { name: "FR" }).click();
      await page.waitForTimeout(400);
    }

    await page.emulateMedia({ media: "print" });
    await page.pdf({
      path: `${outputDir}privacy-policy-${lang}.pdf`,
      format: "Letter",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0.45in",
        right: "0.45in",
        bottom: "0.45in",
        left: "0.45in",
      },
    });

    await page.close();
    console.log(`Generated privacy-policy-${lang}.pdf`);
  }
} finally {
  await browser.close();
}
