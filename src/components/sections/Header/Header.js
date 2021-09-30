import React from "react";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="logo">
            <a href="index.html">Z</a>
          </div>
          <div className="hamburger-btn outer-shadow hover-in-shadow">
            <span> </span>
          </div>
        </div>
      </div>
    </header>
  );
}
