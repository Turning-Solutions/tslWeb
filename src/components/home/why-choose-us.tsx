"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CheckCircle2, Trophy, Clock, Users } from "lucide-react";

export function WhyChooseUs() {
    return (
        <SectionWrapper id="why-us">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        We don't just deliver code; we deliver certainty. Our team brings years of enterprise-level experience to every project, ensuring scalability, security, and performance from day one.
                    </p>

                    <ul className="space-y-6">
                        {[
                            "Affordable, high-quality AI solutions",
                            "Customized systems tailored to business needs",
                            "Focus on customer experience and outreach",
                            "Secure and scalable architectures",
                            "Strong research and engineering foundation"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-lg">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div className="glass p-8 rounded-2xl text-center">
                            <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-sm text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="glass p-8 rounded-2xl text-center">
                            <Users className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">98%</div>
                            <div className="text-sm text-muted-foreground">Client Retention</div>
                        </div>
                    </div>
                    <div className="space-y-4 pt-12">
                        <div className="glass p-8 rounded-2xl text-center">
                            <Clock className="w-10 h-10 text-green-500 mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">5+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="glass p-8 rounded-2xl text-center border-primary/30 bg-primary/5">
                            <div className="text-sm font-semibold text-primary mb-2">Guaranteed</div>
                            <div className="text-xl font-bold">On-Time Delivery</div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
