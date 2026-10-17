import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { productHref } from "@/lib/site";

export function ProductLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  const to = productHref(slug);
  if (!to) return <span className={className}>{children}</span>;
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
