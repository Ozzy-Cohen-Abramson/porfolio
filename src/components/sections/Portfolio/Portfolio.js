import React, { useState } from "react";

import WebItem from "../../Portfolio-Item/webItem";
import FsItem from "../../Portfolio-Item/fsItem";
import MaItem from "../../Portfolio-Item/maItem";
import GameItem from "../../Portfolio-Item/gameItem";

import "./porfolio.css";

export default function Portfolio() {
  const [webApp, setWebApp] = useState(true);
  const [fs, setFS] = useState(false);
  const [mobileApp, setMobileApp] = useState(false);
  const [games, setGames] = useState(false);
  const activeClass = "outer-shadow active";

  const changeFilter = (e) => {
    if (!e.target.classList.contains("active")) {
      const target = e.target.getAttribute("data-target");
      if (target === "all") {
        setWebApp(false);
        setFS(false);
        setMobileApp(false);
        setGames(false);
      } else if (target === "web-application") {
        setWebApp(true);
        setFS(false);
        setMobileApp(false);
        setGames(false);
      } else if (target === "fullstack") {
        setWebApp(false);
        setFS(true);
        setMobileApp(false);
        setGames(false);
      } else if (target === "mobile-app") {
        setWebApp(false);
        setFS(false);
        setMobileApp(true);
        setGames(false);
      } else if (target === "web-game") {
        setWebApp(false);
        setFS(false);
        setMobileApp(false);
        setGames(true);
      }
    }
  };

  return (
    <div className="porfolio-section section" id="projects">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="portfolio">Latest works</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-filter">
            <span
              className={`filter-item ${webApp && activeClass}`}
              data-target="web-application"
              onClick={changeFilter}
            >
              Web Application
            </span>
            <span
              className={`filter-item ${fs && activeClass}`}
              data-target="fullstack"
              onClick={changeFilter}
            >
              Full stack application
            </span>
            <span
              className={`filter-item ${mobileApp && activeClass}`}
              data-target="mobile-app"
              onClick={changeFilter}
            >
              Mobile app
            </span>
            <span
              className={`filter-item ${games && activeClass}`}
              data-target="web-game"
              onClick={changeFilter}
            >
              Games
            </span>
          </div>
        </div>
      </div>
      {webApp && <WebItem />}
      {fs && <FsItem />}
      {mobileApp && <MaItem />}
      {games && <GameItem />}
    </div>
  );
}
