import { MessageCircle } from "lucide-react";

const WHATSAPP_MESSAGE =
  "Hi Turing Solutions, I would like to discuss a software product for my business.";
const WHATSAPP_URL = `https://wa.me/94779705099?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect with us on WhatsApp"
      className="group fixed bottom-6 right-5 z-[60] inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20c45a] hover:shadow-[#25D366]/45 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-35 blur-md transition-opacity duration-300 group-hover:opacity-60" />
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-[#25D366] bg-white" />
      </span>
      <span className="hidden text-left leading-tight sm:block">
        <span className="block text-xs font-medium uppercase tracking-[0.18em] text-white/80">
          WhatsApp
        </span>
        <span className="block text-sm font-semibold">Connect with us</span>
      </span>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
