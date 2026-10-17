import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductLink } from "@/components/product-link";
import { SiteShell } from "@/components/layout/site-shell";
import { PRODUCT_STORIES } from "@/lib/product-stories";
import { PRODUCTS } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sitemap")({
  component: Sitemap,
  head: () =>
    pageHead({
      title: "Sitemap | AuraGenics USA",
      description:
        "Index of AuraGenics United States pages: QBio exosomes, PhoenixR, AuraGraft FUE, Junera, inkOUT, and Revian.",
      path: "/sitemap",
    }),
});

function Sitemap() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-kicker uppercase tracking-kicker text-accent">
          Index
        </p>
        <h1 className="mt-4 font-display text-5xl">Sitemap.</h1>
        <p className="mt-6 text-muted">
          Unique pages for every line in the catalog.
        </p>

        <h2 className="mt-16 font-display text-3xl">Products</h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {PRODUCTS.map((p) => {
            const story = PRODUCT_STORIES[p.slug];
            return (
              <li key={p.slug} className="py-4">
                <ProductLink
                  slug={p.slug}
                  className="block hover:text-accent"
                >
                  <span className="folio text-accent">{p.folio}</span>
                  <span className="mt-1 block font-display text-xl">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {story?.seoDescription ?? p.tagline}
                  </span>
                </ProductLink>
              </li>
            );
          })}
        </ul>

        <h2 className="mt-16 font-display text-3xl">House</h2>
        <ul className="mt-6 space-y-3 text-muted">
          <li>
            <Link to="/" className="hover:text-ink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/device" className="hover:text-ink">
              Device — AuraGraft, inkOUT, PhoenixR, Revian, Junera
            </Link>
          </li>
          <li>
            <Link to="/hair" className="hover:text-ink">
              Hair — AuraGraft, QBio, Revian
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-ink">
              All products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-ink">
              About
            </Link>
          </li>
          <li>
            <Link to="/consulting" className="hover:text-ink">
              MD Hair Restoration Consulting
            </Link>
          </li>
          <li>
            <Link to="/inquire" className="hover:text-ink">
              Practice inquiry
            </Link>
          </li>
        </ul>
      </section>
    </SiteShell>
  );
}
