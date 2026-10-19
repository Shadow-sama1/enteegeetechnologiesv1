import type { AnchorHTMLAttributes, ReactNode } from "react";
import { DEFAULT_WHATSAPP_MESSAGE, getWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "@/components/Icon";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  message?: string;
  icon?: boolean;
};

export function WhatsAppLink({
  children,
  message = DEFAULT_WHATSAPP_MESSAGE,
  icon = false,
  className,
  ...props
}: Props) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {icon && <Icon name="whatsapp" size={20} />}
      {children}
    </a>
  );
}
