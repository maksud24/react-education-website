import React, { useEffect } from "react";
import { useState } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [first3data, setFirst3data] = useState([]);
  const [second3Data, setSecond3Data] = useState([]);
  const [third3Data, setThird3Data] = useState([]);

  useEffect(() => {
    fetch("./Review.json")
      .then((res) => res.json())
      .then((data) => {
        setFirst3data(data.slice(0, 3));
        setSecond3Data(data.slice(3, 6));
        setThird3Data(data.slice(6, 9));
      });
  }, []);

  console.log(first3data);
  console.log(second3Data);
  console.log(third3Data);
  return (
    <>
      <section className="review-section py-4 text-center">
        <div className="container">
          <h1 className="text-light">Reviews</h1>
          <div className="underline mb-4"></div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {first3data.map((singleData) => {
                    return (
                      <div
                        className="col-12 col-md-4 p-2 text-center"
                        key={singleData.id}
                      >
                        <div className="p-3 single-card h-100 d-flex flex-column justify-content-between align-items-center">
                          <img
                            src={singleData.image}
                            alt=""
                            className="rounded-pill avatar"
                          />
                          <div>
                            <h5 className="pt-2">{singleData.name}</h5>
                            <p className="description text-justify">
                              {singleData.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  {second3Data.map((singleData) => {
                    return (
                      <div
                        className="col-12 col-md-4 p-2 text-center"
                        key={singleData.id}
                      >
                        <div className="p-3 single-card h-100 d-flex flex-column justify-content-between align-items-center">
                          <img
                            src={singleData.image}
                            alt=""
                            className="rounded-pill avatar"
                          />
                          <div>
                            <h5 className="pt-2">{singleData.name}</h5>
                            <p className="description text-justify">
                              {singleData.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  {third3Data.map((singleData) => {
                    return (
                      <div
                        className="col-12 col-md-4 p-2 text-center d-flex flex-column justify-content-between"
                        key={singleData.id}
                      >
                        <div className="p-3 single-card h-100 d-flex flex-column justify-content-between align-items-center">
                          <img
                            src={singleData.image}
                            alt=""
                            className="rounded-pill avatar"
                          />
                          <div>
                            <h5 className="pt-2">{singleData.name}</h5>
                            <p className="description text-justify">
                              {singleData.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
