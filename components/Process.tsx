import { Icon } from "@/components/Icon";

const steps = [
  { title: "Chat with us", description: "Tell us about your idea, goals, and timeline on WhatsApp." },
  { title: "Plan and design", description: "We shape the right pages and look for your audience." },
  { title: "Build and launch", description: "We build, test, and launch your website with care." },
  { title: "Maintain and support", description: "We stay by your side as your website grows." },
];

export function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow"><span /> Simple from start to finish</p>
          <h2>Your website journey, <span>made easy</span></h2>
          <p>Clear communication, a thoughtful build, and support at every step.</p>
        </div>
        <ol className="process-grid">
          {steps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              {index < steps.length - 1 && <span className="step-line" aria-hidden="true" />}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
