"use client";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQuote } from "@/components/quote/quote-context";

export function CallToAction() {
    const { openQuote } = useQuote();
    return (
        <SectionWrapper id="cta" className="text-center relative overflow-hidden py-20 sm:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Ready to Digitalize Your Business?</h2>
                <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-10">
                    Explore our ready-to-ship products or custom services, then tell us what you want to build.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button onClick={() => openQuote()} size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-transform gap-2">
                        Get a Free Quote
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Link href="/products" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-background/50 backdrop-blur-sm w-full">
                            Browse Products
                        </Button>
                    </Link>
                    <Link href="/services" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-background/50 backdrop-blur-sm w-full">
                            View Services
                        </Button>
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}
