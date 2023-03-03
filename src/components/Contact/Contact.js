import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="pt-5 pb-3">
        <div className="pt-3 pt-md-5 text-center">
          <h1>Contact Us</h1>
          <div className="underline"></div>
          <p className="pt-3">
            Get in touch with us to get awesome support from Education Pack.
          </p>
          <form className="form d-flex flex-column justify-content-center p-3 my-3">
            <div className="d-flex justify-content-between flex-column flex-md-row">
              <div className="half-input">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="py-2 px-3 rounded border my-2"
                />
              </div>
              <div className="half-input">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="py-2 px-3 rounded border my-2"
                />
              </div>
            </div>
            <label>Message:</label>
            <textarea
              placeholder="Enter Your Message"
              className="py-2 px-3 rounded border my-2 message-field"
            ></textarea>
            <button className="btn btn-purple mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
