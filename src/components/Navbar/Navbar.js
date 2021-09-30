import React from "react";

import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-menu">
      <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
      <div className="nav-menu-inner">
        <ul>
          <li>
            <a href="#" className="inner-shadow active">
              home
            </a>
          </li>
          <li>
            <a href="#" className="outer-shadow hover-in-shadow">
              about
            </a>
          </li>
          <li>
            <a href="#" className="outer-shadow hover-in-shadow">
              services
            </a>
          </li>
          <li>
            <a href="#" className="outer-shadow hover-in-shadow">
              portfolio
            </a>
          </li>
          <li>
            <a href="#" className="outer-shadow hover-in-shadow">
              testimonial
            </a>
          </li>
          <li>
            <a href="#" className="outer-shadow hover-in-shadow">
              cantact
            </a>
          </li>
        </ul>
      </div>
      <p className="copyrught-text">&copy; 2021 Odention</p>
    </nav>
  );
}
