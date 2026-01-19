// src/components/Hero.jsx
export default function Hero({ title, subtitle, bullets = [], imageUrl }) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="pill">Client-oriented • Practical • Reliable</div>
          <h1 className="h1">{title}</h1>
          <p className="hero-sub">{subtitle}</p>

          <div className="hero-ctas">
            <a className="btn btn--primary" href="#contact">
              Get in touch
            </a>
            <a className="btn btn--ghost" href="#services">
              See services
            </a>
          </div>

          <ul className="bullets">
            {bullets.map((b) => (
              <li key={b}>
                <span className="check">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-media">
          <img className="hero-img" src={imageUrl} alt="" loading="lazy" />
          <div className="hero-card">
            <div className="hero-card-title">Simple process</div>
            <div className="hero-card-text">
              Tell us your goal → get a clear plan → we coordinate and deliver.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
