import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border font-sans font-semibold whitespace-nowrap transition-transform duration-150 ease-out outline-none select-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "border-transparent bg-tally text-tally-foreground hover:bg-[color-mix(in_oklch,var(--tally),white_10%)]",
        outline: "border-line-2 text-foreground hover:bg-tile-2",
        ghost: "border-transparent text-muted-foreground hover:bg-tile-2 hover:text-foreground",
      },
      size: {
        default: "h-11 px-[18px] text-base",
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

const iconMotion = {
  down: "group-hover/button:translate-y-0.5",
  out: "group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5",
};

/** Flecha del botón en su propio círculo, pegada al borde derecho; se adelanta al pasar el ratón */
function ButtonIcon({ children, direction = "out" }: { children: React.ReactNode; direction?: keyof typeof iconMotion }) {
  return (
    <span
      data-slot="button-icon"
      className={cn("-mr-2.5 grid size-7 place-items-center rounded-full bg-current/12 transition-transform duration-200 ease-out [&_svg]:size-3.5", iconMotion[direction])}
    >
      {children}
    </span>
  );
}

export { Button, ButtonIcon, buttonVariants };
