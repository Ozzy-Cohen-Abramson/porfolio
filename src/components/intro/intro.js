import React, { useState, useEffect } from "react";
import introOgg from "../../music/StarWarsIntro.ogg";
import introMp3 from "../../music/StarWarsIntro.mp3";
import SWName from "../../img/SWName.png";
import "./intro.css";

export default function Intro(props) {
  const { setMain, main } = props;
  const [title, setTitle] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [bottons, setBottons] = useState(true);
  let swMp3 = new Audio(introMp3);

  useEffect(() => {
    swMp3 = document.getElementById("audio");
  }, []);

  const start = async () => {
    try {
      swMp3.play();
    } catch (e) {
      console.log(e);
    }
    // console.log(swMp3);
    setBottons(false);
    setTimeout(() => {
      setTitle(true);
    }, 2000);
    setTimeout(() => {
      setAnimation(true);
    }, 5000);
    setTimeout(() => {
      swMp3.pause();
      setMain(true);
    }, 90000);
  };

  const skip = () => {
    setMain(true);
    setBottons(true);
    setTitle(false);
    setAnimation(false);
  };

  return (
    <>
      {!main && (
        <div className='intro-container'>
          <audio id='audio'>
            <source src={introOgg} type='audio/ogg' />
            <source src={introMp3} type='audio/mp3' />
          </audio>
          <div className='fade'></div>
          {bottons ? (
            <button className='start' onClick={start}>
              Welcome to my website <br />
              <span>Start the jurney here</span>
            </button>
          ) : (
            <button className='stop' onClick={skip}>
              skip
            </button>
          )}

          <section className='star-wars'>
            {title && (
              <section className='intro-logo'>
                <img src={SWName} alt='' border='0' />
              </section>
            )}
            {animation && (
              <div className='crawl'>
                <div className='title'>
                  <p>Episode IV</p>
                  <h1>a Developer rises</h1>
                </div>

                <p>
                  It is a period of code war. Full stack spaceships, striking
                  from a hidden base, have won their first victory against the
                  evil Galactic Bugs.
                </p>
                <br />

                <p>
                  During the battle, FS spies managed to steal secret plans to
                  the Galactic Bug's ultimate weapon, the DEATH BUG, an armored
                  algoritm with enough power to destroy the whole internet.
                </p>
                <br />

                <p>
                  Pursued by the Galactic Bug's sinister agents, Developer
                  Ozzy-Wan Coffee races to the repossitoty aboard his push
                  commit, custodian of the stolen plans that can save his
                  wibsite and restore freedom to the galaxy.
                </p>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
