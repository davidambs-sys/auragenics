import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/capital")({
  beforeLoad: () => {
    throw redirect({ to: "/device" });
  },
});
