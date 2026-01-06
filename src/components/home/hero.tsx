"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight, Code } from "lucide-react";

export function Hero() {
    return (
        <SectionWrapper className="min-h-screen flex items-center justify-center pt-32 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-primary-foreground/80 mb-4"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Accepting New Projects for 2026
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-[1.1]"
                >
                    We Build <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Intelligent</span> Digital Solutions
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                >
                    From cutting-edge web applications to powerful AI integrations, we transform complex business challenges into elegant, scalable software.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="w-full sm:w-auto gap-2 group">
                        Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                        View Work <Code className="w-4 h-4" />
                    </Button>
                </motion.div>

                {/* Floating tech icons or visuals can go here */}
            </div>
        </SectionWrapper>
    );
}
