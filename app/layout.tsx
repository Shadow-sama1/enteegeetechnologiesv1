import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, SLOGAN } from "@/lib/constants";
import { services } from "@/data/services";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Enteegee Technologies | Websites That Grow Your Business",
    template: "%s | Enteegee Technologies",
  },
  description:
    "Enteegee Technologies builds fast, mobile-friendly business, company, portfolio, and church websites in Nigeria—with SEO and support included.",
  keywords: [
    "web development Nigeria",
    "business website design",
    "company websites",
    "church websites",
    "portfolio websites",
    "website maintenance",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: SITE_NAME,
    title: "Enteegee Technologies | Websites That Grow Your Business",
    description:
      "Making Your Dream Website A Reality. Business, company, portfolio and church websites—built for growth.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Enteegee Technologies — Making Your Dream Website A Reality" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enteegee Technologies | Websites That Grow Your Business",
    description: "Making Your Dream Website A Reality.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0A2A66",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  slogan: SLOGAN,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  email: CONTACT_EMAIL,
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  description:
    "Website design, development, SEO optimization, maintenance, and support for businesses, companies, individuals, and churches.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}

// We had to alter the initial UI design after reviewing paystack's policies