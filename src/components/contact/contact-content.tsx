"use client";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function ContactContent() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            <div>
                <h1 className="text-5xl font-bold mb-6">Let's Talk</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Have a project in mind? We'd love to hear from you.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground">Email</div>
                            <div className="text-lg font-medium">{CONTACT_INFO.email}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground">Phone</div>
                            <div className="text-lg font-medium">{CONTACT_INFO.phone}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground">Location</div>
                            <div className="text-lg font-medium">Innovation City, Tech Hub</div>
                        </div>
                    </div>
                </div>
            </div>

            <GlassCard className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Name</label>
                            <input className="w-full bg-black/20 border border-white/10 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Company</label>
                            <input className="w-full bg-black/20 border border-white/10 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="Company Inc." />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <textarea className="w-full bg-black/20 border border-white/10 rounded-lg h-32 p-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <Button type="submit" className="w-full gap-2">
                        Send Message <Send className="w-4 h-4" />
                    </Button>
                </form>
            </GlassCard>
        </div>
    );
}
