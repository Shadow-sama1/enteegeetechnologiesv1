import { WhatsAppLink } from "@/components/WhatsAppLink";

export function WhatsAppButton() {
  return (
    <WhatsAppLink
      className="floating-whatsapp"
      aria-label="Chat with Enteegee Technologies on WhatsApp"
      title="Chat with us on WhatsApp"
      icon
    >
      <span className="floating-label">Chat with us</span>
    </WhatsAppLink>
  );
}
