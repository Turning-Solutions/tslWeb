import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
    variant?: "default" | "3d";
}

export function GlassCard({ children, className, hoverEffect = false, variant = "3d", ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl sm:rounded-[32px] p-6 relative overflow-hidden transition-all duration-300",
                variant === "default" && [
                    "backdrop-blur-3xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
                    "before:absolute before:inset-0 before:bg-linear-to-b before:from-white/5 before:to-transparent before:pointer-events-none",
                    hoverEffect && "hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:border-white/20 cursor-default group"
                ],
                variant === "3d" && "glass-3d cursor-default group",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
