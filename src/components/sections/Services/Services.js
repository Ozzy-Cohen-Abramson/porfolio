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
              <h3>Responsive design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed.
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-laptop-code'></i>
              </div>
              <h3>Web design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed.
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-palette'></i>
              </div>
              <h3>graphic design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed.
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-code'></i>
              </div>
              <h3>clean code</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed.
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-server'></i>
              </div>
              <h3>server side</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed.
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-inner outer-shadow'>
              <div className='icon inner-shadow'>
                <i className='fa fa-bullhorn'></i>
              </div>
              <h3>supprt</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
