import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: `
      bg-gradient-to-br from-emerald-400/70 to-cyan-500/70
      text-white border border-white/20 backdrop-blur-md
      shadow-[0_4px_15px_rgba(0,0,0,0.1)]
      hover:from-emerald-400/80 hover:to-cyan-500/80
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
      transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]
      active:translate-y-[1px]
      dark:from-emerald-400/40 dark:to-cyan-500/40
      dark:bg-gradient-to-br dark:hover:from-emerald-400/50 dark:hover:to-cyan-500/50
      dark:border-white/10 dark:hover:border-white/20
    `,
        
        secondary: `
      bg-white/15 text-white border border-white/30 backdrop-blur-md
      shadow-[0_4px_10px_rgba(255,255,255,0.1)]
      hover:bg-white/25 hover:border-white/40 hover:shadow-[0_6px_18px_rgba(255,255,255,0.15)]
      transition-all duration-300 transform hover:-translate-y-[2px]
      dark:bg-white/10 dark:border-white/15 dark:hover:bg-white/15 dark:hover:border-white/25
    `,
        
        outline: `
      border-2 border-white/30 text-white bg-transparent backdrop-blur-sm
      hover:bg-white/10 hover:border-white/50 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
      transition-all duration-300 transform hover:-translate-y-[2px]
      dark:border-white/10 dark:hover:border-white/30 dark:hover:bg-white/5
    `,
        
        ghost: `
      bg-transparent text-white hover:bg-white/10 hover:shadow-md
      backdrop-blur-sm transition-all duration-200 ease-in-out
      transform hover:-translate-y-[1px]
      dark:hover:bg-white/5
    `,
        
        glass: `
      relative overflow-hidden bg-white/10 text-white border border-white/20 backdrop-blur-xl
      shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]
      hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
      transform hover:-translate-y-[3px] transition-all duration-300 ease-in-out
      dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20
    `,
      },
      
      size: {
        default: "h-11 px-6 py-3 text-base",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }