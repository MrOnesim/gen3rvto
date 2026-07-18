import { MessageCircle } from "lucide-react";
import { social } from "./data";

export function WhatsappFab() {
  return (
    <a
      href={social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed z-40 right-4 bottom-20 md:right-6 md:bottom-20 w-12 h-12 rounded-full bg-brand grid place-items-center shadow-[0_8px_24px_#0008]"
    >
      <MessageCircle fill="currentColor" className="w-[21px]" />
    </a>
  );
}
