import React, { useState, useEffect } from "react";
import introOgg from "../../music/StarWarsIntro.ogg";
import introMp3 from "../../music/StarWarsIntro.mp3";
import SWName from "../../img/SWName.png";
import "./intro.css";

export default function Intro(props) {
  const { setMain, main } = props;
  const [introText, setIntroText] = useState(false);
  const [title, setTitle] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [bottons, setBottons] = useState(true);
  let swMp3 = new Audio(introMp3);

  useEffect(() => {
    swMp3 = document.getElementById("audio");
  }, []);

  const start = async () => {
    setIntroText(true);
    // console.log(swMp3);
    setBottons(false);
    setTimeout(() => {
      try {
        swMp3.play();
      } catch (e) {
        console.log(e);
      }
    }, 2000);
    setTimeout(() => {
      setIntroText(false);
      setTitle(true);
    }, 4000);
    setTimeout(() => {
      setAnimation(true);
    }, 5000);
    setTimeout(() => {
      swMp3.pause();
      setMain(true);
      setBottons(true);
      setTitle(false);
      setAnimation(false);
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
        <div className='intro-container' id='intro'>
          <audio id='audio'>
            <source src={introOgg} type='audio/ogg' />
            <source src={introMp3} type='audio/mp3' />
          </audio>
          <div className='fade'></div>
          {bottons ? (
            <button className='start' onClick={start}>
              Welcome to my website <br />
              <span>Start the journey here</span>
            </button>
          ) : (
            <button className='stop' onClick={skip}>
              skip
            </button>
          )}

          <section className='star-wars'>
            {introText && (
              <h5 className='intro-text'>
                <spam>A long time ago in a galaxy far, far away...</spam>
              </h5>
            )}
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
                  evil Bugs Empire.
                </p>
                <br />

                <p>
                  During the battle, FS spies managed to steal secret plans to
                  the Galactic Bug's ultimate weapon, the DEATH BUG, an armored
                  algoritm with enough power to destroy the whole internet.
                </p>
                <br />

                <p>
                  Pursued by the Bug Empire's sinister agents, Developer
                  Ozzy-Wan Coffee races to the repossitory aboard his push
                  commit, custodian of the stolen plans that can save his
                  website and restore freedom to the cyberspace...
                </p>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
