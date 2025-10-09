import * as React from "react";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitives.Root
    ref={ref}
    className={cn(
      "peer h-6 w-6 shrink-0 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-emerald-400 data-[state=checked]:to-cyan-500 data-[state=checked]:border-transparent",
      className
    )}
    {...props}
  >
    <CheckboxPrimitives.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4 text-white stroke-[3]" />
    </CheckboxPrimitives.Indicator>
  </CheckboxPrimitives.Root>
));
Checkbox.displayName = "Checkbox";