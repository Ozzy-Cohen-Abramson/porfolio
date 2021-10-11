import React, { useState } from "react";

import "./dotNav.css";

export default function DotNav() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="menu">
        <a className="dot" href="#header">
          <span className="forty">Home</span>
        </a>
        <a className="dot" href="#about">
          <span className="forty">About</span>
        </a>
        <a className="dot" href="#services">
          <span className="forty">Services</span>
        </a>
        <a className="dot" href="#projects">
          <span className="forty">Projects</span>
        </a>
        <a className="dot" href="#contact">
          <span className="forty">Contacts</span>
        </a>
      </div>
    </>
  );
}
