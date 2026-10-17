import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/lookbook")({
  beforeLoad: () => {
    throw redirect({ to: "/products" });
  },
});
