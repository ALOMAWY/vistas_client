import React from "react";

const Discover = () => {
  return (
    <section className="discover bg-black w-100 h-100 text-white">
      <div className="container-75">
        <div className="row">
          <h1 className="col-lg-5 col-md-6 col-sm-12 show-text-x-50">
            <p className="fs-1 ls-none text-white">
              Products that combine elegance and functionality
            </p>
          </h1>

          <div className="col-lg-7 col-md-6 col-sm-12 d-flex justify-content-evenly align-items-start">
            <p className="fw-normal ls-none text-white-50 show-text-x-50">
              Pieces that will not only beautify your space, but will also stand
              the test of time.
            </p>

            <a
              className="text-uppercase py-4 px-5 fw-normal show-text-y-50"
              href="who_we_are.html"
            >
              Discover Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Discover;
