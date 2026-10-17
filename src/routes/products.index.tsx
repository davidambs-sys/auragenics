import { createFileRoute } from "@tanstack/react-router";
import { ProductLink } from "@/components/product-link";
import { SiteShell } from "@/components/layout/site-shell";
import { PRODUCT_STORIES } from "@/lib/product-stories";
import { pageHead } from "@/lib/seo";
import { productHref, productsInNavOrder } from "@/lib/site";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () =>
    pageHead({
      title: "Product Catalog | AuraGenics",
      description:
        "AuraGenics United States catalog: QBio, PhoenixR, AuraGraft FUE, Junera, inkOUT, Revian — licensed practices.",
      path: "/products",
    }),
});

function ProductsIndex() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AuraGenics product catalog",
    itemListElement: productsInNavOrder().map((p, i) => ({
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
            Products
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl">
            The catalog.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            AuraGraft. inkOUT. PhoenixR. Revian. Junera. QBio. Each
            with its own page.
          </p>
        </div>
      </section>
      <section className="bg-bg">
        <ul className="mx-auto max-w-7xl divide-y divide-line border-b border-line">
          {productsInNavOrder().map((p) => {
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
