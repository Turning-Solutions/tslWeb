import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-6 relative overflow-hidden",
                "before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-50 before:pointer-events-none",
                hoverEffect && "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:bg-white/10 hover:border-primary/30 cursor-default group",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
