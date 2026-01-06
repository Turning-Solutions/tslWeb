import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Modern Software Company",
    description: "Explore our portfolio of successful projects and case studies.",
};

export default function ProjectsPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real results for real clients. Explore our portfolio of successful projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <GlassCard key={i} className="group p-0 overflow-hidden flex flex-col">
                            <div className="relative h-64 bg-muted/50 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                                    <span className="text-muted-foreground">Project Image Placeholder {i}</span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">Project Title {i}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    A brief description of the project and the problem it solved for the client.
                                </p>
                                <div className="mt-auto">
                                    <Button variant="outline" size="sm" className="w-full gap-2">
                                        <ExternalLink className="w-4 h-4" /> View Case Study
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
