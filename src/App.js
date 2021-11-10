import React, { useState } from "react";
import "./App.css";

import Header from "./components/sections/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/sections/Home/Home";
import About from "./components/sections/About/About";
import Services from "./components/sections/Services/Services";
import Portfolio from "./components/sections/Portfolio/Portfolio";
import Contact from "./components/sections/Contact/Contact";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";
import DotNav from "./components/DonNav/DotNav";
import StyleSwitch from "./components/styleSwitch/StyleSwitch";
import Intro from "./components/intro/intro";

function App() {
  const [nav, setNav] = useState(false);
  const [main, setMain] = useState(false);

  return (
    <div className='App'>
      <Intro setMain={setMain} main={main} />
      {main && (
        <>
          <DotNav />
          <Header setNav={setNav} />
          {nav && <Navbar setNav={setNav} setMain={setMain} />}
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <ScrollArrow />
          <StyleSwitch />{" "}
        </>
      )}
    </div>
  );
}

export default App;
