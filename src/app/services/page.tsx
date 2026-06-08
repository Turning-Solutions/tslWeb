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
        <div className="pt-16 sm:pt-20">
            <SectionWrapper className="overflow-hidden py-12 sm:py-20 md:py-32">
                <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

                <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
                    <div>
                        <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm text-gray-200">
                            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" />
                            <span>Practical software services for growing businesses</span>
                        </div>
                        <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-7xl">
                            Build smarter systems without making the process complicated.
                        </h1>
                        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                            Choose the service you need, tell us the outcome, and we help turn it into a clean digital product your team and customers can actually use.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:bg-primary/90 sm:w-auto sm:rounded-lg"
                            >
                                Talk to us
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-6 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/5 sm:w-auto sm:rounded-lg"
                            >
                                View products
                            </Link>
                        </div>
                    </div>

                    <GlassCard className="p-5 sm:p-8">
                        <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 text-primary sm:mb-6 sm:p-4">
                            <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>
                        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">What you get with every service</h2>
                        <div className="space-y-3 sm:space-y-4">
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

            <SectionWrapper className="bg-black/20 section-divider py-12 sm:py-20 md:py-32">
                <div className="mb-8 flex flex-col gap-3 sm:mb-14 sm:gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">Services</p>
                        <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl">Pick the right support for your next build.</h2>
                    </div>
                    <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                        Each service is designed around a business outcome, not just a technical feature list.
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {SERVICES.map((service) => (
                        <GlassCard key={service.title} hoverEffect className="flex h-full flex-col p-5 sm:p-6">
                            <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:items-start sm:justify-between">
                                <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary sm:p-4">
                                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                                </div>
                                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-gray-300 sm:px-3 sm:text-xs">
                                    {service.highlight}
                                </span>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold sm:mb-3 sm:text-2xl">{service.title}</h3>
                            <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:mb-6">{service.description}</p>
                            <div className="mt-auto space-y-2.5 sm:space-y-3">
                                {service.deliverables.map((deliverable) => (
                                    <div key={deliverable} className="flex items-start gap-2 text-sm text-gray-300">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <span>{deliverable}</span>
                                    </div>
                                ))}
                            </div>
                            <QuoteActions topic={service.title} className="mt-5 sm:mt-6" />
                        </GlassCard>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="py-12 sm:py-20 md:py-32">
                <div className="mb-8 text-center sm:mb-14">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">How it works</p>
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl">A simple path from idea to launch.</h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
                    {PROCESS_STEPS.map((step, index) => (
                        <GlassCard key={step.title} className="p-5 sm:p-6">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white sm:mb-5 sm:h-11 sm:w-11 sm:text-lg">
                                {index + 1}
                            </div>
                            <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                        </GlassCard>
                    ))}
                </div>

                <GlassCard className="mt-8 flex flex-col items-stretch justify-between gap-5 p-5 sm:mt-10 sm:gap-6 sm:p-8 md:flex-row md:items-center">
                    <div>
                        <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary sm:mb-3">
                            <MessageCircle className="h-4 w-4" />
                            Not sure what you need?
                        </div>
                        <h3 className="text-lg font-semibold sm:text-2xl">Tell us the problem, and we will recommend the right service.</h3>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 font-medium text-white transition-all hover:bg-white/5 sm:w-auto sm:rounded-lg"
                    >
                        Contact us
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </GlassCard>
            </SectionWrapper>
        </div>
    );
}
