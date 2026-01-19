// src/pages/RealEstate.jsx
import Hero from "../components/Hero";
import Section from "../components/Section";

const imgs = {
  hero: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1600&q=80", // Nairobi buildings
  apt: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
  interior:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  keys: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
};

export default function RealEstate() {
  return (
    <div className="stack">
      <Hero
        title="Real Estate"
        subtitle="Real estate support in Nairobi, Kenya — for clients who want clarity and follow-through. We help you evaluate options, avoid surprises, and coordinate the practical steps."
        imageUrl={imgs.hero}
        bullets={[
          "Shortlisting and decision support (Nairobi)",
          "Practical coordination and follow-through",
          "Clear next steps and timelines",
        ]}
      />

      <Section
        eyebrow="Nairobi focus"
        title="Property decisions without the guesswork"
        lead="Finding the right property in Nairobi can be time-consuming. We keep it practical: confirm details, compare options, highlight risks, and coordinate the next steps so you don’t waste time."
      >
        <div className="photoGrid">
          <img
            className="photo"
            src={imgs.apt}
            alt="Nairobi apartment"
            loading="lazy"
          />
          <img
            className="photo"
            src={imgs.interior}
            alt="Interior"
            loading="lazy"
          />
          <img className="photo" src={imgs.keys} alt="Keys" loading="lazy" />
        </div>
      </Section>

      <Section
        eyebrow="What we do"
        title="Services"
        id="services"
        lead="We can support you end-to-end, or help with a specific part of the process."
      >
        <div className="grid3">
          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-building infoIcon" />
              Property search & shortlist
            </div>
            <p className="muted">
              Define requirements, shortlist options, and compare tradeoffs
              (location, budget, security, commute, and practical fit).
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-clipboard-check infoIcon" />
              Evaluation & risk checks
            </div>
            <p className="muted">
              We look for practical risks and common pitfalls: documentation,
              constraints, total cost, and what may become a problem later.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-handshake infoIcon" />
              Coordination
            </div>
            <p className="muted">
              Viewings, communication, next steps, and practical logistics — we
              coordinate so you don’t waste time.
            </p>
          </div>
        </div>

        <div className="grid3" style={{ marginTop: 12 }}>
          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-key infoIcon" />
              Move-in support
            </div>
            <p className="muted">
              Practical checklists, setup coordination, and clarity on what to
              confirm before you commit.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-clock infoIcon" />
              Short-term stays
            </div>
            <p className="muted">
              If you need a temporary base in Nairobi, we can help shortlist and
              coordinate options that match your comfort and budget.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-arrows-rotate infoIcon" />
              Ongoing help
            </div>
            <p className="muted">
              For repeat needs, we can create a simple workflow so property
              decisions get faster over time.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Who it’s for"
        title="Great fit if you…"
        lead="This service is ideal when time is limited or you want to reduce risk."
      >
        <ul className="list">
          <li>
            Need a structured shortlist and clear recommendation in Nairobi
          </li>
          <li>Want practical support (not generic advice)</li>
          <li>Prefer someone who can coordinate and push things forward</li>
          <li>Want clarity on tradeoffs before committing</li>
        </ul>

        <div className="ctaBar">
          <div>
            <div className="ctaTitle">
              Want help with a Nairobi property decision?
            </div>
            <div className="ctaText">
              Send preferred areas, budget, timeline, and must-haves — we’ll
              reply with a plan.
            </div>
          </div>
          <a className="btn btn--primary" href="#contact">
            Contact
          </a>
        </div>
      </Section>
    </div>
  );
}
