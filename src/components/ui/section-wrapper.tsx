import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
}

export function SectionWrapper({ children, className, id, ...props }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("py-14 sm:py-20 md:py-28 lg:py-32 relative", className)}
            {...props}
        >
            <div className="container mx-auto px-5 sm:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
