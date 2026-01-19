// src/pages/Home.jsx
import Hero from "../components/Hero";
import Section from "../components/Section";
import Cards from "../components/Cards";

const imgs = {
  hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80", // Nairobi skyline
  realEstate:
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", // Nairobi apartments
  travels:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", // beach + ocean
  transport:
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80", // Logistics transport
  nairobiStreet:
    "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80", // Nairobi street / CBD

  nairobiOffice:
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80",
  nairobiNature:
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80", // Nairobi National Park
  team1:
    "https://firebasestorage.googleapis.com/v0/b/the-watoto-library-792a3.appspot.com/o/staff_images%2Fbrandon%40thewatotoprogram.org?alt=media&token=04869136-0e13-41f2-ae1e-dca330fd7433",
  team2:
    "https://firebasestorage.googleapis.com/v0/b/the-watoto-library-792a3.appspot.com/o/staff_images%2Fheide%40thewatotoprogram.org?alt=media&token=67b39448-2fb4-4284-928b-3608082467b9",
};

export default function Home() {
  return (
    <div className="stack">
      <Hero
        title="BOMH Holding"
        subtitle="Client-first services in Nairobi, Kenya — real estate support, travel planning, and transport solutions. Clear communication, realistic plans, and dependable execution."
        imageUrl={imgs.hero}
        bullets={[
          "Based in Nairobi — local coordination that actually works",
          "Clear scope and next steps — no confusion",
          "Practical execution from start to finish",
        ]}
      />

      <Section
        eyebrow="Services"
        title="Three industries — one reliable partner"
        lead="Choose what you need help with. Each service is designed to reduce hassle, remove uncertainty, and get you a result you can trust."
      >
        <div id="services" />
        <Cards
          items={[
            {
              to: "/real-estate",
              title: "Real Estate",
              body: "Property search and shortlisting, evaluation support, coordination, and practical follow-through in Nairobi. We help you make confident decisions without wasting time.",
              img: imgs.realEstate,
            },
            {
              to: "/travels",
              title: "Travels",
              body: "Trip planning that’s actually usable: routing, bookings, itineraries, and local logistics in/around Nairobi and Kenya. Simple, organized, and aligned with your preferences.",
              img: imgs.travels,
            },
            {
              to: "/transport",
              title: "Transport",
              body: "Straightforward transport coordination for people and goods in Nairobi: clear expectations, reliable execution, and updates when it matters.",
              img: imgs.transport,
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="Nairobi, Kenya"
        title="Local presence, practical delivery"
        lead="We operate from Nairobi and support clients across the city and surrounding areas. Whether you need help finding a property, planning a trip, or coordinating transport, you get clear steps, fast feedback, and reliable follow-through."
      >
        <div className="split">
          <div>
            <div className="grid3">
              <div className="infoCard">
                <div className="infoTitle">
                  <i className="fa-solid fa-location-dot infoIcon" />
                  Where we operate
                </div>
                <p className="muted">
                  Nairobi and nearby areas. We coordinate on-the-ground details,
                  confirm availability, and keep you updated.
                </p>
              </div>

              <div className="infoCard">
                <div className="infoTitle">
                  <i className="fa-solid fa-shield-halved infoIcon" />
                  What you can expect
                </div>
                <p className="muted">
                  Clear recommendations, realistic timelines, and no surprises.
                  If there’s a tradeoff, we’ll make it visible.
                </p>
              </div>

              <div className="infoCard">
                <div className="infoTitle">
                  <i className="fa-solid fa-paper-plane infoIcon" />
                  How to start
                </div>
                <p className="muted">
                  Send your goal + timeframe. We reply with a short intake and a
                  concrete plan.
                </p>
              </div>
            </div>

            <div className="photoGrid home" style={{ marginTop: 14 }}>
              <img
                className="photo"
                src={imgs.nairobiStreet}
                alt="Nairobi street"
                loading="lazy"
              />
              <img
                className="photo"
                src={imgs.nairobiOffice}
                alt="Nairobi business"
                loading="lazy"
              />
              <img
                className="photo"
                src={imgs.nairobiNature}
                alt="Nairobi National Park"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Team"
        title="A trusted team that stays accountable"
        lead="You’ll work with real people who keep communication simple and follow through. We stay hands-on, coordinate the details, and keep you updated without noise."
      >
        <div className="teamGrid">
          <div className="teamCard">
            <img
              className="teamPhoto"
              src={imgs.team1}
              alt="Team member"
              loading="lazy"
            />
            <div className="teamBody">
              <div className="teamName">Brandon Okoth</div>
              <div className="teamRole">CEO</div>
              <p className="muted teamText">
                Hands-on in day-to-day operations and delivery. Brandon works
                directly with clients and partners, making sure plans are
                executed properly, issues are handled fast, and nothing falls
                between the cracks.
              </p>
            </div>
          </div>

          <div className="teamCard">
            <img
              className="teamPhoto"
              src={imgs.team2}
              alt="Team member"
              loading="lazy"
            />
            <div className="teamBody">
              <div className="teamName">Magnus Heide</div>
              <div className="teamRole">Chairman</div>
              <p className="muted teamText">
                Works on structure, strategy, and decision support. Magnus
                focuses on clarity, long-term direction, and making sure the
                operation runs smoothly without unnecessary complexity for
                clients.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="How we work"
        title="A simple process that respects your time"
        lead="We focus on clarity, speed, and practical delivery — without overcomplicating anything."
      >
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <div className="step-title">Quick intake</div>
              <p className="muted">
                You share your goal, timeline, and constraints. We ask a few
                targeted questions to get the essentials.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">2</div>
            <div>
              <div className="step-title">Clear plan</div>
              <p className="muted">
                We propose the best approach and options. If there are tradeoffs
                (time/cost/comfort), we make them visible so you can choose.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-num">3</div>
            <div>
              <div className="step-title">Execution</div>
              <p className="muted">
                We coordinate and deliver, and we keep you updated. Simple
                communication, no chasing.
              </p>
            </div>
          </div>
        </div>

        <div className="ctaBar" style={{ marginTop: 18 }}>
          <div>
            <div className="ctaTitle">Operating from Nairobi</div>
            <div className="ctaText">
              Need help this week? Send a short message — we’ll reply with next
              steps.
            </div>
          </div>
          <a className="btn btn--primary" href="#contact">
            Contact
          </a>
        </div>
      </Section>

      <Section
        eyebrow="Why clients choose us"
        title="Clarity, reliability, and real-world execution"
        lead="We don’t sell vague promises. We deliver practical help with clear communication — and we follow through."
      >
        <div className="grid3">
          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-comments infoIcon" />
              Clear communication
            </div>
            <p className="muted">
              You get a direct overview of what’s happening, what’s needed, and
              the next step — without endless back and forth.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-map infoIcon" />
              Local coordination
            </div>
            <p className="muted">
              Nairobi requires practical coordination. We confirm details,
              reduce friction, and keep the process moving.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoTitle">
              <i className="fa-solid fa-check-double infoIcon" />
              Dependable delivery
            </div>
            <p className="muted">
              We work with realistic timelines and practical solutions — and we
              communicate when anything changes.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Contact"
        title="Tell us what you need"
        lead="Send a short message with your goal and timeframe. We’ll respond with next steps."
      >
        <br />
        <a className="btn btn--primary" href="#contact">
          Contact options below
        </a>
      </Section>
    </div>
  );
}
