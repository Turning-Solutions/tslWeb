import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { QuoteActions } from "@/components/quote/quote-actions";
import { Bot, CheckCircle2, ExternalLink, GraduationCap, ShoppingBag, Store, Workflow } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/lib/projects";

const outlineButtonSm =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer active:scale-95 border border-white/20 hover:bg-white/5 text-white backdrop-blur-sm h-9 px-4 text-sm gap-2 w-full";

const READY_TO_SHIP_PRODUCTS = [
    {
        title: "Institute Management System",
        description:
            "A complete operating system for tuition classes, training centers, schools, and academies that need a faster way to manage daily admin work.",
        icon: GraduationCap,
        idealFor: "Education institutes, academies, training centers",
        features: ["Admissions and student profiles", "Class schedules and attendance", "Payments and invoices", "Parent and student updates"],
    },
    {
        title: "Custom AI Agents",
        description:
            "AI agents trained around your business processes, FAQs, sales flow, and support tasks so your team can respond faster around the clock.",
        icon: Bot,
        idealFor: "Support teams, sales teams, service businesses",
        features: ["Website chat agent", "Lead qualification", "FAQ and knowledge base answers", "Human handoff workflow"],
    },
    {
        title: "CMS for Shops",
        description:
            "A lightweight product and content management system for businesses that need to update catalogs, pages, offers, and promotions easily.",
        icon: Store,
        idealFor: "Retail shops, distributors, local brands",
        features: ["Product catalog management", "Page and banner updates", "Promotion controls", "Admin dashboard"],
    },
    {
        title: "Quick Launch Storefront",
        description:
            "A conversion-focused storefront with product discovery, clear navigation, and checkout-ready flows for businesses going online fast.",
        icon: ShoppingBag,
        idealFor: "New online stores, product brands, small retailers",
        features: ["Product pages and categories", "Cart and checkout flow", "Mobile-first UI", "Analytics-ready setup"],
    },
    {
        title: "Workflow Automation Pack",
        description:
            "Prebuilt automations for repetitive business tasks, from notifications and approvals to customer updates and internal tracking.",
        icon: Workflow,
        idealFor: "Operations, support, and admin teams",
        features: ["Customer notifications", "Order and task updates", "Approval flows", "Reporting handoffs"],
    },
];

export const metadata: Metadata = {
    title: "Products | Modern Software Company",
    description: "Explore our portfolio of shipped products and live demos.",
};

export default function ProductsPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {PRODUCTS.map((product) => (
                        <GlassCard key={product.url} className="group p-0 overflow-hidden flex flex-col">
                            <div className="relative h-72 sm:h-80 md:h-[26rem] w-full overflow-hidden bg-zinc-950/80 ring-1 ring-inset ring-white/10">
                                <Image
                                    src={product.image}
                                    alt={`${product.title} preview`}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                                <p className="text-muted-foreground text-sm mb-4 flex-1">{product.description}</p>
                                <div className="mt-auto">
                                    <a
                                        href={product.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(outlineButtonSm)}
                                    >
                                        <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
                                        Visit live product
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper id="ready-to-ship-products" className="bg-black/20 section-divider">
                <div className="flex flex-col lg:flex-row justify-between gap-8 mb-14">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                            Ready to Ship Products
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold mb-5">
                            Productized systems that start fast and grow with you.
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            These are prebuilt foundations we customize around your brand, workflow, users, and launch goals, so you get more detail than a template without starting from zero.
                        </p>
                    </div>
                    <GlassCard className="lg:max-w-sm h-fit">
                        <p className="text-sm text-muted-foreground mb-2">Typical delivery model</p>
                        <p className="text-2xl font-semibold mb-4">Configure, customize, launch</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We map your requirements, adjust the product modules, connect the required tools, then deploy a polished version ready for real users.
                        </p>
                    </GlassCard>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {READY_TO_SHIP_PRODUCTS.map((product) => (
                        <GlassCard key={product.title} hoverEffect className="h-full">
                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="shrink-0">
                                    <div className="inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                                        <product.icon className="h-7 w-7" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="mb-3">
                                        <h3 className="text-2xl font-semibold">{product.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-5">{product.description}</p>
                                    <p className="text-sm font-medium text-white mb-3">Best for: {product.idealFor}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {product.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <QuoteActions topic={product.title} className="mt-6" />
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
