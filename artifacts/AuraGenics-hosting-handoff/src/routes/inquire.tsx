import { createFileRoute } from "@tanstack/react-router";
import { InquireForm } from "@/components/inquire-form";
import { SiteShell } from "@/components/layout/site-shell";
import { FAQS } from "@/lib/site";
import { pageHead } from "@/lib/seo";

type InquireSearch = { interest?: string };

export const Route = createFileRoute("/inquire")({
  validateSearch: (search: Record<string, unknown>): InquireSearch => ({
    interest: typeof search.interest === "string" ? search.interest : undefined,
  }),
  component: InquirePage,
  head: () =>
    pageHead({
      title: "US Practice Inquiry | AuraGenics",
      description:
        "Request professional information on the AuraGenics catalog. Licensed United States practices only.",
      path: "/inquire",
      index: false,
    }),
});

function InquirePage() {
  const { interest } = Route.useSearch();
  return (
    <SiteShell>
      <section className="border-b border-ink bg-bg">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <p className="text-kicker uppercase tracking-kicker text-accent">
              The desk
            </p>
            <h1 className="mt-5 font-display text-5xl">
              A conversation with
              <br />
              <em className="italic text-accent">the desk.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Licensed practices only. The catalog.
              We will not ask for patient information.
            </p>
          </div>
          <InquireForm defaultInterest={interest} />
        </div>
      </section>
      <section className="bg-bg-2">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
          <p className="text-kicker uppercase tracking-kicker text-accent">
            Before you write
          </p>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-xl">
                  {item.q}
                  <span className="text-accent group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
