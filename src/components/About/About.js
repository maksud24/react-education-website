import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-pic-div pt-5 pt-md-2 position-relative">
          <img
            src="https://armazemluxuryhousing.com/wp-content/uploads/business-team-e1464191345968.jpg"
            alt="Team"
            className="w-100 about-pic bg-dark"
          />
        </div>
        <div className="container p-2 p-md-4 text-center">
          <h1 className="pt-3">About Us</h1>
          <div className="underline"></div>
          <h5 className="pt-3">
            "You may be strong but we are stronger with our team."
          </h5>
          <div className="row">
            <div className="col-12 col-md-7 mx-auto p-4 text-justify">
              <p>
                Welcome to Education Pack. Education Pack team is working hard
                to get the generation worked. We're a team of 9 dedicated
                person. We're serving you to make the world better. We're
                helping you buy courses for growing your skills in the modern
                competitive world. Want future clients, employees and/or
                colleagues to know exactly where your brand’s values lie? Why
                not put them in bold black and white print, Join us and grow
                your ability to represent yourself and the nation.
              </p>
              <p>
                A great way to keep your mind free, you must enlarge your
                knowledge. Do you prefer visual graphics to walls of text? Check
                out this design for Huge Inc. That takes a unique step by
                condensing their information into visualized diagrams. If you
                are packing a lot of information and content into your quality,
                consider adding in some whitespace to help balance it out. And
                we're the one to help you get to your goal and keep you fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
