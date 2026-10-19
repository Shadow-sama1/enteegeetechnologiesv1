import { CONTACT_EMAIL, LOCATION, SLOGAN } from "@/lib/constants";
import { Icon } from "@/components/Icon";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Contact() {
  return (
    <section id="contact" className="section-anchor">
      <div className="contact-band">
        <div className="container contact-band-inner">
          <div>
            <p className="eyebrow eyebrow-light"><span /> Your next step starts here</p>
            <h2>{SLOGAN}</h2>
            <p>Let’s talk about the website you’ve been imagining.</p>
          </div>
          <WhatsAppLink className="button button-light" icon>
            Get My Website Today <Icon name="arrow" size={18} />
          </WhatsAppLink>
        </div>
      </div>
      <div className="container contact-details">
        <div className="contact-detail"><span className="detail-icon"><Icon name="whatsapp" size={22} /></span><div><small>WhatsApp</small><WhatsAppLink className="detail-link">Start a conversation</WhatsAppLink></div></div>
        <div className="contact-detail"><span className="detail-icon"><Icon name="chat" size={22} /></span><div><small>Email</small><a className="detail-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></div>
        <div className="contact-detail"><span className="detail-icon"><Icon name="building" size={22} /></span><div><small>Based in</small><span className="detail-link">{LOCATION}</span></div></div>
        <div className="contact-detail"><span className="detail-icon"><Icon name="spark" size={22} /></span><div><small>Social</small><span className="detail-link">Coming soon</span></div></div>
      </div>
    </section>
  );
}
