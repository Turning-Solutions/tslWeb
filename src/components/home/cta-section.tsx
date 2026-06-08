"use client";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight } from "lucide-react";
import { useQuote } from "@/components/quote/quote-context";

export function CallToAction() {
    const { openQuote } = useQuote();
    return (
        <SectionWrapper id="cta" className="text-center relative overflow-hidden py-32">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Digitalize Your Business?</h2>
                <p className="text-xl text-muted-foreground mb-10">
                    From concept to launch, we are here to help you build software that matters. Let's discuss your next big idea.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => openQuote()} size="lg" className="h-14 px-8 text-lg font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                        Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button onClick={() => openQuote()} size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm">
                        Schedule a Call
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
