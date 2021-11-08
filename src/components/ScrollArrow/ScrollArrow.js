import React, { useState } from "react";

import "./scrollArrow.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div onClick={scrollTop}>
      <i
        className='scrollTop fas fa-arrow-up'
        style={{ height: 40, display: showScroll ? "flex" : "none" }}></i>
    </div>
  );
};

export default ScrollArrow;
