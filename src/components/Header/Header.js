import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="p-4 p-md-5">
        <div className="container pt-5">
          <div className="row pt-0 pt-md-5">
            <div className="col-12 col-md-6 titles d-flex justify-content-center flex-column text-light">
              <h1 className="pt-2 pt-md-0">Education Pack</h1>
              <h6 className="pt-3">
                Education is the passport to the future, for tomorrow belongs to
                those who prepare for it today.
              </h6>
              <h5 className="ps-3">-Malcolm X</h5>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://purepng.com/public/uploads/thumbnail//purepng.com-open-bookobjectsopen-bookbook-school-open-education-object-library-study-631522325157vxkpm.png"
                alt="Header-Pic"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
