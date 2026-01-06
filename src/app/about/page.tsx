import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, Rocket, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Modern Software Company",
    description: "Our mission is to democratize access to advanced technology.",
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold mb-6">Our Mission</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We exist to bridge the gap between complex technology and business growth. We believe that every company, regardless of size, deserves access to world-class software and AI tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <GlassCard className="text-center p-8">
                        <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                        <p className="text-muted-foreground">
                            We constantly explore new technologies to keep our clients ahead of the curve.
                        </p>
                    </GlassCard>
                    <GlassCard className="text-center p-8">
                        <Brain className="w-12 h-12 text-secondary mx-auto mb-6" />
                        <h3 className="text-xl font-semibold mb-4">Problem Solvers</h3>
                        <p className="text-muted-foreground">
                            We don't just write code; we solve real-world business problems with logic and creativity.
                        </p>
                    </GlassCard>
                    <GlassCard className="text-center p-8">
                        <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
                        <h3 className="text-xl font-semibold mb-4">Client Centric</h3>
                        <p className="text-muted-foreground">
                            Your success is our success. We build long-term partnerships based on trust and results.
                        </p>
                    </GlassCard>
                </div>

                <div className="mt-24">
                    <h2 className="text-4xl font-bold mb-12 text-center">Meet The Leadership</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Sarah Johnson", role: "CEO & Founder", desc: "Ex-Google tech lead with 15 years in AI & Scalable Systems." },
                            { name: "Michael Chen", role: "CTO", desc: "Architecture genius specializing in distributed cloud systems." },
                            { name: "Elena Rodriguez", role: "Head of Product", desc: "Product strategist focused on user-centric design principles." },
                            { name: "David Kim", role: "Lead Engineer", desc: "Full-stack expert mentoring our global dev network." }
                        ].map((member, i) => (
                            <GlassCard key={i} className="text-center p-6 group hover:border-primary/50 transition-colors">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                                <p className="text-sm text-muted-foreground">{member.desc}</p>
                            </GlassCard>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <h2 className="text-3xl font-bold mb-8">Global Developer Network</h2>
                        <GlassCard className="max-w-4xl mx-auto p-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/5 opacity-10"></div>
                            <div className="relative z-10">
                                <p className="text-xl text-muted-foreground mb-8">
                                    Beyond our core leadership, we are powered by a curated network of <span className="text-white font-bold">50+ specialized developers</span> across the globe. This allows us to scale teams rapidly and match the perfect skill set to your project's needs.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 opacity-50">
                                    {/* Abstract representation of network nodes */}
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </SectionWrapper >
        </div >
    );
}
