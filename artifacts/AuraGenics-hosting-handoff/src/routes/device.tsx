import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage, catalogHead } from "@/components/catalog-page";

export const Route = createFileRoute("/device")({
  component: () => <CatalogPage catalogKey="device" />,
  head: () => catalogHead("device"),
});
