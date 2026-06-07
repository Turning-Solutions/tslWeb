import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/94779705099";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105 hover:bg-[#20c45a]"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
