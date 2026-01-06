"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
    {
        title: "FinTech Dashboard",
        description: "A real-time analytics dashboard for a leading financial institution, processing millions of transactions daily.",
        tags: ["Next.js", "D3.js", "WebSocket"],
        image: "/project1.jpg" // Placeholder
    },
    {
        title: "AI Content Generator",
        description: "SaaS platform leveraging GPT-4 to generate marketing copy, featuring a custom rich text editor.",
        tags: ["React", "OpenAI API", "Tailwind"],
        image: "/project2.jpg" // Placeholder
    },
    {
        title: "E-Commerce Mobile App",
        description: "Cross-platform mobile application for a fashion retailer with AR try-on features.",
        tags: ["React Native", "Expo", "ARKit"],
        image: "/project3.jpg" // Placeholder
    }
];

export function FeaturedProjects() {
    return (
        <SectionWrapper id="projects" className="bg-black/20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        See how we transform complex requirements into intuitive digital experiences.
                    </p>
                </div>
                <Button variant="outline" className="shrink-0">View All Case Studies</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <GlassCard key={index} className="group p-0 overflow-hidden flex flex-col h-full">
                        <div className="relative h-48 bg-muted/50 w-full overflow-hidden">
                            {/* Placeholder for image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
                                <span className="text-sm font-medium">Project Preview</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-1">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <Button variant="ghost" size="sm" className="w-full gap-2">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </Button>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
