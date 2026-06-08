"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useQuote } from "@/components/quote/quote-context";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const { openQuote } = useQuote();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
                isScrolled ? "top-4" : "top-0"
            )}
        >
            <div
                className={cn(
                    "mx-auto transition-all duration-500",
                    isScrolled
                        ? "max-w-4xl px-6"
                        : "container px-4 md:px-6"
                )}
            >
                <div
                    className={cn(
                        "flex items-center justify-between transition-all duration-500",
                        isScrolled
                            ? "backdrop-blur-3xl bg-black/40 border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] supports-[backdrop-filter]:bg-black/20"
                            : "backdrop-blur-xl bg-transparent border-b border-transparent h-20"
                    )}
                >
                    <Link href="/" className="flex items-center gap-2 z-10">
                        <div className={cn(
                            "relative transition-all duration-500",
                            isScrolled ? "h-10 w-40" : "h-20 w-64"
                        )}>
                            <Image
                                src="/tsl_logo.svg"
                                alt="Company Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => openQuote()}
                            className="rounded-full px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                        >
                            Get a Quote
                        </Button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2 z-10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-3xl mx-4 p-6 flex flex-col gap-4 shadow-2xl">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-gray-300 hover:text-white transition-colors p-4 rounded-2xl hover:bg-white/5"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Button onClick={() => openQuote()} className="w-full rounded-full">Get a Quote</Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
