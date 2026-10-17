import { Link } from "@tanstack/react-router";
import { ProductLink } from "@/components/product-link";
import { CATALOG, SITE, productBySlug } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink bg-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <img
            src={SITE.logo}
            alt="AuraGenics"
            className="h-12 w-auto max-w-xs object-contain"
          />
          <p className="mt-3 text-sm italic text-muted">{SITE.masthead}</p>
          <a
            href={SITE.phoneHref}
            className="mt-4 inline-block text-lg font-bold tracking-tight text-ink hover:text-accent"
          >
            {SITE.phone}
          </a>
        </div>
        <div>
          <p className="text-kicker uppercase tracking-kicker text-accent">
            Device
          </p>
          <ul className="mt-4 space-y-2">
            {CATALOG.device.slugs.map((slug) => {
              const p = productBySlug(slug);
              if (!p) return null;
              return (
                <li key={slug}>
                  <ProductLink
                    slug={slug}
                    className="text-sm text-muted hover:text-ink"
                  >
                    {p.title}
                  </ProductLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="text-kicker uppercase tracking-kicker text-accent">
            Hair
          </p>
          <ul className="mt-4 space-y-2">
            {CATALOG.hair.slugs.map((slug) => {
              const p = productBySlug(slug);
              if (!p) return null;
              return (
                <li key={slug}>
                  <ProductLink
                    slug={slug}
                    className="text-sm text-muted hover:text-ink"
                  >
                    {p.title}
                  </ProductLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="text-kicker uppercase tracking-kicker text-accent">
            House
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link to="/products" className="hover:text-ink">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link to="/consulting" className="hover:text-ink">
                Consulting
              </Link>
            </li>
            <li>
              <Link to="/inquire" className="hover:text-ink">
                Inquire
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs leading-relaxed text-faint md:px-8">
          For licensed professionals in the United States. Product information
          is educational and not medical advice. QBio is an FDA-cleared
          topical-use product. Confirm manufacturer labeling. inkOUT® / TEPR®:
          Rejuvatek.
          Revian and other trademarks belong to their owners. © {new Date().getFullYear()}{" "}
          AuraGenics.
        </p>
      </div>
    </footer>
  );
}
