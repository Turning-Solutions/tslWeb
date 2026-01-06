import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-95",
                    {
                        "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]": variant === "primary",
                        "bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_rgba(139,92,246,0.3)]": variant === "secondary",
                        "bg-transparent hover:bg-white/5 text-white": variant === "ghost",
                        "border border-white/20 hover:bg-white/5 text-white backdrop-blur-sm": variant === "outline",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-6 text-base": size === "md",
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
