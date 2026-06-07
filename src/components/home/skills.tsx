"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Map, Rocket, Wrench } from "lucide-react";

const MINI_CARDS = [
    {
        icon: Map,
        color: "text-primary",
        bg: "bg-primary/10",
        title: "Clear Planning",
        desc: "We start with your goals and turn them into a simple roadmap.",
    },
    {
        icon: Rocket,
        color: "text-secondary",
        bg: "bg-secondary/10",
        title: "Fast Delivery",
        desc: "You see real progress quickly with practical updates.",
    },
    {
        icon: Wrench,
        color: "text-accent",
        bg: "bg-accent/10",
        title: "Useful Features",
        desc: "We build features your customers and team actually use.",
    },
    {
        icon: Clock,
        color: "text-secondary",
        bg: "bg-secondary/10",
        title: "Long-Term Support",
        desc: "After launch, we help you grow and improve with confidence.",
    },
];

const EXPECTATIONS = [
    "Simple communication, no confusing technical language.",
    "Reliable timelines and transparent updates at every stage.",
    "Solutions built around real business impact, not trends.",
    "A partner who stays with you beyond the first release.",
];

export function Skills() {
    return (
        <SectionWrapper id="skills" className="section-divider">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">How we work</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Help You</h2>
                    <p className="text-muted-foreground text-lg mb-10">
                        We keep things simple: understand your goal, build what matters, and support you after launch.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {MINI_CARDS.map((card) => (
                            <GlassCard key={card.title} hoverEffect className="p-5 flex gap-4 items-start">
                                <div className={`shrink-0 rounded-xl ${card.bg} p-2.5`}>
                                    <card.icon className={`w-5 h-5 ${card.color}`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{card.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:pt-16"
                >
                    <GlassCard className="flex flex-col p-8 h-full">
                        <h3 className="text-2xl font-semibold mb-2">What You Can Expect</h3>
                        <p className="text-muted-foreground text-sm mb-8">
                            From the first conversation to post-launch, here is how we show up for your project.
                        </p>
                        <ul className="space-y-5">
                            {EXPECTATIONS.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm leading-relaxed text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                            {[
                                { value: "1 week", label: "Avg kickoff time" },
                                { value: "100%", label: "Client ownership" },
                                { value: "24 h", label: "Support response" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
