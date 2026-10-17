import { PRODUCTS, PRODUCT_PATHS, SITE, productHref } from "@/lib/site";

export const SEO = {
  locale: "en-US",
  ogLocale: "en_US",
  countryCode: "US",
  country: "United States",
  market:
    "Sold to licensed medical and aesthetic professionals across the United States.",
  defaultImage: "/og.jpg",
} as const;

export function absoluteUrl(path = "/") {
  const origin = SITE.url.replace(/\/$/, "");
  if (!path || path === "/") return origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function crawlPaths() {
  return [
    "/",
    "/device",
    "/hair",
    "/products",
    ...PRODUCTS.map((p) => productHref(p.slug) ?? `/${p.slug}`),
    "/about",
    "/consulting",
    "/sitemap",
  ];
}

export function withUsMarket(description: string) {
  if (/united states|\bu\.s\.\b|\busa\b|nationwide/i.test(description)) {
    return description;
  }
  const trimmed = description.replace(/\s+$/, "").replace(/\.$/, "");
  return `${trimmed}. ${SEO.market}`;
}

export function pageHead({
  title,
  description,
  path,
  index = true,
  image,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  image?: string;
}) {
  const desc = withUsMarket(description);
  const canonical = absoluteUrl(path.startsWith("/") ? path : `/${path}`);
  const ogImage = absoluteUrl(image ?? SEO.defaultImage);
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      {
        name: "robots",
        content: index
          ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
          : "noindex,follow",
      },
      { name: "language", content: SEO.locale },
      { name: "content-language", content: SEO.locale },
      { name: "geo.region", content: SEO.countryCode },
      { name: "geo.placename", content: SEO.country },
      { property: "og:locale", content: SEO.ogLocale },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: path === "/" ? "website" : "article" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", href: canonical, hrefLang: SEO.locale },
      { rel: "alternate", href: canonical, hrefLang: "x-default" },
    ],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "MedicalBusiness"],
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        legalName: "AuraGenics",
        url: SITE.url,
        logo: absoluteUrl(SITE.logo),
        image: absoluteUrl(SITE.logo),
        description: withUsMarket(SITE.description),
        telephone: SITE.phone,
        address: {
          "@type": "PostalAddress",
          addressCountry: SEO.countryCode,
        },
        areaServed: {
          "@type": "Country",
          name: SEO.country,
        },
        availableLanguage: "English",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          contactType: "sales",
          areaServed: SEO.countryCode,
          availableLanguage: "English",
        },
        audience: {
          "@type": "Audience",
          audienceType: "Licensed medical and aesthetic professionals",
          geographicArea: { "@type": "Country", name: SEO.country },
        },
        knowsAbout: [
          "AuraGraft FUE hair transplant system",
          "Junera subdermal laser tissue remodeling",
          "inkOUT tattoo removal",
          "PhoenixR nanocrystal transdermal beauty device",
          "QBio exosomes",
          "Revian LED hair growth system",
          "hair restoration devices",
          "aesthetic medical devices",
        ],
        brand: { "@type": "Brand", name: "AuraGenics" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: SEO.locale,
        publisher: { "@id": `${SITE.url}/#organization` },
        description: withUsMarket(SITE.description),
      },
    ],
  };
}

export function sitemapXml(origin: string) {
  const base = (origin || SITE.url).replace(/\/$/, "");
  const lastmod = "2026-09-14";
  const urls = crawlPaths()
    .map((path) => {
      const loc = `${base}${path === "/" ? "/" : path}`;
      const productPaths = new Set(Object.values(PRODUCT_PATHS));
      const priority =
        path === "/"
          ? "1.0"
          : productPaths.has(path as (typeof PRODUCT_PATHS)[keyof typeof PRODUCT_PATHS])
            ? "0.9"
            : path === "/products" || path === "/about" || path === "/device" || path === "/hair"
              ? "0.8"
              : "0.6";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-US" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
