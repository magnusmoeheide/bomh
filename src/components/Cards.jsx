// src/components/Cards.jsx
import { Link } from "react-router-dom";

function Card({ to, title, body, img }) {
  return (
    <Link to={to} className="card">
      <div className="card-imgWrap">
        <img className="card-img" src={img} alt="" loading="lazy" />
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-text">{body}</p>
        <div className="card-cta">
          Explore <span aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function Cards({ items = [] }) {
  return (
    <div className="cards">
      {items.map((it) => (
        <Card key={it.to} {...it} />
      ))}
    </div>
  );
}
