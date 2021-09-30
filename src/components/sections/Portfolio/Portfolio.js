import React from "react";

import Item from "../../Portfolio-Item/Item";

import "./porfolio.css";

export default function Portfolio() {
  return (
    <div className="porfolio-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="portfolio">Latest works</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-filter">
            <span className="filter-item outer-shadow active" data-target="all">
              All
            </span>
            <span className="filter-item" data-target="web-application">
              Web Application
            </span>
            <span className="filter-item" data-target="fullstack">
              Full stack application
            </span>
            <span className="filter-item" data-target="mobile-app">
              Mobile app
            </span>
            <span className="filter-item" data-target="web-game">
              Games
            </span>
          </div>
        </div>
        <Item />
      </div>
    </div>
  );
}
