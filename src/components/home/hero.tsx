"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, GraduationCap, Rocket, Sparkles, Store } from "lucide-react";
import dynamic from 'next/dynamic';
import { useQuote } from "@/components/quote/quote-context";
import Link from "next/link";

const SplineWrapper = dynamic(() => import('./spline-wrapper'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-black" />
});

const PRODUCTS = [
    { icon: Bot, color: "text-primary", bg: "bg-primary/10", label: "Custom AI Agents" },
    { icon: GraduationCap, color: "text-secondary", bg: "bg-secondary/10", label: "Institute Management System" },
    { icon: Store, color: "text-accent", bg: "bg-accent/10", label: "CMS for Shops" },
    { icon: Rocket, color: "text-primary", bg: "bg-primary/10", label: "Quick Launch Storefront" },
];

export function Hero() {
    const { openQuote } = useQuote();
    return (
        <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <SplineWrapper />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 pointer-events-none">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-sm font-medium shadow-sm text-white pointer-events-auto"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>Accepting New Product Builds for 2026</span>
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
                            From AI agents to full web platforms, we build digital products your customers and team will actually use at a price that makes sense.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 pt-2 pointer-events-auto"
                        >
                            <Button onClick={() => openQuote()} size="lg" className="text-base gap-2 group px-8 rounded-full shadow-lg">
                                Get a Free Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Link href="/products">
                                <Button size="lg" variant="outline" className="text-base gap-2 px-8 rounded-full border-2 bg-transparent text-white border-white/20 hover:bg-white/10 w-full sm:w-auto">
                                    Browse Products
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="lg:col-span-5 pointer-events-auto"
                    >
                        <div className="rounded-3xl border border-white/15 bg-black/50 backdrop-blur-xl p-6 md:p-8 space-y-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-1">Ready to deploy</p>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                                        Pick a product, we configure it for your business.
                                    </h3>
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                {PRODUCTS.map(({ icon: Icon, color, bg, label }) => (
                                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors">
                                        <div className={`shrink-0 rounded-lg ${bg} p-1.5`}>
                                            <Icon className={`w-4 h-4 ${color}`} />
                                        </div>
                                        <span className="text-sm text-gray-100 font-medium">{label}</span>
                                        <div className="ml-auto flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-xs text-green-400/80">Available</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/products"
                                className="flex items-center justify-center gap-2 w-full rounded-2xl border border-primary/30 bg-primary/10 py-3 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                            >
                                See all products
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
