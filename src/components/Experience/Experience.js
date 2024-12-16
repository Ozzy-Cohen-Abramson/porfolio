import React from "react";
import experienceList from "./experienceList";

export default function Experience() {
  return (
    <div className='row'>
      <div className='experience tab-content active'>
        <div className='row'>
          <div className='timeline'>
            <div className='row'>
              {experienceList.map((experience, index) => (
                <div className='timeline-item' key={index}>
                  <div className='timeline-item-inner outer-shadow'>
                    <i className='fas fa-briefcase icon'></i>
                    <span>{experience.dates}</span>
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: experience.description,
                      }}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
