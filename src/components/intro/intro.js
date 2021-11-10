import React, { useState } from "react";
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
  //   let swOgg = new Audio(introOgg);

  const start = () => {
    swMp3.play();
    setBottons(false);
    // swOgg.play();
    setTimeout(() => {
      setTitle(true);
    }, 2000);
    setTimeout(() => {
      setAnimation(true);
    }, 7000);
  };

  const skip = () => {
    console.log("object");
    swMp3.pause();
    // swOgg.pause();
    setMain(true);
  };

  return (
    <>
      {!main && (
        <div className='intro-container'>
          <div className='fade'></div>
          {bottons ? (
            <button className='start' onClick={start}>
              Hey! thank you for visiting my website! <br /> Click here to
              start!
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
                  <h1>A New Hope</h1>
                </div>

                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>

                <p>
                  During the battle, Rebel spies managed to steal secret plans
                  to the Empire’s ultimate weapon, the DEATH STAR, an armored
                  space station with enough power to destroy an entire planet.
                </p>

                <p>
                  Pursued by the Empire’s sinister agents, Princess Leia races
                  home aboard her starship, custodian of the stolen plans that
                  can save her people and restore freedom to the galaxy….
                </p>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
