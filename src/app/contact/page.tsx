import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ContactContent } from "@/components/contact/contact-content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Modern Software Company",
    description: "Get in touch with us to start your next project.",
};

export default function ContactPage() {
    return (
        <div className="pt-20">
            <SectionWrapper className="min-h-[80vh] flex items-center">
                <ContactContent />
            </SectionWrapper>
        </div>
    );
}
