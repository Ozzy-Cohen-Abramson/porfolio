import React, { useState, useEffect } from "react";
import { porfolioArr } from "../../utils/portfolio_info";

import "./item.css";

export default function WebItem() {
  const [details, showDetailes] = useState(false);
  const [innerDetails, setInnerDetails] = useState(false);
  const [imgNumber, setImageNumber] = useState(0);

  const showDetailesFunc = (e) => {
    // console.log(e.target);
    showDetailes(!details);
  };

  const closePopup = () => {
    console.log("object");
    showDetailes(false);
  };

  const innerDetailsFunc = () => {
    setInnerDetails(!innerDetails);
  };

  useEffect(() => {
    console.log(porfolioArr[0]);
  }, []);

  const nextImg = () => {
    console.log("next");
    if (imgNumber === 3) {
      setImageNumber(0);
    } else {
      setImageNumber(imgNumber + 1);
    }
  };
  const prevImg = () => {
    console.log("prev");
    if (imgNumber === 0) {
      setImageNumber(3);
    } else {
      setImageNumber(imgNumber - 1);
    }
  };

  return (
    <div className='projects-container'>
      {porfolioArr.map((item) => {
        return (
          <div className='portfolio-item-container'>
            <div className='row portfolio-items'>
              <div className='portfolio-item'>
                <div className='portfolio-item-inner outer-shadow'>
                  <div
                    className='portfolio-item-img'
                    onClick={showDetailesFunc}>
                    <img src={item.images[0]} alt='stock' />
                    <span className='view-project'>View project</span>
                  </div>
                  <p className='portfolio-item-title'>{item.name}</p>
                </div>
              </div>
            </div>
            {details && (
              <div className='pp portfolio-popup '>
                {innerDetails && (
                  <div className='pp-details'>
                    <div className='pp-details-inner active'>
                      <div className='pp-title'>
                        <h2>{item.name}</h2>
                        <p>
                          Category -
                          <span className='pp-project-category'>Web App</span>
                        </p>
                      </div>
                      <div className='pp-project-details'>
                        <div className='row'>
                          <div className='description'>
                            <h3>Project brief: </h3>
                            <p>{item.brief}</p>
                          </div>
                          <div className='info'>
                            <h3>Project info</h3>
                            <ul>
                              <li>
                                Date - <span>{item.date}</span>
                              </li>
                              <li>
                                Client - <span>{item.client}</span>
                              </li>
                              <li>
                                Tools - <span>{item.tools}</span>
                              </li>
                              <li>
                                Web -
                                <span>
                                  <a href={item.link} target='_blank'>
                                    {item.link}
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className='seperator'></div>
                <div className='pp-main active'>
                  <div className='pp-main-inner '>
                    <div
                      className='pp-project-details-btn outer-shadow hover-in-shadow'
                      onClick={innerDetailsFunc}>
                      Project Details
                      <i
                        className={
                          innerDetails ? "fas fa-minus" : "fas fa-plus"
                        }></i>
                    </div>
                    <div
                      className='pp-close outer-shadow hover-in-shadow'
                      onClick={closePopup}>
                      &times;
                    </div>
                    <img
                      src={item.images[imgNumber]}
                      alt='img'
                      className='pp-img outer-shadow'
                    />
                    <div className='pp-counter'>
                      {imgNumber + 1} of {item.images.length}
                    </div>
                  </div>
                  <div className='pp-prev' onClick={prevImg}>
                    <i className='fas fa-play'></i>
                  </div>
                  <div className='pp-next' onClick={nextImg}>
                    <i className='fas fa-play'></i>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
