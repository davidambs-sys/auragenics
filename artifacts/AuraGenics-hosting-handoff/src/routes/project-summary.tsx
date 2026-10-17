import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { pageHead } from "@/lib/seo";

const PDF_HREF = "/AuraGenics-Website-Project-Summary.pdf";

export const Route = createFileRoute("/project-summary")({
  component: ProjectSummary,
  head: () =>
    pageHead({
      title: "Website Project Summary | AuraGenics",
      description: "Client project summary of the AuraGenics website.",
      path: "/project-summary",
      index: false,
    }),
});

function ProjectSummary() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-2xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-kicker uppercase tracking-kicker text-accent">
          Client file
        </p>
        <h1 className="mt-4 font-display text-5xl">
          Website project summary.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          Eight-page PDF for AuraGenics review. Catalog, language, photography,
          inquiry, and United States search — from start to finish.
        </p>
        <a
          href={PDF_HREF}
          download="AuraGenics-Website-Project-Summary.pdf"
          className="mt-10 inline-flex min-h-12 items-center bg-action px-6 text-sm font-medium text-action-fg hover:bg-action-hover"
        >
          Download PDF
        </a>
        <p className="mt-6 text-sm text-faint">
          Confidential. For AuraGenics review. Not indexed in search.
        </p>
      </section>
    </SiteShell>
  );
}
