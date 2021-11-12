import React from "react";

import "./header.css";

export default function Header(props) {
  const showNav = () => {
    props.setNav(true);
  };

  return (
    <header className='header' id='header'>
      <div className='header-container'>
        <div className='row justify-content-between'>
          <div
            className='hamburger-btn outer-shadow hover-in-shadow'
            onClick={showNav}>
            <span> </span>
          </div>
        </div>
      </div>
    </header>
  );
}
