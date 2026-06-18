import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO, CONTACT_INFO } from "@/lib/constants";

const SERVICES_LINKS = [
    { href: "/services", label: "AI Agents & Chatbots" },
    { href: "/services", label: "Web Applications" },
    { href: "/services", label: "Mobile Applications" },
    { href: "/services", label: "Business Automation" },
    { href: "/services", label: "System Integration" },
];

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/60 backdrop-blur-lg relative z-10">
            <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-5">
                            <div className="relative h-10 w-32">
                                <Image
                                    src="/tsl_logo.svg"
                                    alt="Turing Solutions Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {COMPANY_INFO.slogan}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-[0.15em] mb-5">Company</h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-[0.15em] mb-5">Services</h3>
                        <ul className="space-y-3">
                            {SERVICES_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-[0.15em] mb-5">Contact</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-white transition-colors group"
                                >
                                    <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                                    <span className="break-all">{CONTACT_INFO.email}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white transition-colors"
                                >
                                    <Phone className="w-4 h-4 shrink-0 text-primary" />
                                    <span>{CONTACT_INFO.phone}</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 shrink-0 text-primary" />
                                <span>{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
