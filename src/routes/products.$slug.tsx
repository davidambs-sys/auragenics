import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { PRODUCT_PATHS } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  beforeLoad: ({ params }) => {
    const dest = PRODUCT_PATHS[params.slug as keyof typeof PRODUCT_PATHS];
    if (!dest) throw notFound();
    throw redirect({ to: dest });
  },
});
