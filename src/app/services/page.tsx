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
        category: "Artificial Intelligence Solutions",
        items: [
            { name: "Custom ML Models", desc: "Tailored machine learning models built for your specific business data and needs." },
            { name: "Intelligent Automation", desc: "Streamline operations with smart, automated workflows." },
            { name: "Chatbots & Rec Engines", desc: "Advanced conversational AI and personalized recommendation systems." },
            { name: "Predictive Analytics", desc: "Forecast trends and make data-driven decisions." }
        ],
        icon: Brain
    },
    {
        category: "Software Development",
        items: [
            { name: "Web Applications", desc: "Scalable, secure, and high-performance web solutions." },
            { name: "Mobile Applications", desc: "Native and cross-platform mobile apps for iOS and Android." },
            { name: "Enterprise Systems", desc: "Robust software infrastructure for large-scale operations." },
            { name: "Cloud Platforms", desc: "Secure and scalable cloud-based application deployment." }
        ],
        icon: Layout
    },
    {
        category: "Customer Experience Systems",
        items: [
            { name: "AI-Powered CRM", desc: "Next-gen customer relationship management tools." },
            { name: "Support Automation", desc: "Reduce response times with automated support systems." },
            { name: "Omnichannel Platforms", desc: "Unified engagement across email, chat, social, and voice." }
        ],
        icon: Smartphone
    },
    {
        category: "Data & Consulting",
        items: [
            { name: "BI Dashboards", desc: "Visual analytics for real-time business monitoring." },
            { name: "AI Strategy Consulting", desc: "Expert guidance on adopting and integrating AI technologies." },
            { name: "System Integration", desc: "Seamlessly connect disparate systems and data sources." }
        ],
        icon: Database
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
