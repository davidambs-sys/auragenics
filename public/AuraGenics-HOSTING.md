# AuraGenics website — Node 22 live package

**Domain:** auragenics.com  
**Node:** 22  
**Start command:** `npm start`  
**Startup file:** `server/index.mjs`

This folder is a **ready-to-run** production build. Do not upload it as WordPress. Do not drop it in `public_html` as static HTML.

The site is already compiled. On the server you only need Node 22 and `npm start`.

---

## 1. Upload

Upload this entire folder to the hosting account (FTP, File Manager, or Git). Keep the structure:

```
auragenics/
  package.json
  HOSTING.md
  server/
    index.mjs
    …
  public/
    images/
    …
```

---

## 2. InMotion (current host)

DNS is already at InMotion (`ns1.inmotionhosting.com` / `ns2.inmotionhosting.com`). Do the Node app here, not in GoDaddy DNS.

1. cPanel → **Setup Node.js App** (or “Node.js Selector”).
2. **Node.js version:** 22 (or 22.x).
3. **Application mode:** Production.
4. **Application root:** the folder you uploaded (the one that contains `package.json` and `server/`).
5. **Application URL:** auragenics.com (or the subdomain you are testing).
6. **Application startup file:** `server/index.mjs`
7. Create / save. If the panel has **Run NPM Install**, you can skip it — this package has no install step.
8. **Start** the app.

The process must listen on the port InMotion assigns (`PORT`). This build already reads `PORT`.

If the panel asks for:

| Field | Value |
|---|---|
| Start | `npm start` |
| Or | `node server/index.mjs` |

---

## 3. GoDaddy Node.js Hosting (if they use that instead)

1. Web Hosting → Node.js Hosting.
2. Upload this zip, or connect GitHub.
3. Start command: `npm start`
4. Node 22.
5. Attach **auragenics.com** in the domain settings.
6. Then in **GoDaddy DNS** (only after nameservers are GoDaddy, not InMotion) point A / www as they instruct.

If nameservers are still InMotion, **do not** edit GoDaddy DNS — it will not change the live site.

---

## 4. Email — do not break mail

Leave these alone:

- **MX** → `auragenics-com.mail.protection.outlook.com`
- Microsoft 365 TXT / SPF / DKIM

Only change **A** and **www** for the website.

---

## 5. After it starts

Open:

- https://auragenics.com  
- https://auragenics.com/auragraft  
- https://auragenics.com/inquire  

Send one test inquire. Confirm it arrives at the practice desk.

Then submit https://auragenics.com/sitemap.xml in Google Search Console.

---

## Rebuild (only if you change code)

Requires Node 22 in the **source** package, not this live folder:

```bash
npm ci
npm run build:hosting
npm start
```

The live folder you received is already the output of that build.

---

## Do not

- Install WordPress over this  
- Use GoDaddy Website Builder  
- Use domain **forwarding**  
- Rewrite product / FDA copy  
- Delete MX records
