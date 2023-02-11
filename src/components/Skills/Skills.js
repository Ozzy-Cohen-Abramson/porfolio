import React from "react";
import "../sections/About/about.css";

export default function Skills() {
  return (
    <div className='row'>
      <div className='skills tab-content active'>
        <div className='row skills-row'>
          {/* Langueges */}
          <div className='skill-item outer-shadow outer-shadow'>
            <i className='devicon-html5-plain-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-css3-plain-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-javascript-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-python-plain-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-nodejs-plain dev-icon'></i>
          </div>

          {/* Libraries and frameworks */}

          <div className='skill-item outer-shadow'>
            <i className='devicon-typescript-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-nestjs-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-bootstrap-plain-wordmark dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-materialui-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-react-original-wordmark dev-icon'></i>
          </div>

          {/* <div className='skill-item outer-shadow'>
            <i className='devicon-angularjs-plain dev-icon'></i>
          </div> */}

          <div className='skill-item outer-shadow'>
            <i className='devicon-express-original-wordmark dev-icon'></i>
          </div>

          <div className='skill-item outer-shadow'>
            <i className='devicon-jest-plain dev-icon'></i>
          </div>

          {/* DB */}

          <div className='skill-item outer-shadow'>
            <i className='devicon-mysql-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-mongodb-plain dev-icon'></i>
          </div>
        </div>
        <div className='section-title'>
          <h2>Tools</h2>
        </div>
        <div className='row skills-row'>
          <div className='skill-item outer-shadow'>
            <i className='devicon-docker-plain dev-icon '></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-git-plain dev-icon '></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-github-original dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-npm-original-wordmark dev-icon'></i>
          </div>
          {/* <div className='skill-item outer-shadow'>
            <i className='devicon-heroku-original dev-icon'></i>
          </div> */}
          <div className='skill-item outer-shadow'>
            <i className='devicon-figma-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-vscode-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-pycharm-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-codepen-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-firebase-plain dev-icon'></i>
          </div>
          <div className='skill-item outer-shadow'>
            <i className='devicon-amazonwebservices-plain-wordmark dev-icon'></i>
          </div>
        </div>
      </div>
    </div>
  );
}
