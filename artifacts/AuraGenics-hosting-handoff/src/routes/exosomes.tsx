import { createFileRoute } from "@tanstack/react-router";
import { productFileRoute } from "@/lib/product-route";

export const Route = createFileRoute("/exosomes")(productFileRoute("exosomes"));
