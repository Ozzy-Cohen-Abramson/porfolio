import React, { useState } from "react";
import "./App.css";

import Header from "./components/sections/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/sections/Home/Home";
import About from "./components/sections/About/About";
import Services from "./components/sections/Services/Services";
import Portfolio from "./components/sections/Portfolio/Portfolio";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <div className="App">
      <Header setNav={setNav} />
      {nav && <Navbar setNav={setNav} />}
      <Home />
      <About />
      <Services />
      <Portfolio />
      <ScrollArrow />
    </div>
  );
}

export default App;
