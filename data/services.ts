export type Service = {
  title: string;
  description: string;
  icon: "store" | "building" | "briefcase" | "church" | "search" | "tools" | "chat";
};

export const services: Service[] = [
  {
    title: "Business Websites",
    description: "Professional websites that help small and growing businesses win more customers.",
    icon: "store",
  },
  {
    title: "Company Websites",
    description: "A credible, scalable online presence that tells your company story clearly.",
    icon: "building",
  },
  {
    title: "Portfolio Websites",
    description: "Showcase your work, build your personal brand, and turn visitors into clients.",
    icon: "briefcase",
  },
  {
    title: "Church Websites",
    description: "Share events, sermons, giving options, and everything your members need.",
    icon: "church",
  },
  {
    title: "SEO Optimization",
    description: "Get found on Google with fast pages and search-friendly foundations.",
    icon: "search",
  },
  {
    title: "Maintenance",
    description: "Updates, security, backups, and performance checks handled for you.",
    icon: "tools",
  },
  {
    title: "Ongoing Support",
    description: "Get responsive, friendly help whenever your website needs attention.",
    icon: "chat",
  },
];
