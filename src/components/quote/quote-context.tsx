"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
    isOpen: boolean;
    selectedTopic?: string;
    openQuote: (topic?: string) => void;
    closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState<string | undefined>();

    return (
        <QuoteContext.Provider
            value={{
                isOpen,
                selectedTopic,
                openQuote: (topic?: string) => {
                    setSelectedTopic(topic);
                    setIsOpen(true);
                },
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
