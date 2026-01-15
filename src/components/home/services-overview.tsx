"use client";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Layout, Smartphone, Brain, Cloud, Database, BarChart3, ShieldCheck, Zap } from "lucide-react";

const SERVICES = [
    {
        title: "Web Development",
        description: "High-performance web applications built with Next.js and React.",
        icon: Layout,
        color: "text-primary",
        bgColor: "bg-primary/10"
    },
    {
        title: "Mobile Apps",
        description: "Native-quality cross-platform mobile experiences.",
        icon: Smartphone,
        color: "text-secondary",
        bgColor: "bg-secondary/10"
    },
    {
        title: "AI Solutions",
        description: "Intelligent automation and data-driven insights.",
        icon: Brain,
        color: "text-accent",
        bgColor: "bg-accent/10"
    },
    {
        title: "Cloud & DevOps",
        description: "Scalable infrastructure and automated CI/CD pipelines.",
        icon: Cloud,
        color: "text-primary",
        bgColor: "bg-primary/10"
    },
    {
        title: "SaaS Development",
        description: "Complete product development from MVP to scale.",
        icon: Zap,
        color: "text-accent",
        bgColor: "bg-accent/10"
    },
    {
        title: "UI/UX Design",
        description: "User-centric design that converts visitors into customers.",
        icon: BarChart3,
        color: "text-secondary",
        bgColor: "bg-secondary/10"
    }
];

export function ServicesOverview() {
    return (
        <SectionWrapper id="services" className="section-divider">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    We deliver end-to-end technical solutions tailored to your business goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, index) => (
                    <GlassCard key={index} hoverEffect className="group">
                        <div className={`mb-6 inline-flex p-4 rounded-xl ${service.bgColor} transition-all`}>
                            <service.icon className={`w-6 h-6 ${service.color}`} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
