import React, { useState } from "react";
import Effects from "../../Effects/Effects";
import profileImg from "../../../img/profile.png";
import "./home.css";

export default function Home() {
  const [profileImage, setProfileImage] = useState("");

  setTimeout(() => {
    fetch("https://api.github.com/users/Ozzy-Cohen-Abramson")
      .then((response) => response.json())
      .then((data) => setProfileImage(data.avatar_url));
  }, 500);

  return (
    <div>
      <section className='home-section section'>
        <Effects />
        <div className='home-container'>
          {profileImage ? (
            <div className='home-img-text row full-screen align-itens-center'>
              <div className='home-text'>
                <p>Hello</p>
                <h2>I'm Ozzy</h2>
                <h1>Fullstack developer</h1>
                <a href='#about' className='btn-1 outer-shadow hover-in-shadow'>
                  More About Me
                </a>
              </div>
              <div className='home-img'>
                <div className='img-box inner-shadow'>
                  <img
                    className='outer-shadow'
                    src={profileImage}
                    alt='profile-pic'
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className='no-data '>
              <p>Loading data...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
