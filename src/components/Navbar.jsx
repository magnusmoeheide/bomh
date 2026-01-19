// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  "navlink" + (isActive ? " navlink--active" : "");

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brandMark">B</span>
          <span className="brandText">
            <span className="brandName">BOMH Holding</span>
            <span className="brandTag">Real Estate • Travels • Transport</span>
          </span>
        </Link>

        <nav className="nav">
          <NavLink to="/real-estate" className={linkClass}>
            Real Estate
          </NavLink>
          <NavLink to="/travels" className={linkClass}>
            Travels
          </NavLink>
          <NavLink to="/transport" className={linkClass}>
            Transport
          </NavLink>
          <a className="btn btn--primary" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
