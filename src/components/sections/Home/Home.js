import React from "react";
import Effects from "../../Effects/Effects";
import profileImg from "../../../img/profile.png";
import "./home.css";

export default function Home() {
  return (
    <div>
      <section className="home-section section">
        <Effects />
        <div className="container">
          <div className="row full-screen align-itens-center">
            <div className="home-text">
              <p>Hello</p>
              <h2>I'm Ozzy</h2>
              <h1>Fullstack developer</h1>
              <a href="#about" className="btn-1 outer-shadow hover-in-shadow">
                More About Me
              </a>
            </div>
            <div className="home-img">
              <div className="img-box inner-shadow">
                <img
                  className="outer-shadow"
                  src={profileImg}
                  alt="profile-pic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
