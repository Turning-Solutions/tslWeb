import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { QuoteActions } from "@/components/quote/quote-actions";
import {
    ArrowRight,
    BarChart3,
    Bot,
    CheckCircle2,
    Database,
    Layout,
    MessageCircle,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Workflow,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services | Modern Software Company",
    description: "Web Development, AI Solutions, Cloud Infrastructure, and more.",
};

const SERVICES = [
    {
        title: "AI Agents & Chatbots",
        description:
            "Customer support, sales, and internal AI agents trained around your real business questions and workflows.",
        icon: Bot,
        highlight: "Best for faster replies",
        deliverables: [
            "Website chat agents",
            "Lead qualification flows",
            "FAQ and knowledge base setup",
            "Human handoff process",
        ],
    },
    {
        title: "Web Applications",
        description:
            "Modern dashboards, portals, booking systems, ecommerce platforms, and business tools that are easy to use.",
        icon: Layout,
        highlight: "Best for custom platforms",
        deliverables: [
            "Responsive web app UI",
            "Admin dashboards",
            "Authentication and roles",
            "Deployment and support",
        ],
    },
    {
        title: "Mobile Applications",
        description:
            "Mobile-first product experiences for customers, teams, and field operations across common business use cases.",
        icon: Smartphone,
        highlight: "Best for mobile users",
        deliverables: [
            "App screens and flows",
            "API integration",
            "Push-ready architecture",
            "Release guidance",
        ],
    },
    {
        title: "Business Automation",
        description:
            "Automate repetitive tasks, notifications, approvals, customer updates, and internal handoffs.",
        icon: Workflow,
        highlight: "Best for saving time",
        deliverables: [
            "Workflow mapping",
            "Automated notifications",
            "Approval flows",
            "Tool integrations",
        ],
    },
    {
        title: "Data & Dashboards",
        description:
            "Clear reporting dashboards and data flows that help teams understand performance without manual spreadsheets.",
        icon: BarChart3,
        highlight: "Best for visibility",
        deliverables: [
            "Business dashboards",
            "Data cleanup flows",
            "KPI tracking",
            "Reporting automation",
        ],
    },
    {
        title: "System Integration",
        description:
            "Connect websites, CRMs, payment tools, databases, and third-party platforms into one smoother workflow.",
        icon: Database,
        highlight: "Best for connected tools",
        deliverables: [
            "API integrations",
            "Database connections",
            "Payment and email setup",
            "Secure data handling",
        ],
    },
];

const PROCESS_STEPS = [
    {
        title: "Understand",
        description: "We map your business goal, users, current process, and the result you need.",
    },
    {
        title: "Design",
        description: "We shape the screens, workflow, architecture, and launch scope before building.",
    },
    {
        title: "Build",
        description: "We develop the product in clear stages with reviews and practical feedback loops.",
    },
    {
        title: "Launch",
        description: "We deploy, test, hand over, and support the system after it goes live.",
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <SectionWrapper className="overflow-hidden">
                <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

                <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Practical software services for growing businesses
                        </div>
                        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                            Build smarter systems without making the process complicated.
                        </h1>
                        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                            Choose the service you need, tell us the outcome, and we help turn it into a clean digital product your team and customers can actually use.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:bg-primary/90"
                            >
                                Talk to us
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/5"
                            >
                                View products
                            </Link>
                        </div>
                    </div>

                    <GlassCard className="p-8">
                        <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h2 className="mb-4 text-2xl font-semibold">What you get with every service</h2>
                        <div className="space-y-4">
                            {[
                                "Clear scope before development starts",
                                "User-friendly UI and responsive layouts",
                                "Secure, scalable implementation",
                                "Launch support and practical handover",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 text-sm text-gray-300">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-black/20 section-divider">
                <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
                        <h2 className="text-3xl font-bold md:text-5xl">Pick the right support for your next build.</h2>
                    </div>
                    <p className="max-w-xl text-muted-foreground">
                        Each service is designed around a business outcome, not just a technical feature list.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {SERVICES.map((service) => (
                        <GlassCard key={service.title} hoverEffect className="flex h-full flex-col">
                            <div className="mb-6 flex items-start justify-between gap-4">
                                <div className="inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                                    {service.highlight}
                                </span>
                            </div>
                            <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
                            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                            <div className="mt-auto space-y-3">
                                {service.deliverables.map((deliverable) => (
                                    <div key={deliverable} className="flex items-start gap-2 text-sm text-gray-300">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>{deliverable}</span>
                                    </div>
                                ))}
                            </div>
                            <QuoteActions topic={service.title} className="mt-6" />
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">How it works</p>
                    <h2 className="text-3xl font-bold md:text-5xl">A simple path from idea to launch.</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                    {PROCESS_STEPS.map((step, index) => (
                        <GlassCard key={step.title} className="p-6">
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                                {index + 1}
                            </div>
                            <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                        </GlassCard>
                    ))}
                </div>

                <GlassCard className="mt-10 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                            <MessageCircle className="h-4 w-4" />
                            Not sure what you need?
                        </div>
                        <h3 className="text-2xl font-semibold">Tell us the problem, and we will recommend the right service.</h3>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 font-medium text-white transition-all hover:bg-white/5"
                    >
                        Contact us
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </GlassCard>
            </SectionWrapper>
        </div>
    );
}
