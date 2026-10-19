import { Logo } from "@/components/Logo";
import { SLOGAN, CONTACT_EMAIL, LOCATION } from "@/lib/constants";
import { services } from "@/data/services";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const quickLinks = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Why Us", "#why-us"],
  ["Contact", "#contact"],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><Logo /><p>{SLOGAN}</p><WhatsAppLink className="footer-chat">Let’s build something <span>→</span></WhatsAppLink></div>
        <div className="footer-column"><h2>Explore</h2>{quickLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
        <div className="footer-column"><h2>Services</h2>{services.slice(0, 5).map((service) => <a href="#services" key={service.title}>{service.title}</a>)}</div>
        <div className="footer-column"><h2>Get in touch</h2><WhatsAppLink>WhatsApp us</WhatsAppLink><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><span>{LOCATION}</span></div>
      </div>
      <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Enteegee Technologies. All rights reserved.</span><span>Thoughtfully built for the web.</span></div></div>
    </footer>
  );
}
