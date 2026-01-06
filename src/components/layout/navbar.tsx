"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import Image from "next/image";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper to determine navbar style
    const getNavStyle = () => {
        if (isScrolled) return "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg";
        if (!isHome) return "bg-background border-b border-white/5"; // Always solid/visible on non-home pages if not scrolled? Or transparent but legible? 
        // Better: On inner pages, since we have pt-20, the background is dark. Transparent is fine IF text is white.
        // But user said "cannot see nav bar". Maybe they meant the background is missing so it blends too much?
        // Let's give it a subtle background on inner pages to distinguish it.
        return "bg-transparent backdrop-blur-none border-b border-transparent";
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                getNavStyle(),
                !isHome && !isScrolled && "bg-background/50 backdrop-blur-sm border-b border-white/5" // Force some visibility on inner pages
            )}
        >
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-20 w-64">
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
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors hover:scale-105 transform duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="primary" size="md">Get a Quote</Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 shadow-2xl">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-muted-foreground hover:text-white transition-colors p-2 pl-4 border-l-2 border-transparent hover:border-primary bg-white/5 rounded-r-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="p-2">
                        <Button className="w-full">Get a Quote</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
