import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border font-sans font-semibold whitespace-nowrap transition-[transform,background-color,border-color,color] duration-150 ease-out outline-none select-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "border-transparent bg-tally text-tally-foreground hover:bg-[color-mix(in_oklch,var(--tally),white_10%)]",
        outline: "border-line-2 text-foreground hover:bg-tile-2",
        ghost: "border-transparent text-muted-foreground hover:bg-tile-2 hover:text-foreground",
      },
      size: {
        default: "h-11 px-[18px] text-[15px]",
        sm: "h-10 px-3.5 text-sm",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return <ButtonPrimitive data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
