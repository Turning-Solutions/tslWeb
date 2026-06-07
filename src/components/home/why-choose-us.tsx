"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { CheckCircle2, Lightbulb, MessageSquare, Rocket, ShieldCheck } from "lucide-react";

const VALUE_CARDS = [
    {
        title: "Discovery First",
        description: "We clarify the problem, users, and business goals before writing a single line of code.",
        icon: Lightbulb,
        iconBg: "bg-yellow-500/10",
        iconColor: "text-yellow-400",
    },
    {
        title: "Clear Communication",
        description: "You stay informed with direct updates, honest timelines, and simple next steps — no surprises.",
        icon: MessageSquare,
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
    },
    {
        title: "Launch Ready",
        description: "We build practical software that is prepared for real users, not just demos and presentations.",
        icon: Rocket,
        iconBg: "bg-green-500/10",
        iconColor: "text-green-400",
    },
    {
        title: "Built Responsibly",
        description: "Security, scalability, and maintainability are considered from the very start of every project.",
        icon: ShieldCheck,
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
    },
];

const REASONS = [
    "Affordable, high-quality AI solutions",
    "Customized systems tailored to your business",
    "Focus on customer experience and real outcomes",
    "Secure and scalable architectures",
    "Strong research and engineering foundation",
];

export function WhyChooseUs() {
    return (
        <SectionWrapper id="why-us" className="section-divider">
            <div className="text-center mb-16">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">Why us</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Partner With Us?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    We don&apos;t just deliver code, we deliver certainty. Every engagement is built on clarity, care, and measurable outcomes.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Checklist */}
                <GlassCard className="p-8 h-full">
                    <h3 className="text-2xl font-semibold mb-8">What sets us apart</h3>
                    <ul className="space-y-5">
                        {REASONS.map((item) => (
                            <li key={item} className="flex items-center gap-4 text-base">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-gray-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                </GlassCard>

                {/* Value cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {VALUE_CARDS.map((card) => (
                        <GlassCard key={card.title} hoverEffect className="p-6 flex flex-col gap-4">
                            <div className={`inline-flex w-12 h-12 rounded-2xl ${card.iconBg} items-center justify-center`}>
                                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
