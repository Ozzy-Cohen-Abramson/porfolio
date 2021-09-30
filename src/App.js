import "./App.css";

import Header from "./components/sections/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/sections/Home/Home";
import About from "./components/sections/About/About";
import Services from "./components/sections/Services/Services";
import Portfolio from "./components/sections/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
