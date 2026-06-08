"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { useQuote } from "@/components/quote/quote-context";
import { cn } from "@/lib/utils";

type QuoteActionsProps = {
    topic: string;
    className?: string;
};

const WHATSAPP_NUMBER = "94779705099";

export function QuoteActions({ topic, className }: QuoteActionsProps) {
    const { openQuote } = useQuote();
    const message = `Hi Turing Solutions, I would like to get a quote for ${topic}.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return (
        <div className={cn("flex flex-col gap-2.5 sm:flex-row sm:gap-3", className)}>
            <button
                type="button"
                onClick={() => openQuote(topic)}
                className="inline-flex h-12 w-full sm:h-11 sm:flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-white transition-all hover:bg-primary/90 active:scale-95"
            >
                Get quote
                <ArrowRight className="h-4 w-4 shrink-0" />
            </button>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full sm:h-11 sm:flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-medium text-white transition-all hover:bg-white/5 active:scale-95"
            >
                Chat with an advisor
                <MessageCircle className="h-4 w-4 shrink-0" />
            </a>
        </div>
    );
}
