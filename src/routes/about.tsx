import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ProductLink } from "@/components/product-link";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { ABOUT, FAQS, SITE, productHref } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageHead({
      title: "About AuraGenics",
      description:
        "AuraGenics was established as a strategic partner to support emerging medical technology manufacturers and aesthetic and regenerative medicine physicians in navigating competitive markets. Our mission is to introduce innovative, “game-changing” products and services that redefine industry standards.",
      path: "/about",
    }),
});

function HouseLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  if (href === "/products") {
    return (
      <Link to="/products" className={className}>
        {children}
      </Link>
    );
  }
  if (href === "/consulting") {
    return (
      <Link to="/consulting" className={className}>
        {children}
      </Link>
    );
  }
  if (href === "/lookbook") {
    return (
      <Link to="/lookbook" className={className}>
        {children}
      </Link>
    );
  }
  if (href === "/laboratory") {
    return (
      <Link to="/laboratory" className={className}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("/products/")) {
    const slug = href.replace("/products/", "");
    return (
      <ProductLink slug={slug} className={className}>
        {children}
      </ProductLink>
    );
  }
  const productSlug = href.replace(/^\//, "");
  if (productHref(productSlug)) {
    return (
      <ProductLink slug={productSlug} className={className}>
        {children}
      </ProductLink>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function About() {
  return (
    <SiteShell>
      <section className="border-b border-ink">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-24">
            <p className="text-kicker uppercase tracking-kicker text-accent">
              The house
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-none">
              About AuraGenics
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{ABOUT.dek}</p>
            <img
              src={SITE.logo}
              alt="AuraGenics — Inspired by nature, perfected by science"
              className="mt-10 h-12 w-auto max-w-xs object-contain"
            />
          </div>
          <img
            src="/images/hero-lab.jpg"
            alt="U.S. manufacturing facility"
            className="h-72 w-full object-cover md:h-full frame"
          />
        </div>
      </section>

      <section className="border-b border-ink bg-ink text-bg">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {ABOUT.facts.map((f) => (
            <div key={f.label}>
              <p className="font-display text-4xl">{f.value}</p>
              <p className="mt-2 text-sm text-bg/65">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-ink bg-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            Devices · Products · MD Hair Coach
          </p>
          <ul className="mt-10 grid gap-px bg-ink md:grid-cols-3">
            {ABOUT.houses.map((h) => (
              <li key={h.folio} className="bg-bg p-6 md:p-8">
                <p className="folio text-accent">
                  {h.folio} · {h.place}
                </p>
                <h2 className="mt-4 font-display text-3xl">{h.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{h.body}</p>
                <HouseLink
                  href={h.href}
                  className="mt-6 inline-flex min-h-11 items-center text-kicker uppercase tracking-kicker text-accent hover:text-ink"
                >
                  {h.label}
                </HouseLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        {ABOUT.body.map((p, i) => (
          <p
            key={p.slice(0, 24)}
            className={`mb-6 text-lg leading-relaxed text-muted ${i === 0 ? "drop-cap" : ""}`}
          >
            {p}
          </p>
        ))}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="ink">
            <Link to="/inquire">Talk to the desk</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/products">Products</Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-ink bg-bg-2">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            For the record
          </p>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {FAQS.map((item) => (
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
    </SiteShell>
  );
}
