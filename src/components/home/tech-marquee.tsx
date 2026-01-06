"use client";
import { cn } from "@/lib/utils";

const TECH_STACK = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "TensorFlow", "AWS", "Docker", "Kubernetes", "PostgreSQL",
    "GraphQL", "Framer Motion", "Tailwind CSS", "OpenAI"
];

export function TechMarquee() {
    return (
        <div className="py-12 bg-black/20 border-y border-white/5 overflow-hidden flex relative z-10">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

            <div className="flex animate-marquee hover:pause whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-16 mx-8">
                        {TECH_STACK.map((tech) => (
                            <span
                                key={tech}
                                className="text-2xl font-semibold text-muted-foreground/50 hover:text-white transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
