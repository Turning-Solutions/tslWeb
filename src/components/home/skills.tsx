"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Map, Rocket, Wrench } from "lucide-react";
import Link from "next/link";

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3 sm:mb-4">How we work</p>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">How We Help You</h2>
                    <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-10">
                        We keep things simple: understand your goal, build what matters, and support you after launch.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {MINI_CARDS.map((card) => (
                            <GlassCard key={card.title} hoverEffect className="p-4 sm:p-5 flex gap-3 sm:gap-4 items-start">
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
                    <GlassCard className="flex flex-col p-5 sm:p-8 h-full">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2">What You Can Expect</h3>
                        <p className="text-muted-foreground text-sm mb-6 sm:mb-8">
                            From the first conversation to post-launch, here is how we show up for your project.
                        </p>
                        <ul className="space-y-4 sm:space-y-5">
                            {EXPECTATIONS.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm leading-relaxed text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 pt-6 sm:pt-8">
                            {[
                                { value: "1 week", label: "Avg kickoff time" },
                                { value: "100%", label: "Client ownership" },
                                { value: "24 h", label: "Support response" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-base sm:text-xl font-bold text-white">{stat.value}</p>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12">
                <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors w-full sm:w-auto"
                >
                    View Services
                    <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors w-full sm:w-auto"
                >
                    Browse Products
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </SectionWrapper>
    );
}
