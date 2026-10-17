import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductLink } from "@/components/product-link";
import { Button } from "@/components/ui/button";
import { CATALOG, NAV, SITE, productBySlug } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <img
      src={SITE.logo}
      alt="AuraGenics — Inspired by nature, perfected by science"
      className={cn("w-auto object-contain object-center", className)}
    />
  );
}

function catalogForPath(to: string) {
  return Object.values(CATALOG).find((g) => g.path === to);
}

function groupActive(pathname: string, slugs: readonly string[], path: string) {
  return (
    pathname === path ||
    pathname.startsWith(`${path}/`) ||
    slugs.some((slug) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`))
  );
}

function DesktopGroup({
  label,
  to,
  slugs,
  pathname,
}: {
  label: string;
  to: (typeof CATALOG)[keyof typeof CATALOG]["path"];
  slugs: readonly string[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const active = groupActive(pathname, slugs, to);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={to}
        className={cn(
          "text-kicker uppercase tracking-kicker transition-colors",
          active ? "text-accent" : "text-muted hover:text-ink",
        )}
        aria-expanded={open}
      >
        {label}
      </Link>
      {open ? (
        <div className="absolute left-1/2 top-full z-50 min-w-48 -translate-x-1/2 border border-ink bg-bg py-2">
          {slugs.map((slug) => {
            const product = productBySlug(slug);
            if (!product) return null;
            return (
              <ProductLink
                key={slug}
                slug={slug}
                className="block px-4 py-2.5 text-kicker uppercase tracking-kicker text-muted hover:bg-surface hover:text-ink"
              >
                {product.title}
              </ProductLink>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="h-px bg-ink" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2 md:px-8 lg:hidden">
        <Link to="/" className="flex min-h-11 items-center" aria-label="AuraGenics home">
          <Logo className="h-10 max-w-56" />
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="ink">
            <Link to="/inquire">Inquire</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 pt-3">
          <p className="text-kicker uppercase tracking-kicker text-muted">
            We Are Making Waves for our Customers!
          </p>
          <div className="flex items-center gap-5">
            <Button asChild size="sm" variant="ink">
              <Link to="/inquire">Inquire</Link>
            </Button>
          </div>
        </div>
        <Link
          to="/"
          className="mx-auto flex max-w-7xl items-center justify-center px-8 py-3"
          aria-label="AuraGenics home"
        >
          <Logo className="h-16 w-auto max-w-xl" />
        </Link>
      </div>

      <div className="h-px bg-ink" />
      <nav className="hidden lg:block" aria-label="Primary">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-7 px-8 py-2.5">
          {NAV.map((item) => {
            const group = catalogForPath(item.to);
            if (group) {
              return (
                <DesktopGroup
                  key={item.to}
                  label={item.label}
                  to={group.path}
                  slugs={group.slugs}
                  pathname={pathname}
                />
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-kicker uppercase tracking-kicker transition-colors",
                  pathname === item.to ||
                    (item.to !== "/" && pathname.startsWith(item.to))
                    ? "text-accent"
                    : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="h-px bg-ink" />
      </nav>
      {open ? (
        <div className="border-b border-ink bg-bg lg:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {NAV.map((item) => {
              const group = catalogForPath(item.to);
              if (group) {
                return (
                  <div key={item.to} className="border-b border-line">
                    <Link
                      to={item.to}
                      className="flex min-h-12 items-center text-sm uppercase tracking-kicker"
                    >
                      {item.label}
                    </Link>
                    {group.slugs.map((slug) => {
                      const product = productBySlug(slug);
                      if (!product) return null;
                      return (
                        <ProductLink
                          key={slug}
                          slug={slug}
                          className="flex min-h-11 items-center pl-4 text-sm text-muted"
                        >
                          {product.title}
                        </ProductLink>
                      );
                    })}
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-12 items-center border-b border-line text-sm uppercase tracking-kicker"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
