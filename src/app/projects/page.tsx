import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/projects";

const outlineButtonSm =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer active:scale-95 border border-white/20 hover:bg-white/5 text-white backdrop-blur-sm h-9 px-4 text-sm gap-2 w-full";

export const metadata: Metadata = {
    title: "Projects | Modern Software Company",
    description: "Explore our portfolio of shipped products and live demos.",
};

export default function ProjectsPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Projects</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real results for real clients. Explore our portfolio of successful projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {PROJECTS.map((project) => (
                        <GlassCard key={project.url} className="group p-0 overflow-hidden flex flex-col">
                            <div className="relative h-72 sm:h-80 md:h-[26rem] w-full overflow-hidden bg-zinc-950/80 ring-1 ring-inset ring-white/10">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                                <div className="mt-auto">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(outlineButtonSm)}
                                    >
                                        <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
                                        Visit live site
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
