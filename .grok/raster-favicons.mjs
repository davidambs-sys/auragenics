import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { writeFileSync } from 'node:fs';

const svgs = [
  ['a', '/workspace/.grok/favicon-a.svg'],
  ['b', '/workspace/.grok/favicon-b.svg'],
  ['c', '/workspace/.grok/favicon-c.svg'],
  ['current', '/workspace/public/favicon.svg'],
];

const html = `<!doctype html><html><body style="margin:0;background:#7a7a7a;display:flex;gap:16px;padding:12px;align-items:flex-end">
${svgs.map(([name, path]) => {
  const uri = pathToFileURL(path).href;
  return `<div style="text-align:center;color:#fff;font:11px sans-serif">${name}<br>
    <img src="${uri}" width="16" height="16">
    <img src="${uri}" width="32" height="32" style="margin-left:6px">
    <img src="${uri}" width="64" height="64" style="margin-left:6px">
  </div>`;
}).join('')}
</body></html>`;
writeFileSync('/workspace/.grok/favicon-candidates.html', html);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 640, height: 160 }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL('/workspace/.grok/favicon-candidates.html').href);
await page.screenshot({ path: '/workspace/.grok/favicon-candidates.png' });

for (const [name, path] of svgs) {
  const uri = pathToFileURL(path).href;
  await page.setViewportSize({ width: 16, height: 16 });
  await page.setContent(`<html><body style="margin:0"><img src="${uri}" width="16" height="16"></body></html>`);
  await page.screenshot({ path: `/workspace/.grok/fav16-${name}.png` });
  await page.setViewportSize({ width: 32, height: 32 });
  await page.setContent(`<html><body style="margin:0"><img src="${uri}" width="32" height="32"></body></html>`);
  await page.screenshot({ path: `/workspace/.grok/fav32-${name}.png` });
}
await browser.close();
console.log('ok');
