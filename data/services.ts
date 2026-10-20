export type Service = {
  title: string;
  description: string;
  icon: "store" | "building" | "briefcase" | "church" | "search" | "tools" | "chat";
};

export const services: Service[] = [
  {
    title: "Business Websites",
    description: "At Enteegee Technologies, we aid businesses by creating modern, responsive websites that attract more customers and generate leads.",
    icon: "store",
  },
  {
    title: "Company Websites",
    description: "Our corporate websites are built with security and scalability in mind, ensuring that your company presents a credible image to clients as well as possible investors.",
    icon: "building",
  },
  {
    title: "Portfolio Websites",
    description: "Ideal for freelancers and creatives overall seeking to attract clients, this helps showcase your individual skills, experience and achievements.",
    icon: "briefcase",
  },
  {
    title: "Church Websites",
    description: "Our church websites help religious organizations connect with members, share messages effectively, and reach a wider audience online.",
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
