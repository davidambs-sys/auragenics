import { ProductLink } from "@/components/product-link";
import { SiteShell } from "@/components/layout/site-shell";
import { PRODUCT_STORIES } from "@/lib/product-stories";
import { pageHead } from "@/lib/seo";
import { CATALOG, productBySlug, productHref, type Product } from "@/lib/site";

type CatalogKey = keyof typeof CATALOG;

export function catalogHead(key: CatalogKey) {
  const group = CATALOG[key];
  return pageHead({
    title: group.seoTitle,
    description: group.seoDescription,
    path: group.path,
  });
}

export function CatalogPage({ catalogKey }: { catalogKey: CatalogKey }) {
  const group = CATALOG[catalogKey];
  const products = group.slugs
    .map((slug) => productBySlug(slug))
    .filter((p): p is Product => Boolean(p));

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: group.seoTitle,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: productHref(p.slug) ?? `/${p.slug}`,
      description: PRODUCT_STORIES[p.slug]?.seoDescription ?? p.tagline,
    })),
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <section className="border-b border-ink px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            {group.kicker}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl">{group.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{group.dek}</p>
        </div>
      </section>
      <section className="bg-bg">
        <ul className="mx-auto max-w-7xl divide-y divide-line border-b border-line">
          {products.map((p) => {
            const story = PRODUCT_STORIES[p.slug];
            return (
              <li key={p.slug}>
                <ProductLink
                  slug={p.slug}
                  className="group grid gap-6 px-5 py-10 transition-colors hover:bg-surface md:grid-cols-[7rem_1fr_12rem] md:items-center md:px-8"
                >
                  <p className="folio text-accent">{p.folio}</p>
                  <div>
                    <p className="text-kicker uppercase tracking-kicker text-muted">
                      {p.department}
                    </p>
                    <h2 className="mt-2 font-display text-3xl group-hover:text-accent">
                      {p.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                      {story?.seoDescription ?? p.tagline}
                    </p>
                  </div>
                  <p className="text-kicker uppercase tracking-kicker text-accent md:text-right">
                    Open the page
                  </p>
                </ProductLink>
              </li>
            );
          })}
        </ul>
      </section>
    </SiteShell>
  );
}
