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
        <section className="py-12 bg-black/20 border-y border-white/5 overflow-hidden flex relative z-10">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

            <div className="flex animate-marquee hover:pause">
                {[0, 1].map((i) => (
                    <div key={i} className="flex gap-8 px-4 shrink-0" aria-hidden={i > 0}>
                        {REPEATED_CUSTOMERS.map((customer, idx) => (
                            <div
                                key={`${i}-${idx}`}
                                className="h-20 w-56 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 flex items-center justify-center"
                            >
                                <Image
                                    src={customer.logo}
                                    alt={`${customer.name} logo`}
                                    width={180}
                                    height={56}
                                    className="max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
