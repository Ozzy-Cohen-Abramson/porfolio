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
    document.documentElement.style.setProperty(
      "--bg-black-50",
      lightDark === "fa-moon" ? "#121212" : "#eff0f4"
    );
    document.documentElement.style.setProperty(
      "--text-black-900",
      lightDark === "fa-moon" ? "#dddddd" : "#121212"
    );
    document.documentElement.style.setProperty(
      "--outer-shadow",
      lightDark === "fa-moon"
        ? "3px 3px 3px #666666, -3px -3px 3px #555555"
        : "3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8"
    );
    document.documentElement.style.setProperty(
      "--outer-shadow-0",
      lightDark === "fa-moon"
        ? "0 0 0 #666666, 0 0 0 #555555"
        : "0 0 0 #d0d0d0, 0 0 0 #f8f8f8"
    );
    document.documentElement.style.setProperty(
      "--inner-shadow",
      lightDark === "fa-moon"
        ? "3px 3px 3px #666666, -3px -3px 3px #555555"
        : "3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8"
    );
    document.documentElement.style.setProperty(
      "--inner-shadow-0",
      lightDark === "fa-moon"
        ? "0 0 0 #666666, 0 0 0 #555555"
        : "0 0 0 #d0d0d0, 0 0 0 #f8f8f8"
    );
    localStorage.setItem("theme", lightDark);
  };

  const setActiveStyles = (color) => {
    document.documentElement.style.setProperty("--skin-color", color);
    localStorage.setItem("color", color);

    setSwitcherClass(false);
  };

  useEffect(() => {
    const localColor = localStorage.getItem("color");
    const localTheme = localStorage.getItem("theme");
    document.documentElement.style.setProperty("--skin-color", localColor);
    setLightDark(localTheme);
  }, []);

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
              onClick={() => setActiveStyles("#fb839e")}></span>
            <span
              className='color-2'
              onClick={() => setActiveStyles("#ec9412")}></span>
            <span
              className='color-3'
              onClick={() => setActiveStyles("#1fc586")}></span>
            <span
              className='color-4'
              onClick={() => setActiveStyles("#2eb1ed")}></span>
            <span
              className='color-5'
              onClick={() => setActiveStyles("#cc3a3b")}></span>
          </div>
        </div>
      )}
    </div>
  );
}
