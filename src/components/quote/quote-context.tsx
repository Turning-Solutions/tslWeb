"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
    isOpen: boolean;
    openQuote: () => void;
    closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <QuoteContext.Provider
            value={{
                isOpen,
                openQuote: () => setIsOpen(true),
                closeQuote: () => setIsOpen(false),
            }}
        >
            {children}
        </QuoteContext.Provider>
    );
}

export function useQuote() {
    const ctx = useContext(QuoteContext);
    if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
    return ctx;
}
