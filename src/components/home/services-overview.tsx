"use client";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Layout, Smartphone, Brain, Cloud, Database, BarChart3, ShieldCheck, Zap } from "lucide-react";

const SERVICES = [
    {
        title: "AI Solutions",
        description: "Custom machine learning, chatbots, and predictive analytics.",
        icon: Brain,
        color: "text-primary",
        bgColor: "bg-primary/10"
    },
    {
        title: "Web & Mobile App",
        description: "Scalable web platforms and native mobile applications.",
        icon: Smartphone,
        color: "text-secondary",
        bgColor: "bg-secondary/10"
    },
    {
        title: "CX Systems",
        description: "AI-powered CRM and omnichannel engagement tools.",
        icon: Zap,
        color: "text-accent",
        bgColor: "bg-accent/10"
    },
    {
        title: "Data Analytics",
        description: "Dashboards, forecasting models, and business intelligence.",
        icon: BarChart3,
        color: "text-primary",
        bgColor: "bg-primary/10"
    },
    {
        title: "AI Integration",
        description: "Strategy consulting and system integration services.",
        icon: Cloud,
        color: "text-accent",
        bgColor: "bg-accent/10"
    },
    {
        title: "Enterprise Systems",
        description: "Secure, scalable architectures for large organizations.",
        icon: ShieldCheck,
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
