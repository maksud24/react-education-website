import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

const Services = () => {
  const data = useContext(DataContext);

  const buttonClick = (event) => {
    event.target.classList.add("disabled");
    event.target.innerHTML = '<i class="fas fa-user-check"></i> Joined';
  };

  return (
    <>
      <div className="py-5 container text-center">
        <div className="pt-3 pt-md-5">
          <h1>Courses</h1>
          <div className="underline"></div>
        </div>
        <div className="row pt-3 pb-3">
          {data.map((service) => {
            const { club, img, key, description, price, duration } = service;
            return (
              <div
                className="col-12 col-md-3 p-3 p-md-2 text-center mx-auto"
                key={key}
              >
                <div className="p-3 border single-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <img src={img} alt="" />
                    <h5 className="pt-2">{club}</h5>
                    <p className="text-justify p-2 m-0">{description}</p>
                  </div>

                  <div>
                    <div className="d-flex justify-content-between py-2">
                      <h6 className="bg-pink mx-auto times py-1">
                        <i className="fas fa-clock"></i> {duration}
                      </h6>
                      <h6 className="bg-purple price mx-auto py-1">${price}</h6>
                    </div>

                    <button
                      className="btn btn-blue text-light"
                      onClick={(event) => buttonClick(event)}
                    >
                      <i className="fas fa-user-plus"></i> Join Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/">
          <button className="btn btn-purple mt-3 text-light py-2 px-3">
            <i className="fas fa-home"></i> Back To Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Services;
