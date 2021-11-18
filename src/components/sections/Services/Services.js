import React from "react";

import "./services.css";

export default function Services() {
  return (
    <div className='service-section' id='services'>
      <div className='container'>
        <div className='row'>
          <div className='section-title '>
            <h2 data-heading='Services'>What I do</h2>
          </div>
        </div>
        <div className='row service-row'>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-mobile-alt'></i>
              </div>
              <h3>Responsive Design</h3>
              <p>Creating web pages that are compatible for all devices.</p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-laptop-code'></i>
              </div>
              <h3>Web Design</h3>
              <p>
                Building the website while considering the components it will
                contain.
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-palette'></i>
              </div>
              <h3>graphic design</h3>
              <p>Emphasis on colors, text and user experience.</p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-code'></i>
              </div>
              <h3>clean code</h3>
              <p>
                A consistent, clean, and tidy HTML / CSS / JS code. Makes it
                easier for developoers to read and understand your code.
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-server'></i>
              </div>
              <h3>server side</h3>
              <p>Construction and maintenance of servers.</p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-bullhorn'></i>
              </div>
              <h3>support</h3>
              <p>
                Providing users an avenue for reporting system related issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
