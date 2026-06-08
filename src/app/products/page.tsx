import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { QuoteActions } from "@/components/quote/quote-actions";
import { Bot, CheckCircle2, ExternalLink, GraduationCap, ShoppingBag, Store, Workflow } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/lib/projects";

const outlineButtonSm =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer active:scale-95 border border-white/20 hover:bg-white/5 text-white backdrop-blur-sm h-12 px-4 text-sm gap-2 w-full sm:h-11 sm:rounded-lg";

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
        <div className="pt-16 sm:pt-20">
            <SectionWrapper className="py-10 sm:py-20 md:py-32">
                <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    {PRODUCTS.map((product) => (
                        <GlassCard key={product.url} className="group flex flex-col overflow-hidden p-0">
                            <div className="relative h-52 w-full overflow-hidden bg-zinc-950/80 ring-1 ring-inset ring-white/10 sm:h-72 md:h-[26rem]">
                                <Image
                                    src={product.image}
                                    alt={`${product.title} preview`}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <h2 className="mb-2 text-lg font-bold sm:text-xl">{product.title}</h2>
                                <p className="mb-4 flex-1 text-sm text-muted-foreground">{product.description}</p>
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

            <SectionWrapper id="ready-to-ship-products" className="bg-black/20 section-divider py-10 sm:py-20 md:py-32">
                <div className="mb-8 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:justify-between lg:gap-8">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:mb-4 sm:text-sm">
                            Ready to Ship Products
                        </p>
                        <h2 className="mb-3 text-2xl font-bold sm:mb-5 sm:text-3xl md:text-5xl">
                            Productized systems that start fast and grow with you.
                        </h2>
                        <p className="text-sm text-muted-foreground sm:text-lg">
                            Prebuilt foundations we customize around your brand, workflow, and launch goals.
                        </p>
                    </div>
                    <GlassCard className="h-fit p-5 sm:p-6 lg:max-w-sm">
                        <p className="mb-2 text-sm text-muted-foreground">Typical delivery model</p>
                        <p className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">Configure, customize, launch</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We map your requirements, adjust the product modules, connect the required tools, then deploy a polished version ready for real users.
                        </p>
                    </GlassCard>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
                    {READY_TO_SHIP_PRODUCTS.map((product) => (
                        <GlassCard key={product.title} hoverEffect className="h-full p-4 sm:p-6">
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="shrink-0 rounded-2xl bg-primary/10 p-3 text-primary sm:p-4">
                                        <product.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:text-2xl">{product.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-0 sm:text-base">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 text-sm font-medium text-white">Best for: {product.idealFor}</p>
                                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                                        {product.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <QuoteActions topic={product.title} className="mt-1 sm:mt-2" />
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
