"use client";

import { Bot, ShoppingBag, Store, Workflow } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const READY_PRODUCTS = [
  {
    title: "Customized Chatbots",
    description:
      "Deploy branded chatbots tailored to your business workflows, FAQs, and lead capture goals.",
    icon: Bot,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "CMS for Shops",
    description:
      "A lightweight content and catalog management system for shops to manage products, pages, and promotions.",
    icon: Store,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Quick Launch Storefront",
    description:
      "Ready templates and checkout flows to launch your online shop quickly with minimal setup.",
    icon: ShoppingBag,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Workflow Automation Pack",
    description:
      "Prebuilt automations for order updates, customer notifications, and repeat support tasks.",
    icon: Workflow,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function ReadyToShipProducts() {
  return (
    <SectionWrapper id="products" className="section-divider">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Ship Products
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Plug-and-play digital products that can be deployed quickly and
          customized to your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {READY_PRODUCTS.map((product) => (
          <GlassCard key={product.title} hoverEffect className="group">
            <div
              className={`mb-6 inline-flex p-4 rounded-xl ${product.bgColor} transition-all`}
            >
              <product.icon className={`w-6 h-6 ${product.color}`} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {product.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
