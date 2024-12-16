import React from "react";
import "../sections/About/about.css";
import { programmingSkills, toolSkills } from "./skillsList";
export default function Skills() {
  return (
    <div className='row'>
      <div className='skills tab-content active'>
        <div className='row skills-row'>
          {programmingSkills.map((skill, index) => (
            <div
              className='skill-item outer-shadow'
              key={`programming-${index}`}>
              <i className={`${skill} dev-icon`}></i>
            </div>
          ))}
        </div>
        <div className='section-title'>
          <h2>Tools</h2>
        </div>
        <div className='row skills-row'>
          {toolSkills.map((skill, index) => (
            <div className='skill-item outer-shadow' key={`tool-${index}`}>
              <i className={`${skill} dev-icon`}></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
