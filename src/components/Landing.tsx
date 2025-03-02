import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const Landing = () => {
  const screenTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!screenTextRef.current) return;

      const screenText = screenTextRef.current;

      screenText.classList.add("position-relative", "z-1");

      const scrollSize = window.scrollY;

      const screenWidth = window.innerWidth;

      if (scrollSize <= 800 && screenWidth > 768) {
        screenText.style.position = `relative`;
        screenText.style.top = `${scrollSize}px`;
      } else {
        screenText.style.top = `0px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="landing-screen w-100">
      <div className="widgets-layer">
        <div className="container-75">
          <div className="row justify-content-between">
            <div
              ref={screenTextRef}
              className="text-area col-lg-5 col-md-6 text-start"
            >
              <p className="text-white fs-5 fw-bold ls-none">
                Vistas - Home collection
              </p>
              <h3 className="text-white fw-bold">
                <span className="large-text quote position-relative">
                  Quality
                </span>
                <span className="medium-text">fabrics</span>
                <span className="large-text">unique,</span>
                <span className="medium-text">creations.</span>
              </h3>
            </div>
            <div className="widgets col-lg-5 col-md-6 d-flex align-items-center justify-content-center flex-wrap align-content-start mt-5">
              <div className="widget-hide widget"></div>
              <div className="widget widget-black bg-white bg-opacity-50 text-black fs-5 p-2 position-relative">
                <h2 className="fs-5 d-flex justify-content-evenly align-items-center h-100 m-0">
                  <a
                    className="text-black fw-bold fs-4"
                    href="html/contact.html"
                  >
                    Contact our team
                  </a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </h2>
              </div>
              <div className="widget widget-white bg-black bg-opacity-50 text-black position-relative animation-delay-4">
                <h2 className="fs-5 d-flex justify-content-evenly align-items-center h-100 m-0">
                  <a className="text-white fw-bold fs-4" href="#our-product">
                    Discover our products
                  </a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </h2>
              </div>

              <div className="widget-hide widget"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
