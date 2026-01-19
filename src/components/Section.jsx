// src/components/Section.jsx
export default function Section({ id, eyebrow, title, lead, children }) {
  return (
    <section id={id} className="section">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      {title ? <h2 className="h2">{title}</h2> : null}
      {lead ? <p className="lead">{lead}</p> : null}
      {children}
    </section>
  );
}
