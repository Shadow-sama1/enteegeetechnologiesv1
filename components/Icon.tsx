import type { ReactNode } from "react";

type IconName =
  | "store"
  | "building"
  | "briefcase"
  | "church"
  | "search"
  | "tools"
  | "chat"
  | "bolt"
  | "phone"
  | "google"
  | "price"
  | "support"
  | "arrow"
  | "check"
  | "whatsapp"
  | "menu"
  | "close"
  | "spark";

const paths: Record<IconName, ReactNode> = {
  store: <><path d="M3 10h18l-2-7H5l-2 7Z" /><path d="M5 10v11h14V10M9 21v-7h6v7" /><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /></>,
  building: <><path d="M3 21h18M5 21V5l7-3 7 3v16M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
  church: <><path d="M3 21h18M5 21v-9l7-4 7 4v9M9 21v-5h6v5M12 2v6M9 5h6" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5M8 10.5h5M10.5 8v5" /></>,
  tools: <><path d="m14.7 6.3 3-3a5 5 0 0 0-6.4 6.4L4 17a2.1 2.1 0 0 0 3 3l7.3-7.3a5 5 0 0 0 6.4-6.4l-3 3-3-3Z" /></>,
  chat: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>,
  bolt: <><path d="m13 2-3 8H5l6 12 3-8h5L13 2Z" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  google: <><circle cx="12" cy="12" r="9" /><path d="M21 12h-8v4h4a5 5 0 1 1-1.5-7.6" /></>,
  price: <><path d="M20 13 13 20l-9-9V4h7l9 9Z" /><circle cx="8.5" cy="8.5" r="1" /></>,
  support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13a2 2 0 0 0 2 2h2v-5H6a2 2 0 0 0-2 2ZM20 13a2 2 0 0 1-2 2h-2v-5h2a2 2 0 0 1 2 2ZM16 19c-.8 1-2 1-4 1" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  whatsapp: <><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.8a8.5 8.5 0 1 1 16.2-3.9Z" /><path d="M8.3 8.2c.3-.6.6-.6.9-.6h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5s-.1.9-.7 1.3c-.5.4-1.2.6-2 .4-1-.2-2.2-.8-3.5-2-1.4-1.3-2.1-2.7-2.3-3.7-.2-.8.1-1.4.5-1.7Z" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3ZM19 15l1.1 2.9L23 19l-2.9 1.1L19 23l-1.1-2.9L15 19l2.9-1.1L19 15Z" /></>,
};

export function Icon({
  name,
  className,
  size = 24,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
