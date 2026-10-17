# AuraGenics website — hosting handoff

**Site:** https://auragenics.com  
**Brand:** AuraGenics  
**Type:** Custom professional website (React). Not WordPress. Not plain HTML.

This package is the full site: pages, images, catalog, inquire form, and SEO files.

---

## What this is

A custom React application (TanStack Start, Node.js 22).

It is **not** a folder you upload to `public_html` on shared / cPanel / PHP hosting.

The hosting company needs one of:

- **Vercel**, **Netlify**, or **Cloudflare Pages** (recommended)
- Any host that runs **Node.js 22** and a production Node server
- Their own Git pipeline (`npm install` → `npm run build` → deploy)

If they only offer Apache + PHP + FTP, they cannot host this site as-is. In that case they should either (a) put it on Vercel/Netlify/Cloudflare and only keep DNS at their shop, or (b) say so immediately so we can plan a different publish path.

---

## Files in this package

| Folder / file | What it is |
|---|---|
| `src/` | Pages, catalog, design, inquire form |
| `public/` | Logo, product photos, `robots.txt`, Open Graph image |
| `package.json` | Dependencies and build scripts |
| `package-lock.json` | Locked versions — use this |
| `vite.config.ts` | Build config |
| `tsconfig.json` | TypeScript |

Do not upload `node_modules`. They install on the server.

---

## Build

Requires **Node.js 22**.

```bash
npm ci
npm run build
```

Serve the production build with the host’s Node/SSR adapter. Do not treat this as a static-only marketing zip unless their platform is confirmed to support this stack.

---

## Domain and DNS

Live name: **auragenics.com** (and **www**).

- Point DNS **A / CNAME** at the new host. Do **not** use domain forwarding.
- Leave **MX** and email **TXT** (SPF / DKIM) alone so `moakes@auragenics.com` keeps working.
- After HTTPS is on, confirm `https://auragenics.com` loads this catalog — not an old parked page.

---

## Inquire form

Practice inquiries go to **moakes@auragenics.com**.

The address is **not** printed on the site. Delivery is via FormSubmit. No mail server on the web host is required for the form to work.

After go-live: send one test inquire and confirm it arrives.

---

## Catalog (do not invent pages)

Live products only:

1. AuraGraft  
2. inkOUT  
3. PhoenixR  
4. Revian  
5. Junera  
6. QBio Exosomes  

Each has its own URL. Product language is manufacturer / FDA wording — **do not rewrite** claims.

---

## After it is live

1. Open Device, Hair, Products, About, Inquire, and each product page.  
2. Confirm the footer phone: **1-512-808-3294**.  
3. Submit `https://auragenics.com/sitemap.xml` in Google Search Console.  
4. Keep the old site offline only after this one is confirmed.

---

## Contact for questions on this build

Send questions back to the AuraGenics web project owner. Do not rewrite copy, add products, or change FDA language without written approval.
