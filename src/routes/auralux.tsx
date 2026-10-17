import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auralux")({
  beforeLoad: () => {
    throw redirect({ to: "/products" });
  },
});
