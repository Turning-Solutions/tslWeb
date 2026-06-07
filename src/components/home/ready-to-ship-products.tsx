"use client";

import { ArrowRight, Bot, GraduationCap, ShoppingBag, Store, Workflow } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import Link from "next/link";

const READY_PRODUCTS = [
  {
    title: "Custom AI Agents",
    description:
      "Deploy branded AI agents and chatbots tailored to your workflows, FAQs, lead capture, and support goals.",
    icon: Bot,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Institute Management System",
    description:
      "A ready platform for admissions, student records, class schedules, payments, and parent communication.",
    icon: GraduationCap,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
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
      "Prebuilt automations for order updates, customer notifications, internal approvals, and repeat support tasks.",
    icon: Workflow,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function ReadyToShipProducts() {
  return (
    <SectionWrapper id="products" className="section-divider">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">Ready to ship</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Products you can launch this week.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Prebuilt digital systems we customize around your brand and workflow, no starting from zero.
          </p>
        </div>
        <Link
          href="/products"
          className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
        >
          See full details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
