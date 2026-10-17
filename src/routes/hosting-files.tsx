import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { pageHead } from "@/lib/seo";
import { useState } from "react";

export const Route = createFileRoute("/hosting-files")({
  component: HostingFiles,
  head: () =>
    pageHead({
      title: "Hosting files | AuraGenics",
      description: "Node 22 production files for the hosting company.",
      path: "/hosting-files",
      index: false,
    }),
});

function SaveButton({
  href,
  name,
  label,
}: {
  href: string;
  name: string;
  label: string;
}) {
  const [status, setStatus] = useState("");
  return (
    <button
      type="button"
      className="inline-flex min-h-12 items-center justify-center bg-action px-6 text-sm font-medium text-action-fg hover:bg-action-hover"
      onClick={async () => {
        setStatus("Saving…");
        try {
          const res = await fetch(href);
          if (!res.ok) throw new Error("missing");
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = name;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          setStatus("Saved — check Downloads");
        } catch {
          setStatus("Blocked in this window. Use a new Chrome tab.");
        }
      }}
    >
      {status || label}
    </button>
  );
}

function HostingFiles() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-2xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-kicker uppercase tracking-kicker text-accent">
          Hosting package
        </p>
        <h1 className="mt-4 font-display text-5xl">Node 22 files.</h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          Use these buttons (they save a file, they do not “open” a zip in the
          browser). Then unzip on your computer.
        </p>
        <div className="mt-10 flex flex-col gap-3">
          <SaveButton
            href="/files.app.zip"
            name="auragenics-part1-app.zip"
            label="Save app files (580 KB)"
          />
          <SaveButton
            href="/files.images.zip"
            name="auragenics-part2-images.zip"
            label="Save images (5 MB)"
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          Unzip both into the same folder named{" "}
          <span className="text-ink">auragenics</span>. Email that folder to
          the host. Startup: <span className="text-ink">server/index.mjs</span>
          . Node 22. npm start.
        </p>
        <h2 className="mt-16 font-display text-3xl">Note for the host</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Domain: auragenics.com. Ready-to-run Node 22 build. Not WordPress.
            Do not drop this in public_html as HTML.
          </p>
          <p>
            DNS is at InMotion (ns1/ns2.inmotionhosting.com). Set up the Node
            app there. Do not edit GoDaddy DNS while nameservers are InMotion.
          </p>
          <p>
            cPanel → Setup Node.js App. Version 22. Production. Application
            root: the auragenics folder. Startup file: server/index.mjs. Start:
            npm start.
          </p>
          <p>
            Leave MX on auragenics-com.mail.protection.outlook.com. Only change
            A and www for the website.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
