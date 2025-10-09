import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: `
          bg-gradient-to-br from-emerald-400/80 to-cyan-500/80
          text-white border border-white/30 backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:from-emerald-400/90 hover:to-cyan-500/90
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]
          transition-all duration-300 ease-out transform hover:-translate-y-0.5
          active:translate-y-0 active:scale-95
          dark:from-emerald-400/60 dark:to-cyan-500/60
          dark:border-white/20 dark:backdrop-blur-2xl
        `,
        
        secondary: `
          bg-white/20 text-white border border-white/30 backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:bg-white/30 hover:border-white/40
          hover:shadow-[0_12px_40px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]
          transition-all duration-300 ease-out transform hover:-translate-y-0.5
          dark:bg-white/15 dark:border-white/20
        `,
        
        outline: `
          border-2 border-white/40 text-white bg-transparent backdrop-blur-xl
          hover:bg-white/15 hover:border-white/60
          hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]
          transition-all duration-300 ease-out transform hover:-translate-y-0.5
          dark:border-white/20 dark:hover:border-white/40
        `,
        
        ghost: `
          bg-transparent text-white hover:bg-white/15
          backdrop-blur-xl transition-all duration-200 ease-out
          transform hover:-translate-y-0.5
          dark:hover:bg-white/10
        `,
        
        glass: `
          relative overflow-hidden bg-white/15 text-white border border-white/30 backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:bg-white/25 hover:border-white/40
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]
          transform hover:-translate-y-0.5 transition-all duration-300 ease-out
          dark:bg-white/10 dark:border-white/20
        `,
      },
      
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-10 rounded-xl px-5 text-sm",
        lg: "h-14 rounded-2xl px-10 text-lg font-semibold",
        icon: "h-12 w-12 rounded-2xl",
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