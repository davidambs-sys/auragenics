import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hairpro")({
  beforeLoad: () => {
    throw redirect({ to: "/hair" });
  },
});
