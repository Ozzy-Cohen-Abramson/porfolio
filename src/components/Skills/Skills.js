import React from "react";

export default function Skills() {
  return (
    <div className='row'>
      <div className='skills tab-content active'>
        <div className='row skills-row'>
          <div className='skill-item'>
            <p>HTML</p>
            <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(90% - 14px)" }}>
                <span>90%</span>
              </div>
            </div>
          </div>

          <div className='skill-item'>
            <p>Javascript</p>
            <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(70% - 14px)" }}>
                <span>70%</span>
              </div>
            </div>
          </div>

          <div className='skill-item'>
            <p>Bootstrap</p>
            <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(85% - 14px)" }}>
                <span>85%</span>
              </div>
            </div>
          </div>

          <div className='skill-item'>
            <p>React</p>
            <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(80% - 14px)" }}>
                <span>80%</span>
              </div>
            </div>
          </div>

          <div className='skill-item'>
            <p>Redux</p>
            <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(80% - 14px)" }}>
                <span>80%</span>
              </div>
            </div>
          </div>

          <div className='skill-item'>
            <p>Angular</p>
            <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(30% - 14px)" }}>
                <span>30%</span>
              </div>
            </div>
          </div>

          <div className='skill-item'>
            <p>Node.js</p>
            <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(65% - 14px)" }}>
                <span>65%</span>
              </div>
            </div>
          </div>

          <div className='skill-item'>
            <p>Python</p>
            <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(70% - 14px)" }}>
                <span>70%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
