import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/files/app.zip")({
  server: {
    handlers: {
      GET: async () => {
        const data = await readFile(
          join(process.cwd(), "public/auragenics-part1-app.zip"),
        );
        return new Response(data, {
          headers: {
            "Content-Type": "application/octet-stream",
            "Content-Disposition":
              'attachment; filename="auragenics-part1-app.zip"',
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
