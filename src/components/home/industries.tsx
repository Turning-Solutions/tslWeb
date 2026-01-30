"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Building2, Stethoscope, ShoppingBag, GraduationCap, Factory, Truck, Rocket } from "lucide-react";

const INDUSTRIES = [
    { name: "Finance & FinTech", icon: Building2 },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Retail & E-commerce", icon: ShoppingBag },
    { name: "Education", icon: GraduationCap },
    { name: "Manufacturing", icon: Factory },
    { name: "Logistics", icon: Truck },
    { name: "Startups & SMEs", icon: Rocket }
];

export function Industries() {
    return (
        <SectionWrapper id="industries" className="bg-black/40">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Transforming tailored sectors with specialized AI and digital solutions.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {INDUSTRIES.map((industry, i) => (
                    <GlassCard key={i} hoverEffect className="flex flex-col items-center justify-center p-8 text-center group">
                        <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <industry.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-semibold text-lg">{industry.name}</h3>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
