"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import dynamic from 'next/dynamic';

const SplineWrapper = dynamic(() => import('./spline-wrapper'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-black" />
});

export function Hero() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
            {/* 3D Spline Background */}
            <div className="absolute inset-0 z-0">
                <SplineWrapper />
                {/* Cover Spline Logo
                <div className="absolute bottom-0 right-4 w-38 h-14 bg-black z-50 pointer-events-none select-none rounded-t-3xl" /> */}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 pointer-events-none">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left content - 60% */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-sm font-medium shadow-sm text-white pointer-events-auto"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>Accepting New Projects for 2026</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white text-shadow">
                                Affordable{" "}
                                <span className="relative inline-block text-glow">
                                    <span className="text-primary">Intelligence.</span>
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
                                </span>
                                <br />
                                Unlimited Growth.
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed text-shadow font-medium"
                        >
                            From cutting-edge web applications to powerful AI integrations, we transform complex business challenges into elegant, scalable software.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 pointer-events-auto"
                        >
                            <Button size="lg" className="text-base gap-2 group px-8 rounded-full shadow-lg">
                                Get a Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-base gap-2 px-8 rounded-full border-2 bg-transparent text-white border-white/20 hover:bg-white/10">
                                View Work
                                <Code className="w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right content - 40% with glassmorphic stats cards */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <GlassCard hoverEffect className="p-6 space-y-2">
                                <div className="text-4xl font-bold text-primary">50+</div>
                                <div className="text-sm text-gray-300 font-medium">Projects Delivered</div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <GlassCard hoverEffect className="p-6 space-y-2">
                                <div className="text-4xl font-bold text-secondary">98%</div>
                                <div className="text-sm text-gray-300 font-medium">Client Satisfaction</div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <GlassCard hoverEffect className="p-6 space-y-2">
                                <div className="text-4xl font-bold text-accent">24/7</div>
                                <div className="text-sm text-gray-300 font-medium">Support Available</div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <GlassCard hoverEffect className="p-6 space-y-2">
                                <div className="text-4xl font-bold text-primary">10+</div>
                                <div className="text-sm text-gray-300 font-medium">Years Experience</div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

