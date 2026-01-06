import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Layout, Smartphone, Brain, Cloud, Database, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Modern Software Company",
    description: "Web Development, AI Solutions, Cloud Infrastructure, and more.",
};

const SERVICES_DETAILED = [
    {
        category: "Software Development",
        items: [
            { name: "Web Applications", desc: "Scalable, secure, and high-performance web apps using Next.js." },
            { name: "Mobile Apps", desc: "Native iOS and Android apps built with React Native." },
            { name: "SaaS Products", desc: "Full-cycle SaaS development from MVP to IPO." }
        ],
        icon: Layout
    },
    {
        category: "AI & Automation",
        items: [
            { name: "Chatbots & Assistants", desc: "Custom AI agents powered by LLMs for customer support." },
            { name: "Process Automation", desc: "Automate repetitive tasks to save time and reduce errors." },
            { name: "Data Analytics", desc: "Turn raw data into actionable business insights." }
        ],
        icon: Brain
    },
    {
        category: "Cloud Services",
        items: [
            { name: "Cloud Migration", desc: "Safe and efficient migration to AWS, Azure, or Google Cloud." },
            { name: "DevOps", desc: "CI/CD pipelines, containerization (Docker/K8s), and infrastructure as code." },
            { name: "Security", desc: "Enterprise-grade security audits and implementation." }
        ],
        icon: Cloud
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive technical solutions designed to scale with your business.
                    </p>
                </div>

                <div className="space-y-16">
                    {SERVICES_DETAILED.map((section, idx) => (
                        <div key={idx} className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <section.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold">{section.category}</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {section.items.map((item, i) => (
                                    <GlassCard key={i} hoverEffect className="h-full">
                                        <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
