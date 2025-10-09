import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-xl px-4 py-3 text-base text-white placeholder:text-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 focus:border-white/40 focus:bg-white/15 focus:shadow-[0_8px_32px_rgba(0,0,0,0.15)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 liquid-input",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }