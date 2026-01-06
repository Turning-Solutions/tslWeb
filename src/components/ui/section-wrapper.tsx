import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
}

export function SectionWrapper({ children, className, id, ...props }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 relative", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
