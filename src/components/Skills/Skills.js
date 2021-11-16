import React from "react";
import "../sections/About/about.css";

export default function Skills() {
  return (
    <div className='row'>
      <div className='skills tab-content active'>
        <div className='row skills-row'>
          <div className='skill-item outer-shadow outer-shadow'>
            <i class='devicon-html5-plain-wordmark dev-icon'></i>
            {/* <p>HTML</p> 
             <div className='progress inner-shadow'>
              <div
                className='progress-bar'
                style={{ width: "calc(90% - 14px)" }}>
                <span>90%</span>
              </div>
            </div> */}
          </div>

          <div className='skill-item outer-shadow'>
            <i class='devicon-css3-plain-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-bootstrap-plain-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-materialui-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-javascript-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-typescript-plain dev-icon'></i>
          </div>

          <div className='skill-item outer-shadow'>
            <i class='devicon-react-original-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-angularjs-plain dev-icon'></i>
          </div>

          <div className='skill-item outer-shadow'>
            <i class='devicon-python-plain-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-nodejs-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-mysql-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-mongodb-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-amazonwebservices-plain-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-express-original-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-firebase-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-jest-plain dev-icon'></i>
          </div>
        </div>
        <div className='section-title'>
          <h2>Tools</h2>
        </div>
        <div className='row skills-row'>
          <div className='skill-item outer-shadow'>
            <i class='devicon-git-plain dev-icon '></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-github-original dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-npm-original-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-heroku-original dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-figma-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-vscode-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-pycharm-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i class='devicon-codepen-plain dev-icon'></i>
          </div>
        </div>
      </div>
    </div>
  );
}
