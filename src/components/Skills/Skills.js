import React from "react";

export default function Skills() {
  return (
    <div className="row">
      <div className="skills tab-content active">
        <div className="row">
          <div className="skill-item">
            <p>HTML</p>
            <div className="progress inner-shadow">
              <div
                className="progress-bar"
                style={{ width: "calc(90% - 14px)" }}
              >
                <span>90%</span>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <p>Javascript</p>
            <div className="progress inner-shadow">
              <div
                className="progress-bar"
                style={{ width: "calc(60% - 14px)" }}
              >
                <span>60%</span>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <p>Bootstrap</p>
            <div className="progress inner-shadow">
              <div
                className="progress-bar"
                style={{ width: "calc(85% - 14px)" }}
              >
                <span>85%</span>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <p>React</p>
            <div className="progress inner-shadow">
              <div
                className="progress-bar"
                style={{ width: "calc(80% - 14px)" }}
              >
                <span>80%</span>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <p>Angular</p>
            <div className="progress inner-shadow">
              <div
                className="progress-bar"
                style={{ width: "calc(30% - 14px)" }}
              >
                <span>30%</span>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <p>Node.js</p>
            <div className="progress inner-shadow">
              <div
                className="progress-bar"
                style={{ width: "calc(50% - 14px)" }}
              >
                <span>50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
