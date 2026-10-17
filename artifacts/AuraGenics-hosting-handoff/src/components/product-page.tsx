import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { InquireSection } from "@/components/inquire-form";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductLink } from "@/components/product-link";
import { Button } from "@/components/ui/button";
import { storyBySlug } from "@/lib/product-stories";
import { pageHead, SEO, absoluteUrl } from "@/lib/seo";
import {
  FDA_LINE,
  PRODUCTS,
  SITE,
  productBySlug,
  productHref,
  type Product,
} from "@/lib/site";

export function productHead(slug: string) {
  const product = productBySlug(slug);
  const story = storyBySlug(slug);
  const title =
    story?.seoTitle ?? (product ? `${product.title} | AuraGenics` : "AuraGenics");
  const description = story?.seoDescription ?? product?.summary ?? "";
  return pageHead({
    title,
    description,
    path: product ? (productHref(product.slug) ?? "/products") : "/products",
    image: product?.image,
  });
}

function JsonLd({ product, story }: { product: Product; story: ReturnType<typeof storyBySlug> }) {
  if (!story) return null;
  const url = absoluteUrl(productHref(product.slug) ?? `/products/${product.slug}`);
  const images = [
    absoluteUrl(product.image),
    ...(product.gallery ?? []).map((g) => absoluteUrl(g.src)),
  ];
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.title,
        description: story.seoDescription,
        brand: { "@type": "Brand", name: "AuraGenics" },
        manufacturer: { "@id": `${SITE.url}/#organization` },
        category: product.department,
        image: images,
        url,
        audience: {
          "@type": "Audience",
          audienceType: "Licensed medical and aesthetic professionals",
          geographicArea: { "@type": "Country", name: SEO.country },
        },
        offers: {
          "@type": "Offer",
          url,
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: SEO.country },
          eligibleRegion: SEO.countryCode,
          category: "Professional use only",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: story.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: absoluteUrl("/products"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.title,
            item: url,
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductPage({ product }: { product: Product }) {
  const story = storyBySlug(product.slug);
  const companion = story?.solo
    ? undefined
    : story?.companionSlug
      ? productBySlug(story.companionSlug)
      : undefined;
  const others = story?.solo
    ? []
    : PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);
  const graft = product.slug === "auragraft";
  const containHero =
    graft || product.slug === "phoenix-r" || product.slug === "inkout";
  const containOnInk = graft || product.slug === "phoenix-r";

  return (
    <SiteShell>
      <JsonLd product={product} story={story} />
      <article>
        <header className="border-b border-ink">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="flex flex-col justify-center px-5 py-14 md:px-10 md:py-24">
              <Link
                to="/products"
                className="mb-8 inline-flex min-h-11 items-center gap-2 text-kicker uppercase tracking-kicker text-muted hover:text-ink"
              >
                <ArrowLeft className="size-3.5" /> Products
              </Link>
              {story?.solo ? null : (
                <p className="folio text-accent">
                  {product.folio} · {product.department} · {product.kicker}
                </p>
              )}
              {product.specimen ? (
                <p className="mt-3 text-kicker uppercase tracking-kicker text-muted">
                  {product.specimen}
                </p>
              ) : null}
              <h1 className="mt-4 max-w-xl font-display text-4xl leading-none text-ink">
                {product.title}.
              </h1>
              {story ? (
                <p className="mt-6 max-w-md font-display text-2xl italic leading-snug text-muted">
                  {story.dek}
                </p>
              ) : null}
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                {story?.lead ?? product.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="ink">
                  <Link to="/inquire" search={{ interest: product.slug }}>
                    Request information
                  </Link>
                </Button>
                {companion ? (
                  <Button asChild size="lg" variant="outline">
                    <ProductLink slug={companion.slug}>
                      {companion.title}
                    </ProductLink>
                  </Button>
                ) : null}
              </div>
            </div>
            <div
              className={
                containHero
                  ? containOnInk
                    ? "relative min-h-80 bg-ink lg:min-h-full"
                    : "relative min-h-80 bg-bg-2 lg:min-h-full"
                  : "relative min-h-80 lg:min-h-full"
              }
            >
              <img
                src={product.image}
                alt={product.imageAlt}
                className={
                  containHero
                    ? "absolute inset-0 size-full object-contain p-6 md:p-10"
                    : "absolute inset-0 size-full object-cover frame"
                }
              />
            </div>
          </div>
        </header>

        {product.stats ? (
          <section className="border-b border-ink bg-ink text-bg">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 md:px-8 md:py-16">
              {product.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl">{s.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-bg/65">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {product.gallery?.length ? (
          <section className="border-b border-ink bg-bg">
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
              <p className="text-kicker uppercase tracking-kicker text-accent">
                {product.title}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {product.gallery.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[4/5] w-full object-cover frame"
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {story ? (
          <section className="bg-bg">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 md:px-8 md:py-28">
              <div className="lg:col-span-5">
                <p className="text-kicker uppercase tracking-kicker text-accent">
                  {story.offeringKicker}
                </p>
                <h2 className="mt-4 font-display text-4xl">
                  {story.offeringTitle}
                  <br />
                  <em className="italic">{story.offeringItalic}</em>
                </h2>
              </div>
              <div className="lg:col-span-7">
                {story.body.map((p, i) => (
                  <p
                    key={p.slice(0, 24)}
                    className={
                      i === 0
                        ? "drop-cap text-lg leading-relaxed text-muted"
                        : "mt-6 text-lg leading-relaxed text-muted"
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-t border-ink bg-bg">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <p className="text-kicker uppercase tracking-kicker text-accent">
              The edit
            </p>
            <ul className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {(story?.edit ?? product.points.map((b) => ({ t: "", b }))).map(
                (item, i) => (
                  <li key={item.t || item.b} className="border-t border-line pt-6">
                    <p className="folio text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    {item.t ? (
                      <h3 className="mt-3 font-display text-2xl">{item.t}</h3>
                    ) : null}
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.b}
                    </p>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {story?.notFor ? (
          <section className="border-y border-ink bg-ink text-bg">
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
              {story.extraImage ? (
                <div className="relative min-h-80">
                  <img
                    src={story.extraImage}
                    alt={story.extraImageAlt ?? ""}
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              ) : null}
              <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-24">
                <p className="text-kicker uppercase tracking-kicker text-accent-2">
                  {story.notForTitle ?? "What we will not claim"}
                </p>
                <h2 className="mt-4 font-display text-4xl">
                  A short list, on purpose.
                </h2>
                <ul className="mt-10 divide-y divide-bg/15 border-y border-bg/15">
                  {story.notFor.map((item) => (
                    <li key={item.t} className="py-5">
                      <h3 className="font-display text-xl">{item.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-bg/70">
                        {item.b}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {story?.faqs.length ? (
          <section className="border-t border-ink bg-bg">
            <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
              <p className="text-kicker uppercase tracking-kicker text-accent">
                Questions for the desk
              </p>
              <h2 className="mt-4 font-display text-4xl">Before you write.</h2>
              <div className="mt-10 divide-y divide-line border-y border-line">
                {story.faqs.map((item) => (
                  <details key={item.q} className="group py-5">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-xl">
                      {item.q}
                      <span className="text-accent group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-y border-line bg-bg-2">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
            <p className="text-kicker uppercase tracking-kicker text-accent">
              Professional notice
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              {product.notice}
            </p>
            <p className="mt-4 max-w-3xl text-xs leading-relaxed text-faint">
              {FDA_LINE}
              {product.source ? (
                <>
                  {" "}
                  Language from {product.source}
                  {product.sourceUrl ? (
                    <>
                      {" "}
                      (
                      <a
                        href={product.sourceUrl}
                        className="underline decoration-line underline-offset-2 hover:text-ink"
                        rel="noreferrer"
                      >
                        manufacturer page
                      </a>
                      ).
                    </>
                  ) : (
                    "."
                  )}
                </>
              ) : null}
            </p>
          </div>
        </section>

        {companion && story ? (
          <section className="bg-bg">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8">
              <div>
                <p className="folio text-accent">
                  {companion.folio} · {companion.department}
                </p>
                <h2 className="mt-4 font-display text-3xl">
                  {story.companionTitle}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {story.companionBody}
                </p>
                <div className="mt-8">
                  <Button asChild variant="ink">
                    <ProductLink slug={companion.slug}>
                      Open {companion.title}
                    </ProductLink>
                  </Button>
                </div>
              </div>
              <img
                src={companion.image}
                alt={companion.imageAlt}
                className="aspect-[4/3] w-full object-cover frame"
              />
            </div>
          </section>
        ) : others.length ? (
          <section className="bg-bg">
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
              <p className="text-kicker uppercase tracking-kicker text-accent">
                Also in the catalog
              </p>
              <div className="mt-8 grid gap-px bg-line sm:grid-cols-3">
                {others.map((p) => (
                  <ProductLink
                    key={p.slug}
                    slug={p.slug}
                    className="bg-bg p-6 hover:bg-surface"
                  >
                    <p className="folio text-accent">
                      {p.folio} · {p.department}
                    </p>
                    <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted">{p.tagline}</p>
                  </ProductLink>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>
      <InquireSection defaultInterest={product.slug} compact />
    </SiteShell>
  );
}
