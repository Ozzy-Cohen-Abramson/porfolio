import React, { useState } from "react";

import "./item.css";

export default function WebItem() {
  const [details, showDetailes] = useState(false);
  const [innerDetails, setInnerDetails] = useState(false);

  const showDetailesFunc = (e) => {
    console.log(e.target);
    showDetailes(!details);
  };

  const closePopup = () => {
    console.log("object");
    showDetailes(false);
  };

  const innerDetailsFunc = () => {
    setInnerDetails(!innerDetails);
  };

  return (
    <div className="portfolio-item-container">
      <div className="row portfolio-items">
        <div className="portfolio-item active">
          <div className="portfolio-item-inner outer-shadow">
            <div className="portfolio-item-img" onClick={showDetailesFunc}>
              <img
                src="https://thumbs.dreamstime.com/b/macd-indicator-technical-analysis-vector-stock-cryptocurrency-exchange-graph-forex-analytics-trading-market-chart-macd-144598468.jpg"
                data-screenshots="https://thumbs.dreamstime.com/b/macd-indicator-technical-analysis-vector-stock-cryptocurrency-exchange-graph-forex-analytics-trading-market-chart-macd-144598468.jpg , https://thumbs.dreamstime.com/b/macd-indicator-technical-analysis-vector-stock-cryptocurrency-exchange-graph-forex-analytics-trading-market-chart-macd-144598468.jpg" // array of screenshots of the project
                alt="portfolio"
              />
              <span className="view-project">View project</span>
            </div>
            <p className="portfolio-item-title">personal portfolio</p>
          </div>
        </div>
      </div>
      {details && (
        <div className="pp portfolio-popup ">
          <div className="pp-details">
            {innerDetails && (
              <div className="pp-details-inner active">
                <div className="pp-title">
                  <h2>Personal portfolio</h2>
                  <p>
                    Category -
                    <span className="pp-project-category">Web App</span>
                  </p>
                </div>
                <div className="pp-project-details">
                  <div className="row">
                    <div className="description">
                      <h3>Project brief: </h3>
                      <p>
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia quidem ipsa et inventore, vel harum, deleniti,
                        eveniet sunt perferendis ab earum! Laudantium totam
                        saepe, atque necessitatibus velit illum maiores quam.
                        ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="info">
                      <h3>Project info</h3>
                      <ul>
                        <li>
                          Date - <span>2019</span>
                        </li>
                        <li>
                          Client - <span>ITC</span>
                        </li>
                        <li>
                          Tools - <span>HTML , CSS , Javascript</span>
                        </li>
                        <li>
                          Web -
                          <span>
                            <a href="https://www.google.com/" target="_blank">
                              {" "}
                              www.google.com
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="seperator"></div>
          <div className="pp-main active">
            <div className="pp-main-inner ">
              <div
                className="pp-project-details-btn outer-shadow hover-in-shadow"
                onClick={innerDetailsFunc}
              >
                Project Details
                <i
                  className={innerDetails ? "fas fa-minus" : "fas fa-plus"}
                ></i>
              </div>
              <div
                className="pp-close outer-shadow hover-in-shadow"
                onClick={closePopup}
              >
                &times;
              </div>
              <img
                src="https://thumbs.dreamstime.com/b/macd-indicator-technical-analysis-vector-stock-cryptocurrency-exchange-graph-forex-analytics-trading-market-chart-macd-144598468.jpg"
                alt="img"
                className="pp-img outer-shadow"
              />
              <div className="pp-counter">1 of 6</div>
            </div>
            <div className="pp-prev">
              <i className="fas fa-play"></i>
            </div>
            <div className="pp-next">
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
