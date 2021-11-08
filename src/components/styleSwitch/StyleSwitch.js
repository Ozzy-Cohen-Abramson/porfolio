import React, { useState, useEffect } from "react";
import "./styleSwitch.css";

export default function StyleSwitch() {
  const [switcherClass, setSwitcherClass] = useState(false);
  const [height, setHeight] = useState(0);
  const [lightDark, setLightDark] = useState("fa-moon");

  const toggleSwitcher = () => {
    setSwitcherClass(!switcherClass);
  };

  const toggleLightDark = () => {
    lightDark === "fa-moon" ? setLightDark("fa-sun") : setLightDark("fa-moon");
  };

  const setActiveStyles = (color) => {
    import(`./styles/${color}.css`);
    setSwitcherClass(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 150;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);
    if (winScroll > heightToHideFrom) {
      setSwitcherClass(false);
    }
  };

  return (
    <div
      className={`style-switcher outer-shadow ${switcherClass ? "open" : ""}`}>
      <div
        className='style-switcher-toggler s-icon outer-shadow hover-in-shadow'
        onClick={toggleSwitcher}>
        <i className='fas fa-cog fa-spin'></i>
      </div>
      <div
        className='day-night s-icon outer-shadow hover-in-shadow'
        onClick={toggleLightDark}>
        <i className={`fas ${lightDark}`}></i>
      </div>
      {switcherClass && (
        <div>
          <h4>lightDark colors</h4>
          <div className='colors'>
            <span
              className='color-1'
              onClick={() => setActiveStyles("color-1")}></span>
            <span
              className='color-2'
              onClick={() => setActiveStyles("color-2")}></span>
            <span
              className='color-3'
              onClick={() => setActiveStyles("color-3")}></span>
            <span
              className='color-4'
              onClick={() => setActiveStyles("color-4")}></span>
            <span
              className='color-5'
              onClick={() => setActiveStyles("color-5")}></span>
          </div>
        </div>
      )}
    </div>
  );
}
