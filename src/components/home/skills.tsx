"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

export function Skills() {
    return (
        <SectionWrapper id="skills" className="section-divider">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Help You</h2>
                        <p className="text-muted-foreground text-lg">
                            We keep things simple: understand your goal, build what matters, and support you after launch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <GlassCard hoverEffect className="p-4">
                            <h3 className="font-semibold text-primary mb-2">Clear Planning</h3>
                            <p className="text-sm text-muted-foreground">We start with your business goals and turn them into an easy-to-follow roadmap.</p>
                        </GlassCard>
                        <GlassCard hoverEffect className="p-4">
                            <h3 className="font-semibold text-secondary mb-2">Fast Delivery</h3>
                            <p className="text-sm text-muted-foreground">You see progress quickly with practical updates and real working results.</p>
                        </GlassCard>
                        <GlassCard hoverEffect className="p-4">
                            <h3 className="font-semibold text-accent mb-2">Useful Features</h3>
                            <p className="text-sm text-muted-foreground">We focus on features your customers and team will actually use every day.</p>
                        </GlassCard>
                        <GlassCard hoverEffect className="p-4">
                            <h3 className="font-semibold text-secondary mb-2">Long-Term Support</h3>
                            <p className="text-sm text-muted-foreground">After launch, we help you improve, fix issues, and grow with confidence.</p>
                        </GlassCard>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="h-full w-full"
                >
                    <GlassCard className="h-full flex flex-col justify-center p-8">
                        <h3 className="text-2xl font-semibold mb-4">What You Can Expect</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li>Simple communication with no confusing technical language.</li>
                            <li>Reliable timelines and transparent updates at every stage.</li>
                            <li>Solutions built around real business impact, not trends.</li>
                            <li>A partner who stays with you beyond the first release.</li>
                        </ul>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
