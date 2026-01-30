import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, Rocket, Heart, Eye, Target, Zap, Shield, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Modern Software Company",
    description: "Our mission is to democratize access to advanced technology.",
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                {/* Intro Section */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        Turing Solutions Ltd is a technology-driven company specializing in the design and development of affordable, intelligent software solutions that enhance customer experience and expand business outreach.
                    </p>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    <GlassCard className="p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Eye className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To empower businesses with affordable, innovative, and intelligent digital solutions that transform customer engagement and drive sustainable business growth.
                            </p>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To build affordable AI-powered and digital solutions that uplift customer experience, strengthen business outreach, and enable organizations to compete effectively in the digital era.
                            </p>
                        </div>
                    </GlassCard>
                </div>

                {/* Core Values */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Core Values</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Affordability First", desc: "Making advanced technology accessible to all businesses", icon: Users },
                            { title: "Customer-Centered", desc: "Designing solutions that enhance real user experiences", icon: Heart },
                            { title: "Growth-Oriented", desc: "Technology that directly supports business expansion", icon: Rocket },
                            { title: "Integrity & Trust", desc: "Secure, reliable, and transparent systems", icon: Shield },
                            { title: "Excellence", desc: "High-quality solutions driven by research and innovation", icon: Zap }
                        ].map((value, i) => (
                            <GlassCard key={i} hoverEffect className="text-center p-8 h-full flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white/80">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {value.desc}
                                </p>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Our Approach */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Approach</h2>
                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {[
                            "Understand business challenges and customer needs",
                            "Design intelligent and affordable solutions",
                            "Develop scalable and secure systems",
                            "Deploy, integrate, and optimize continuously",
                            "Measure impact and support business growth"
                        ].map((step, i) => (
                            <GlassCard key={i} className="flex items-center gap-6 p-6 hover:bg-white/5 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-black shrink-0 shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]">
                                    {i + 1}
                                </div>
                                <p className="text-lg font-medium text-white/90">{step}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Meet The Leadership</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Sarah Johnson", role: "CEO & Founder", desc: "Ex-Google tech lead with 15 years in AI & Scalable Systems." },
                            { name: "Michael Chen", role: "CTO", desc: "Architecture genius specializing in distributed cloud systems." },
                            { name: "Elena Rodriguez", role: "Head of Product", desc: "Product strategist focused on user-centric design principles." },
                            { name: "David Kim", role: "Lead Engineer", desc: "Full-stack expert mentoring our global dev network." }
                        ].map((member, i) => (
                            <GlassCard key={i} className="text-center p-8 group hover:border-primary/50 transition-colors">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-3xl font-bold text-muted-foreground group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all shadow-xl group-hover:shadow-primary/20">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <div className="text-primary text-sm font-medium mb-4">{member.role}</div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </SectionWrapper >
        </div >
    );
}
