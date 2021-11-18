import React from "react";

export default function Education() {
  return (
    <div className='row'>
      <div className='education tab-content active'>
        <div className='row'>
          <div className='timeline'>
            <div className='row'>
              <div className='timeline-item'>
                <div className='timeline-item-inner outer-shadow'>
                  <i className='fas fa-graduation-cap icon'></i>
                  <span>June 2021 – November 2021</span>
                  <h3>Full Stack Development</h3>
                  <h4>Israel Tech Challenge, Israel</h4>
                  <p>
                    A 6-month intensive training program for tech-savvy
                    individuals who wish to launch a new career as web and app
                    programmers in the high-tech industry.
                  </p>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='timeline-item-inner outer-shadow'>
                  <i className='fas fa-graduation-cap icon'></i>
                  <span>2017-2018</span>
                  <h3>Science And Ethics, MA</h3>
                  <h4>Bar Ilan University, Israel</h4>
                  <p>
                    Facing complex issues related to science, ethics and Jewish
                    religion, such as medicine according to Halacha, genetics
                    versus free choice, use of electricity on Shabbat, physics
                    as an explanation for the creation of the world, and more.
                  </p>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='timeline-item-inner outer-shadow'>
                  <i className='fas fa-graduation-cap icon'></i>
                  <span>2013-2017</span>
                  <h3>Science Education , B.Ed</h3>
                  <h4>Lifshitz College for Education, Israel</h4>
                  <p>
                    The goal of this program is to train quality science
                    teachers with an emphasis on professionalism in the fields
                    of biology, chemistry, and physics, while developing mastery
                    of advanced teaching technologies and laboratory work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
