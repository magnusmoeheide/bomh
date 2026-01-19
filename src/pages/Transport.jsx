// src/pages/Transport.jsx
import Hero from "../components/Hero";
import Section from "../components/Section";

const imgs = {
  hero: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
  cargo:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  truck:
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
  city: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80", // cargo van + road
};

export default function Transport() {
  return (
    <div className="stack">
      <Hero
        title="Transport"
        subtitle="Transport coordination in Nairobi, Kenya — clear expectations, dependable execution, and updates when it matters."
        imageUrl={imgs.hero}
        bullets={[
          "Clear scope and timing",
          "Reliable coordination and updates",
          "Practical solutions when plans change",
        ]}
      />

      <Section
        eyebrow="Nairobi operations"
        title="Reliable transport, without the stress"
        lead="Transport succeeds or fails on coordination. We focus on the practical details: timing, routes, handoffs, constraints, and clear communication."
      >
        <div className="photoGrid">
          <img
            className="photo"
            src={imgs.city}
            alt="Nairobi roads"
            loading="lazy"
          />
          <img
            className="photo"
            src={imgs.truck}
            alt="Transport truck"
            loading="lazy"
          />
          <img
            className="photo"
            src={imgs.cargo}
            alt="Cargo logistics"
            loading="lazy"
          />
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="What we do"
        id="services"
        lead="We help coordinate transport needs with clarity and dependable follow-through."
      >
        <div className="grid3">
          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-truck infoIcon" />
              Transport planning
            </div>
            <p className="muted">
              Define what’s being moved, pickup/drop-off, timing, constraints,
              and the best approach.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-route infoIcon" />
              Execution & updates
            </div>
            <p className="muted">
              We coordinate the move and keep communication simple, so you
              always know status and next steps.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-rotate infoIcon" />
              Ongoing needs
            </div>
            <p className="muted">
              If you have repeat transport needs, we can set up a simple process
              that saves time.
            </p>
          </div>
        </div>

        <div className="grid3" style={{ marginTop: 12 }}>
          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-users infoIcon" />
              People movement
            </div>
            <p className="muted">
              Simple coordination for pickups, schedules, and timing —
              especially when being late is expensive.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-boxes-stacked infoIcon" />
              Goods movement
            </div>
            <p className="muted">
              Clear handoffs and practical constraints handled upfront so you
              avoid last-minute surprises.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-clock infoIcon" />
              Same-day coordination
            </div>
            <p className="muted">
              When it’s time-sensitive, we keep communication tight and the plan
              realistic.
            </p>
          </div>
        </div>

        <div className="ctaBar">
          <div>
            <div className="ctaTitle">Need transport support in Nairobi?</div>
            <div className="ctaText">
              Share pickup/drop-off, timing, and what’s being moved — we’ll
              reply with next steps.
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
