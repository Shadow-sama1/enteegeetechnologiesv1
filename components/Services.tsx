import { services } from "@/data/services";
import { Icon } from "@/components/Icon";

export function Services() {
  return (
    <section id="services" className="section section-anchor services-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow"><span /> What we do</p>
          <h2>Everything you need to <span>show up online</span></h2>
          <p>From your first website to the ongoing care that keeps it working, we make the web simple.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon"><Icon name={service.icon} size={25} /></span>
              <span className="card-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
