import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage, catalogHead } from "@/components/catalog-page";

export const Route = createFileRoute("/hair")({
  component: () => <CatalogPage catalogKey="hair" />,
  head: () => catalogHead("hair"),
});
