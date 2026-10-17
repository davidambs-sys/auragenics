import { notFound } from "@tanstack/react-router";
import { ProductPage, productHead } from "@/components/product-page";
import { productBySlug } from "@/lib/site";

export function productFileRoute(slug: string) {
  return {
    head: () => productHead(slug),
    component: function DedicatedProductPage() {
      const product = productBySlug(slug);
      if (!product) throw notFound();
      return <ProductPage product={product} />;
    },
  };
}
