import React from "react";

import "./navbar.css";

export default function Navbar(props) {
  const closeNav = () => {
    props.setNav(false);
  };

  const introBtn = () => {
    props.setMain(false);
  };

  return (
    <nav className='nav-menu active-nav'>
      <div
        className='close-nav-menu outer-shadow hover-in-shadow'
        onClick={closeNav}>
        &times;
      </div>
      <div className='nav-menu-inner'>
        <ul>
          <li>
            <a
              href='#header'
              className='inner-shadow active'
              onClick={closeNav}>
              home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='outer-shadow hover-in-shadow'
              onClick={closeNav}>
              about
            </a>
          </li>
          <li>
            <a
              href='#services'
              className='outer-shadow hover-in-shadow'
              onClick={closeNav}>
              services
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='outer-shadow hover-in-shadow'
              onClick={closeNav}>
              portfolio
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="outer-shadow hover-in-shadow"
              onClick={closeNav}
            >
              testimonial
            </a>
          </li> */}
          <li>
            <a
              href='#contact'
              className='outer-shadow hover-in-shadow'
              onClick={closeNav}>
              cantact
            </a>
          </li>
        </ul>
      </div>
      <p className='copyrught-text'>&copy; 2021 Odention</p>
    </nav>
  );
}
