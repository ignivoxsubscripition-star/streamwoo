import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-300",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-streamwoo-blue via-streamwoo-purple to-streamwoo-pink text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:shadow-streamwoo-purple/25",
                destructive: "bg-red-500 text-white hover:bg-red-600",
                outline: "border-2 border-streamwoo-purple text-streamwoo-purple hover:bg-streamwoo-purple/5 bg-transparent",
                secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
                ghost: "hover:bg-gray-100 hover:text-gray-900",
                link: "text-streamwoo-purple underline-offset-4 hover:underline",
                white: "bg-white text-streamwoo-purple font-bold hover:bg-gray-50 shadow-md",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-full px-4",
                lg: "h-14 rounded-full px-10 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
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
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
