import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-2xl p-6 relative overflow-hidden",
                hoverEffect && "glass-hover cursor-default group",
                className
            )}
            {...props}
        >
            {/* Glow effect on hover */}
            {hoverEffect && (
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:animate-shine" />
            )}
            {children}
        </div>
    );
}
