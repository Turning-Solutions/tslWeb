"use client";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Layout, Smartphone, Brain, Cloud, Database, BarChart3, ShieldCheck, Zap } from "lucide-react";

const SERVICES = [
    {
        title: "Web Development",
        description: "High-performance web applications built with Next.js and React.",
        icon: Layout,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Mobile Apps",
        description: "Native-quality cross-platform mobile experiences.",
        icon: Smartphone,
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "AI Solutions",
        description: "Intelligent automation and data-driven insights.",
        icon: Brain,
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Cloud & DevOps",
        description: "Scalable infrastructure and automated CI/CD pipelines.",
        icon: Cloud,
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "SaaS Development",
        description: "Complete product development from MVP to scale.",
        icon: Zap,
        gradient: "from-yellow-400 to-orange-500"
    },
    {
        title: "UI/UX Design",
        description: "User-centric design that converts visitors into customers.",
        icon: BarChart3, // Using placeholder icon
        gradient: "from-indigo-500 to-purple-500"
    }
];

export function ServicesOverview() {
    return (
        <SectionWrapper id="services">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    We deliver end-to-end technical solutions tailored to your business goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, index) => (
                    <GlassCard key={index} hoverEffect className="group">
                        <div className={`mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                            <service.icon className="w-6 h-6 text-white" />
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
