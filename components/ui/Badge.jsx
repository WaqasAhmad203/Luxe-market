import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
    const variants = {
        default: "border-transparent bg-charcoal text-white hover:bg-charcoal/80",
        secondary: "border-transparent bg-gray-100 text-charcoal hover:bg-gray-100/80",
        destructive: "border-transparent bg-red-500 text-white hover:bg-red-500/80",
        outline: "text-charcoal",
        gold: "border-transparent bg-gold text-white hover:bg-gold/80",
    }

    return (
        <div
            ref={ref}
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    )
})
Badge.displayName = "Badge"

export { Badge }
