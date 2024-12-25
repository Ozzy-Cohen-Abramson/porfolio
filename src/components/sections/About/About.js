import React, { useEffect, useState, useRef } from "react";

import aboutImg from "../../../img/about.png";
import CV from "../../../Oz_Cohen_Abramson_CV.pdf";
import Skills from "../../Skills/Skills";
import Experience from "../../Experience/Experience";
import Education from "../../Educetion/Education";

import "./about.css";

export default function About() {
  const [skills, setSkills] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  let aboutRef = useRef(null);

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
    <section className='about-section section' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='section-title'>
            <h2 data-heading='main info'>About me</h2>
          </div>
        </div>
        <div className='row about-body'>
          <div className='about-img'>
            <div className='img-box inner-shadow'>
              <img src={aboutImg} alt='profile-pic' className='outer-shadow' />
            </div>
            <div className='social-links'>
              <a
                href='https://www.facebook.com/dinebag.oz/'
                target='_blank'
                className='outer-shadow hover-in-shadow facebook'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                href='https://github.com/Ozzy-Cohen-Abramson'
                target='_blank'
                className='outer-shadow hover-in-shadow github'>
                <i className='fab fa-github'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/ozzy-cohen-abramson-%F0%9F%8E%97%EF%B8%8F-232304209/'
                target='_blank'
                className='outer-shadow hover-in-shadow linked'>
                <i className='fab fa-linkedin-in '></i>
              </a>
            </div>
          </div>
          <div className='about-info'>
            <p>
              <span>Hey! My name is Ozzy and I am a Full-Stack Developer.</span>
              3 Years ago I fell in love with the world of coding. As I enjoy
              challenges, I try to push my self as far as I can every day. I
              also keep my mind open to new approaches to solve day-to-day
              problems.
            </p>
            <p>
              I think that the <span>most</span> unique aspect about being a
              developer is that I know that I can't stay put and the information
              I have today will never be sufficient.
            </p>
            <div className='about-buttons'>
              <a
                href={CV}
                target='_black'
                className='btn-1 outer-shadow hover-in-shadow'>
                Download CV
              </a>
              <a href='#contact' className='btn-1 outer-shadow hover-in-shadow'>
                Hire Me
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='about-tabs'>
            <span
              className={`tab-item ${skills && activeClass}`}
              data-target='.skills'
              onClick={ChangeAbout}>
              Skills
            </span>
            <span
              className={`tab-item ${experience && activeClass}`}
              data-target='.experience'
              onClick={ChangeAbout}>
              Experience
            </span>
            <span
              className={`tab-item ${education && activeClass}`}
              data-target='.education'
              onClick={ChangeAbout}>
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
