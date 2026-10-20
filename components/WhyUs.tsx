import { Icon } from "@/components/Icon";

const benefits = [
  { title: "Fast turnaround", description: "Get online sooner, with a clear plan and timeline.", icon: "bolt" as const },
  { title: "Mobile-first design", description: "A polished experience on every screen size.", icon: "phone" as const },
  { title: "SEO-ready from day one", description: "A strong technical foundation helps people find you.", icon: "google" as const },
  { title: "Fair, transparent pricing", description: "Know what you’re getting before we get started.", icon: "price" as const },
  { title: "Support that sticks around", description: "We’re here to help long after your launch.", icon: "support" as const },
];

export function WhyUs() {
  return (
    <section id="why-us" className="section section-anchor why-section">
      <div className="container why-layout">
        <div className="why-intro">
          <p className="eyebrow"><span /> Why Enteegee Technologies ?</p>
          <h2>A great website, without the <span>usual hassle</span></h2>
          <p>AI is not the answer if you have no idea what you're doing. At Enteegee Technologies we listen, keep things clear, and build a website that fits the way you work.</p>
          <a href="#contact" className="text-link">Let’s talk about your goals <Icon name="arrow" size={18} /></a>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit, index) => (
            <article className="benefit-item" key={benefit.title}>
              <span className="benefit-icon"><Icon name={benefit.icon} size={22} /></span>
              <div><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
              <span className="benefit-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
