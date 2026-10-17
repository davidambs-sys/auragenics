import { createFileRoute, Link } from "@tanstack/react-router";
import { InquireSection } from "@/components/inquire-form";
import { ProductLink } from "@/components/product-link";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { productBySlug } from "@/lib/site";
import { pageHead } from "@/lib/seo";

const ITEMS = [
  {
    t: "Device Selection",
    b: "Guidance on choosing the right system for your practice, patient demographics, and treatment philosophy.",
  },
  {
    t: "Clinical Protocol Development",
    b: "Custom protocols that combine device parameters with topicals, growth factors, or regenerative therapies for optimized outcomes.",
  },
  {
    t: "Integration Strategy",
    b: "Hands-on help introducing devices into your patient flow, including staff training, treatment positioning, and pre/post-care instructions.",
  },
  {
    t: "Business Modeling",
    b: "ROI projections, pricing structures, and marketing strategies tailored to your specific business goals and patient base.",
  },
  {
    t: "Ongoing Support",
    b: "Continued clinical and commercial support as technologies evolve and your needs grow.",
  },
];

const BODY = [
  "Whether you're just entering the hair restoration space or looking to expand your current offerings, our consulting services are designed to help physicians, med spas, and aesthetic clinics confidently adopt and integrate advanced hair restoration technologies into their practice.",
  "We work with the hair systems on this site: AuraGraft FUE, Revian LED, and QBio topical cosmetics — plus practice setup around them.",
];

const FAQS = [
  {
    q: "Is this product training or a department plan?",
    a: "Both, on purpose. Device in-service without a Tuesday plan is just a crate. A plan without hardware is a PDF. We do the sequence.",
  },
  {
    q: "Do we have to buy AuraGraft to consult?",
    a: "No. Some practices should not operate. We will say that. Others already operate and need imaging, a cleared cap, and honest topical language.",
  },
  {
    q: "Who is in the room?",
    a: "Licensed hair-restoration and plastic-surgery practices, and medical spas standing up a supervised hair bay. Not consumers. Not a weekend course sold to the internet.",
  },
];

const RELATED = ["auragraft", "revian", "exosomes"] as const;

export const Route = createFileRoute("/consulting")({
  component: Consulting,
  head: () =>
    pageHead({
      title: "MD Hair Restoration Consulting for US Practices | AuraGenics",
      description:
        "Expert Guidance to Elevate Your Practice and Patient Results. Whether you're just entering the hair restoration space or looking to expand your current offerings.",
      path: "/consulting",
    }),
});

function Consulting() {
  const related = RELATED.map((slug) => productBySlug(slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <SiteShell>
      <section className="border-b border-ink">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-24">
            <p className="text-kicker uppercase tracking-kicker text-accent">
              MD Hair Coach · Folio 104
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-none">
              MD Hair Restoration Consulting
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Expert Guidance to Elevate Your Practice and Patient Results
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="ink">
                <Link to="/inquire" search={{ interest: "hair" }}>
                  Request a consulting call
                </Link>
              </Button>
            </div>
          </div>
          <img
            src="/images/hair.jpg"
            alt="Hair restoration suite"
            className="h-72 w-full object-cover lg:h-full frame"
          />
        </div>
      </section>

      <section className="border-b border-ink bg-ink text-bg">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-3 md:px-8">
          <div>
            <p className="font-display text-4xl">35+</p>
            <p className="mt-2 text-sm text-bg/65">Years in hair technologies</p>
          </div>
          <div>
            <p className="font-display text-4xl">FUE</p>
            <p className="mt-2 text-sm text-bg/65">
              AuraGraft, when you should operate
            </p>
          </div>
          <div>
            <p className="font-display text-4xl">LED</p>
            <p className="mt-2 text-sm text-bg/65">
              Revian — FDA-cleared, doctor-dispensed
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          {BODY.map((p, i) => (
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
      </section>

      <section className="border-t border-ink bg-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            The work
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {ITEMS.map((s, i) => (
              <li key={s.t} className="border-t border-line pt-5">
                <p className="folio text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-2xl">{s.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink bg-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            Hair products
          </p>
          <ul className="mt-8 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <li key={p.slug} className="bg-bg">
                <ProductLink
                  slug={p.slug}
                  className="block p-6 hover:bg-surface"
                >
                  <p className="folio text-accent">{p.folio}</p>
                  <h2 className="mt-3 font-display text-2xl">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted">{p.tagline}</p>
                </ProductLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink bg-bg-2">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            Asked in the room
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

      <InquireSection defaultInterest="hair" compact />
    </SiteShell>
  );
}
