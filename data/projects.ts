export type Project = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

// Replace these image paths, titles, and descriptions with your own project work.
export const projects: Project[] = [
  {
    title: "Tina Collections",
    category: "Business website",
    image: "/images/project-business.png",
    alt: "Blue and white placeholder preview for a business website",
  },
  {
    title: "Praise Feast 2.0 program",
    category: "Church website",
    image: "/images/project-church.png",
    alt: "Blue and white placeholder preview for a church website",
  },
  {
    title: "Adetech Energy Solutions",
    category: "Company website",
    image: "/images/project-company.png",
    alt: "Blue and white placeholder preview for a company website",
  },
];
