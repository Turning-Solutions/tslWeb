"use client";
import Image from "next/image";

const CUSTOMERS = [
    { name: "Omniware", logo: "/projects/omni.png" },
    { name: "The Ceylon Spice Hub", logo: "/projects/csh.png" },
    { name: "Turing Solutions", logo: "/tsl_logo.svg" },
];

const REPEATED_CUSTOMERS = [...CUSTOMERS, ...CUSTOMERS, ...CUSTOMERS, ...CUSTOMERS];

export function CustomerLogoSlider() {
    return (
        <section className="py-14 bg-black/20 border-y border-white/5 relative z-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">
                Trusted by growing businesses
            </p>

            <div className="overflow-hidden flex relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

                <div className="flex animate-marquee hover:pause">
                    {[0, 1].map((i) => (
                        <div key={i} className="flex gap-10 px-6 shrink-0" aria-hidden={i > 0}>
                            {REPEATED_CUSTOMERS.map((customer, idx) => (
                                <div
                                    key={`${i}-${idx}`}
                                    className="flex items-center justify-center px-10"
                                >
                                    <Image
                                        src={customer.logo}
                                        alt={`${customer.name} logo`}
                                        width={220}
                                        height={72}
                                        className="max-h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
