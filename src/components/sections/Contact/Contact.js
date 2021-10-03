import React, { useState } from "react";

import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const contactArr = [
    {
      id: 1,
      class: "phone",
      type: "Phone",
      contact: "054 700 2414",
    },
    {
      id: 2,
      class: "envelope",
      type: "E-mail",
      contact: "odentionofficial@gmail.com",
    },
    {
      id: 3,
      class: "map-marker-alt",
      type: "Adress",
      contact: "Hadera, Israel",
    },
  ];

  return (
    <div className="contact-section section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="Contact">Get in touch</h2>
          </div>
        </div>
        <div className="row">
          {contactArr.map((item) => {
            return (
              <div className="contact-item" key={item.id}>
                <div className="contact-item-inner outer-shadow">
                  <i className={`fa fa-${item.class}`}></i>
                  <span>{item.type}</span>
                  <p>{item.contact}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="contact-form">
            <form onSubmit={HandleSubmit}>
              <div className="row">
                <div className="w-50">
                  <div className="input-group outer-shadow">
                    <input
                      type="text"
                      placeholder="Name"
                      className="input-control"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group outer-shadow">
                    <input
                      type="text"
                      placeholder="Email"
                      className="input-control"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group outer-shadow">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input-control"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-50">
                  <div className="input-group outer-shadow">
                    <textarea
                      className="input-control"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="submit-btn">
                  <button
                    type="submit"
                    className="btn-1 outer-shadow hover-in-shadow"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
