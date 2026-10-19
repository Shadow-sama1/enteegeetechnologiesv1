import { WHATSAPP_NUMBER } from "@/lib/constants";

export function getWhatsAppLink(message: string): string {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Enteegee Technologies, I'd like to get my website today.";
