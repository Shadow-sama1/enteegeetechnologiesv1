import Image from "next/image";
import { Icon } from "@/components/Icon";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const trustPoints = ["Fast delivery", "Mobile-friendly", "SEO-ready", "Ongoing support"];

export function Hero() {
  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span /> Websites built around your next big idea</p>
          <h1>We Build Websites That <span>Grow Your Business</span></h1>
          <p className="hero-slogan">Making Your Dream Website A Reality</p>
          <p className="hero-description">
            Business, company, portfolio and church websites, built fast, optimized for search, and supported long after launch.
          </p>
          <div className="hero-actions">
            <WhatsAppLink className="button button-light" icon>
              Get My Website Today
              <Icon name="arrow" size={18} />
            </WhatsAppLink>
            <a className="button button-ghost" href="#services">View Our Services</a>
          </div>
          <div className="trust-strip" aria-label="Our service commitments">
            {trustPoints.map((point) => (
              <span key={point}><Icon name="check" size={15} />{point}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/images/hero-devices.svg"
              alt="Website displayed on desktop, tablet, and phone screens"
              width={720}
              height={590}
              priority
              sizes="(max-width: 767px) 92vw, (max-width: 1200px) 50vw, 590px"
              className="hero-image"
            />
          </div>
          <div className="hero-note"><span className="note-icon"><Icon name="spark" size={18} /></span><span><strong>Designed for people</strong><small>Made to move your business forward</small></span></div>
        </div>
      </div>
      <a href="#services" className="hero-scroll" aria-label="Scroll to services"><span /></a>
    </section>
  );
}
