// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1 className="h2">Page not found</h1>
      <p className="muted">That route doesn’t exist.</p>
      <Link className="btn btn--primary" to="/">
        Go home
      </Link>
    </div>
  );
}
