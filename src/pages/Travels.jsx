// src/pages/Travels.jsx
import Hero from "../components/Hero";
import Section from "../components/Section";

const imgs = {
  hero: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
  city: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
  safari:
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
  coast:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
};

export default function Travels() {
  return (
    <div className="stack">
      <Hero
        title="Travels"
        subtitle="Travel planning from Nairobi, Kenya — clear itineraries, coordinated bookings, and local logistics that make the trip feel smooth."
        imageUrl={imgs.hero}
        bullets={[
          "Itineraries you can actually follow",
          "Bookings aligned with your preferences",
          "Local logistics + realistic backup plans",
        ]}
      />

      <Section
        eyebrow="Nairobi base"
        title="Trips that feel easy"
        lead="Whether you’re starting in Nairobi or visiting Nairobi, we plan trips with realistic pacing, smart routing, and the small details that usually create stress handled upfront."
      >
        <div className="photoGrid">
          <img
            className="photo"
            src={imgs.city}
            alt="Nairobi city"
            loading="lazy"
          />
          <img
            className="photo"
            src={imgs.safari}
            alt="Nairobi National Park"
            loading="lazy"
          />
          <img
            className="photo"
            src={imgs.coast}
            alt="Kenya coast travel"
            loading="lazy"
          />
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="What we help with"
        id="services"
        lead="From a simple weekend trip to a multi-stop journey — we plan around your comfort, budget and time."
      >
        <div className="grid3">
          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-route infoIcon" />
              Trip planning & routing
            </div>
            <p className="muted">
              A realistic plan with good pacing, smart routing, and clear
              priorities — no rushed “tourist checklist” schedules.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-calendar-check infoIcon" />
              Bookings & coordination
            </div>
            <p className="muted">
              We coordinate flights, stays, activities and transfers — and keep
              it organized so you don’t have to.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-map-location-dot infoIcon" />
              Local logistics
            </div>
            <p className="muted">
              Transport, timings, practical tips, and Plan B options so the trip
              stays smooth even when things change.
            </p>
          </div>
        </div>

        <div className="grid3" style={{ marginTop: 12 }}>
          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-city infoIcon" />
              Nairobi day planning
            </div>
            <p className="muted">
              If you’re in Nairobi for a short time, we can plan a realistic day
              with the right flow and timings.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-umbrella-beach infoIcon" />
              Kenya add-ons
            </div>
            <p className="muted">
              Coastal trips, safari add-ons, and multi-stop plans — organized so
              you don’t waste days on logistics.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-people-group infoIcon" />
              Group coordination
            </div>
            <p className="muted">
              If multiple people are traveling, we keep the plan clear and
              aligned so it doesn’t become chaos.
            </p>
          </div>
        </div>

        <div className="ctaBar">
          <div>
            <div className="ctaTitle">Planning a trip from or to Nairobi?</div>
            <div className="ctaText">
              Send destination(s), dates, budget range, and travel style — we’ll
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
