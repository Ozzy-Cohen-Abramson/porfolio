import React, { useEffect, useState } from "react";

import profileImg from "../../../img/profile.png";
import CV from "../../../Oz_Cohen_Abramson.docx.pdf";
import Skills from "../../Skills/Skills";
import Experience from "../../Experience/Experience";
import Education from "../../Educetion/Education";

import "./about.css";

export default function About() {
  const [skills, setSkills] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);

  const activeClass = "outer-shadow active";

  const ChangeAbout = (e) => {
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      const target = e.target.getAttribute("data-target");
      if (target === ".experience") {
        setExperience(true);
        setSkills(false);
        setEducation(false);
      } else if (target === ".education") {
        setExperience(false);
        setSkills(false);
        setEducation(true);
      } else if (target === ".skills") {
        setExperience(false);
        setSkills(true);
        setEducation(false);
      }
    }
  };

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="main info">About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <img
                src={profileImg}
                alt="profile-pic"
                className="outer-shadow"
              />
            </div>
            <div className="social-links">
              <a
                href="https://www.facebook.com/dinebag.oz/"
                target="_blank"
                className="outer-shadow hover-in-shadow facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://github.com/Ozzy-Cohen-Abramson"
                target="_blank"
                className="outer-shadow hover-in-shadow github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ozzy-cohen-abramson-232304209/"
                target="_blank"
                className="outer-shadow hover-in-shadow linked"
              >
                <i className="fab fa-linkedin-in "></i>
              </a>
            </div>
          </div>
          <div className="about-info">
            <p>
              <span>Hey! My name is Ozzy. I'm fullstack developer.</span> Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem
              ipsa et inventore, vel harum, deleniti, eveniet sunt perferendis
              ab earum! Laudantium totam saepe, atque necessitatibus velit illum
              maiores quam. ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia quidem ipsa et inventore, vel harum, deleniti, eveniet
              sunt perferendis ab earum! Laudantium totam saepe, atque
              necessitatibus velit illum maiores quam. ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <p>
              Mollitia quidem ipsa et inventore, vel harum, deleniti, eveniet
              sunt perferendis ab earum! Laudantium totam saepe, atque
              necessitatibus velit illum maiores quam.
            </p>
            <a
              href={CV}
              target="_black"
              className="btn-1 outer-shadow hover-in-shadow"
            >
              Download CV
            </a>
            <a href="#" className="btn-1 outer-shadow hover-in-shadow">
              Hire Me
            </a>
          </div>
        </div>
        <div className="row">
          <div className="about-tabs">
            <span
              className={`tab-item ${skills && activeClass}`}
              data-target=".skills"
              onClick={ChangeAbout}
            >
              Skills
            </span>
            <span
              className={`tab-item ${experience && activeClass}`}
              data-target=".experience"
              onClick={ChangeAbout}
            >
              Experience
            </span>
            <span
              className={`tab-item ${education && activeClass}`}
              data-target=".education"
              onClick={ChangeAbout}
            >
              Education
            </span>
          </div>
        </div>

        {skills && <Skills />}
        {experience && <Experience />}
        {education && <Education />}
      </div>
    </section>
  );
}
