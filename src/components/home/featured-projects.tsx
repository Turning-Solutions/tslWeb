"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/lib/projects";

const outlineButtonMd =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer active:scale-95 border border-white/20 hover:bg-white/5 text-white backdrop-blur-sm h-11 px-6 text-base shrink-0";

export function FeaturedProducts() {
    const featuredProducts = PRODUCTS.slice(0, 3);

    return (
        <SectionWrapper id="featured-products" className="bg-black/20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Products</h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        See how we turn business requirements into polished digital products.
                    </p>
                </div>
                <Link href="/products" className={cn(outlineButtonMd)}>
                    View all products
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product, index) => (
                    <GlassCard key={product.url} className="group p-0 overflow-hidden flex flex-col h-full">
                        <div className="relative h-52 w-full overflow-hidden bg-zinc-950/80 ring-1 ring-inset ring-white/10">
                            <Image
                                src={product.image}
                                alt={`${product.title} preview`}
                                fill
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={index < 2}
                            />
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-1">{product.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {product.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
