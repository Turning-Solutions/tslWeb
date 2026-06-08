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

    { icon: Bot, color: "text-primary", bg: "bg-primary/10", label: "AI Agents" },

    { icon: GraduationCap, color: "text-secondary", bg: "bg-secondary/10", label: "Institute Management System" },

    { icon: Store, color: "text-accent", bg: "bg-accent/10", label: "CMS for Shops" },

    { icon: Rocket, color: "text-primary", bg: "bg-primary/10", label: "Quick Launch Storefront" },

];



export function Hero() {

    const { openQuote } = useQuote();

    return (

        <section className="relative w-full overflow-hidden bg-black lg:min-h-screen lg:flex lg:items-center lg:justify-center">

            {/* Desktop: Spline 3D background */}

            <div className="absolute inset-0 z-0 hidden lg:block">

                <SplineWrapper />

            </div>



            {/* Mobile: clean gradient background */}

            <div className="absolute inset-0 z-0 lg:hidden bg-gradient-to-b from-black via-[#0d0d18] to-black">

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

            </div>



            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 pt-24 pb-14 sm:pt-28 sm:pb-20 lg:py-24 pointer-events-none">

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    <div className="lg:col-span-7 space-y-5 sm:space-y-8 max-w-4xl">

                        <motion.div

                            initial={{ opacity: 0, y: 20 }}

                            animate={{ opacity: 1, y: 0 }}

                            transition={{ duration: 0.6 }}

                            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-xs sm:text-sm font-medium shadow-sm text-white pointer-events-auto"

                        >

                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />

                            <span>Accepting New Builds for 2026</span>

                        </motion.div>



                        <motion.div

                            initial={{ opacity: 0, y: 20 }}

                            animate={{ opacity: 1, y: 0 }}

                            transition={{ duration: 0.6, delay: 0.1 }}

                        >

                            <h1 className="text-[2rem] leading-[1.15] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-shadow">

                                Affordable{" "}

                                <span className="relative inline-block text-glow">

                                    <span className="text-primary">Intelligence.</span>

                                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-primary/30 rounded-full"></span>

                                </span>

                                <br />

                                Unlimited Growth.

                            </h1>

                        </motion.div>



                        <motion.p

                            initial={{ opacity: 0, y: 20 }}

                            animate={{ opacity: 1, y: 0 }}

                            transition={{ duration: 0.6, delay: 0.2 }}

                            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed text-shadow"

                        >

                            From AI agents to full web platforms, we build digital products your customers and team will actually use at a price that makes sense.

                        </motion.p>



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2 pointer-events-auto"
                        >
                            <Button onClick={() => openQuote()} size="lg" className="text-base gap-2 group px-6 sm:px-8 rounded-full shadow-lg w-full sm:w-auto">
                                Get a Free Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>



                        {/* Mobile: compact product pills */}

                        <motion.div

                            initial={{ opacity: 0, y: 20 }}

                            animate={{ opacity: 1, y: 0 }}

                            transition={{ duration: 0.6, delay: 0.4 }}

                            className="lg:hidden pointer-events-auto pt-2"

                        >

                            <p className="text-xs uppercase tracking-[0.15em] text-primary/80 mb-3">Ready to deploy</p>

                            <div className="flex flex-wrap gap-2">

                                {PRODUCTS.map(({ icon: Icon, color, bg, label }) => (

                                    <div

                                        key={label}

                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"

                                    >

                                        <div className={`shrink-0 rounded-md ${bg} p-1`}>

                                            <Icon className={`w-3 h-3 ${color}`} />

                                        </div>

                                        <span className="text-xs text-gray-200 font-medium">{label}</span>

                                    </div>

                                ))}

                            </div>

                        </motion.div>

                    </div>



                    {/* Desktop: full product card */}

                    <motion.div

                        initial={{ opacity: 0, x: 20 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.6, delay: 0.35 }}

                        className="hidden lg:block lg:col-span-5 pointer-events-auto"

                    >

                        <div className="rounded-3xl border border-white/15 bg-black/50 backdrop-blur-xl p-6 md:p-8 space-y-5">

                            <div>

                                <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-1">Ready to deploy</p>

                                <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">

                                    Pick a product, we configure it for your business.

                                </h3>

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


