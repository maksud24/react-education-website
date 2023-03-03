import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../App";

const Services = () => {
  const data = useContext(DataContext);
  const serviceData = data.slice(0, 4);

  const buttonClick = (event) => {
    event.target.classList.add("disabled");
    event.target.innerHTML = '<i class="fas fa-user-check"></i> Joined';
  };

  return (
    <>
      <div className="container py-5 text-center">
        <h1 className="m-0 pb-2">Popular Courses</h1>
        <div className="underline mb-3"></div>
        <div className="row">
          {serviceData.map((service) => {
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
        <NavLink to="/courses">
          <button className="btn btn-purple mt-4 text-light mt-3 py-2 px-3">
            <i className="far fa-list-alt"></i> See All
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Services;
