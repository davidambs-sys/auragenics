import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        gold:
          "border border-ink/20 bg-action text-action-fg hover:bg-action-hover",
        outline:
          "border border-ink text-ink hover:border-action hover:bg-action hover:text-action-fg",
        ghost: "text-muted hover:text-ink",
        ink: "border border-ink/20 bg-action text-action-fg hover:bg-action-hover",
      },
      size: {
        sm: "h-11 px-4 text-xs uppercase tracking-kicker",
        md: "h-12 px-6 text-xs uppercase tracking-kicker",
        lg: "h-14 px-8 text-xs uppercase tracking-kicker",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
