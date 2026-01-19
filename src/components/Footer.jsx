// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-inner footer-inner--two-col">
        <div className="footer-col">
          <div className="footer-title">BOMH Holding LTD.</div>

          <p className="muted">
            Client-first services operating from <strong>Nairobi, Kenya</strong>
            . We support real estate decisions, travel planning, and transport
            coordination with clear communication and practical follow-through.
          </p>

          <ul className="footer-list" style={{ marginTop: 12 }}>
            <li>Local coordination in Nairobi & surrounding areas</li>
            <li>Clear scope, realistic timelines</li>
            <li>Reliable execution, no unnecessary complexity</li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-title">Contact</div>

          <ul className="footer-list">
            <li>
              <span className="label">Email:</span>{" "}
              <a href="mailto:hello@bomh.example">bomh.co.ke@gmail.com</a>
            </li>
            <li>
              <span className="label">Phone / WhatsApp:</span>{" "}
              <a href="tel:+254700000000">+254 721 499 429</a>
            </li>
            <li>
              <span className="label">Base:</span> Nairobi, Kenya
            </li>
            <li>
              <span className="label">Hours:</span> Mon–Fri, 08:30–17:30 (EAT)
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom footer-bottom--centered">
        <div>© {year} BOMH Holding. Operating from Nairobi, Kenya.</div>
        <div className="footer-links">
          <a href="/">Privacy policy</a>
          <a href="/">Terms of service</a>
        </div>
      </div>
    </footer>
  );
}
