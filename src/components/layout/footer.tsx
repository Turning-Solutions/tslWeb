import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-lg relative z-10">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block">
                            <div className="relative h-12 w-36">
                                <Image
                                    src="/tsl_logo.svg"
                                    alt="Company Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
                            {COMPANY_INFO.description}
                        </p>
                        <div className="mt-6 flex gap-4">
                            {/* Social Icons could go here */}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Links</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Turing Solutions Limited. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
