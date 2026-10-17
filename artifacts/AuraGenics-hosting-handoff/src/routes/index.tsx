import { createFileRoute, Link } from "@tanstack/react-router";
import { InquireSection } from "@/components/inquire-form";
import { ProductLink } from "@/components/product-link";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { SITE, WILL_NOT, productBySlug, productsInNavOrder } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      title: "AuraGenics | We Are Making Waves for our Customers!",
      description:
        "AuraGraft FUE Hair Transplant System. Junera Subdermal Laser Tissue Remodeling. Quintessence Biologics Exosomes. PhoenixR. Revian Hair Growth System. InkOUT Tattoo Removal.",
      path: "/",
    }),
});

const COVER_LINES = [
  { n: "01", title: "AuraGraft", dek: "FUE Hair Transplant System", slug: "auragraft" },
  { n: "02", title: "inkOUT", dek: "Tattoo Removal", slug: "inkout" },
  { n: "03", title: "QBio", dek: "Quintessence Biologics Exosomes", slug: "exosomes" },
];

function Home() {
  const qbio = productBySlug("exosomes");
  const graft = productBySlug("auragraft");

  return (
    <SiteShell>
      <section className="relative isolate min-h-[calc(100dvh-7rem)] overflow-hidden">
        <img
          src="/images/hero-lab.jpg"
          alt="U.S. manufacturing facility"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative mx-auto flex min-h-[calc(100dvh-7rem)] max-w-7xl flex-col justify-end gap-10 px-5 pb-12 pt-24 md:flex-row md:items-end md:justify-between md:px-8 md:pb-16">
          <div className="max-w-2xl">
            <p className="reveal text-kicker uppercase tracking-kicker text-accent-fg/80">
              {SITE.issue} · {SITE.season}
            </p>
            <h1 className="reveal reveal-2 mt-4 font-display text-5xl leading-[0.92] text-bg">
              We Are Making Waves
              <br />
              <em className="italic">for our Customers!</em>
            </h1>
            <div className="reveal reveal-3 mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gold">
                <Link to="/products">Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-bg text-bg hover:bg-bg hover:text-ink"
              >
                <Link to="/inquire">Inquire</Link>
              </Button>
            </div>
          </div>
          <ol className="reveal reveal-4 hidden w-64 shrink-0 border-l border-bg/30 pl-6 lg:block">
            <li className="mb-4 text-kicker uppercase tracking-kicker text-bg/55">
              On the cover
            </li>
            {COVER_LINES.map((line) => (
              <li key={line.n} className="border-t border-bg/20 py-3">
                <ProductLink slug={line.slug} className="block text-bg">
                  <span className="folio text-accent-2">{line.n}</span>
                  <span className="mt-1 block font-display text-xl leading-tight">
                    {line.title}
                  </span>
                  <span className="mt-1 block text-sm text-bg/65">{line.dek}</span>
                </ProductLink>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {graft ? (
        <section className="border-b border-ink bg-ink text-bg">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <p className="folio text-accent-2">
              {graft.folio} · {graft.department}
            </p>
            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="font-display text-5xl">{graft.title}.</h2>
              <p className="max-w-md text-base leading-relaxed text-bg/75">
                {graft.summary}
              </p>
            </div>
            <img
              src="/images/auragraft.jpg"
              alt={graft.imageAlt}
              className="mt-10 mx-auto max-h-[36rem] w-full object-contain"
            />
            <div className="mt-10">
              <Button asChild variant="gold">
                <ProductLink slug="auragraft">See the platform</ProductLink>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            The floor
          </p>
          <h2 className="mt-3 font-display text-4xl">
            The catalog.
          </h2>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {productsInNavOrder().map((p) => (
              <li key={p.slug}>
                <ProductLink
                  slug={p.slug}
                  className="group grid gap-2 py-6 md:grid-cols-[7rem_1fr_auto] md:items-center"
                >
                  <p className="folio text-accent">{p.folio}</p>
                  <div>
                    <p className="text-kicker uppercase tracking-kicker text-muted">
                      {p.kicker}
                    </p>
                    <h3 className="mt-1 font-display text-2xl group-hover:text-accent">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-kicker uppercase tracking-kicker text-accent">
                    Open
                  </p>
                </ProductLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-ink bg-ink text-bg">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-80">
            <img
              src="/images/lab.jpg"
              alt="Cryogenic vials in a U.S. laboratory"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-24">
            <p className="text-kicker uppercase tracking-kicker text-accent-2">
              QBio
            </p>
            <blockquote className="mt-6 font-display text-3xl italic leading-snug md:text-4xl">
              “QBio. Documented lots. FDA-cleared topical-use
              cosmetics. Not a brochure.”
            </blockquote>
            <p className="mt-8 text-kicker uppercase tracking-kicker text-bg/55">
              United States · Professional use
            </p>
            {qbio?.stats ? (
              <dl className="mt-12 grid grid-cols-2 gap-8">
                {qbio.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl text-bg">{s.value}</dt>
                    <dd className="mt-2 text-xs leading-relaxed text-bg/60">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="gold">
                <ProductLink slug="exosomes">QBio Exosomes</ProductLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink bg-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            The difference
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl">
            Three sentences we will not say.
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {WILL_NOT.map((item, i) => (
              <li key={item.t} className="border-t border-ink pt-5">
                <p className="folio text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InquireSection compact />
    </SiteShell>
  );
}
