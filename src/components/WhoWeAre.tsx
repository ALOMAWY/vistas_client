import { useEffect, useRef, useState } from "react";

import IdentficationsImage from "../assets/images/identafication.jpg";
import OurValuesImage from "../assets/images/our_values.jpg";
import Header from "./Header";
import Discover from "./Discover";
import Footer from "./Footer";
import { faBed, faCheck, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CounterProp {
  count: number;
  type?: "percent";
}

const Counter = ({ count, type }: CounterProp) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (currentCount < count) {
      const interval = setInterval(() => {
        setCurrentCount((prev) => {
          if (prev >= count) {
            clearInterval(interval);
            return count;
          }
          return prev + 1;
        });
      }, 500 / count);

      return () => clearInterval(interval);
    }
  }, [count]);
  return (
    <span className="counter fw-bold pb-1 show-text-x-20">
      {type == "percent" ? currentCount + "%" : currentCount}
    </span>
  );
};

const WhoWeAre = () => {
  const countersRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!countersRef.current || startCount) return;

      const counters = countersRef.current;
      const { top, height } = counters.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      if (window.scrollY + windowHeight >= top + height) {
        setStartCount(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header isDark={true} />
      <section className="identification">
        <div className="container-75">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 p-5">
              <img
                src={IdentficationsImage}
                alt=""
                className="w-75 d-block m-auto"
              />
            </div>
            <div className="col-md-12 col-lg-6 p-5 text-black">
              <h1 className="text-capitalize big-title show-text-y-50">
                Who We Are ?
              </h1>
              <p className="fw-normal fs-5 text-body-tertiary show-text-x-50">
                Welcome to Vistas, your preferred destination for exceptional
                textiles dedicated to the embellishment of your interior. Our
                company stands out for its commitment to quality, creativity and
                comfort.
              </p>
              <p className="fw-normal fs-5 text-body-tertiary show-text-x-50">
                Every piece we offer is the result of meticulous attention to
                detail and unparalleled craftsmanship. We carefully select
                materials to ensure not only their aesthetics, but also their
                long-term durability.
              </p>
            </div>
          </div>
        </div>
        <div className="container-75">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 p-5 text-black">
              <h5 className="text-uppercase fs-6 opacity-25 show-text-y-75">
                Vistas
              </h5>
              <h1 className="text-capitalize big-title mt-2 mb-5 show-text-y-50">
                Our Values
              </h1>
              <div className="values">
                <div className="info text-black d-flex align-items-start gap-4 mb-4 pb-3 border-bottom border-gray">
                  <div className="d-flex gap-3 w-100">
                    <div className="icon-holder show-text-x-70">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="text-area">
                      <h2 className="fs-6 text-uppercase mb-0 show-text-x-60">
                        INNOVATION AND CREATIVITY
                      </h2>
                      <p className="fw-light fs-6 show-text-x-50">
                        We are constantly looking to innovate and create new
                        designs and styles to meet the changing needs of our
                        customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info text-black d-flex align-items-start gap-4 mb-4 pb-3 border-bottom border-gray">
                  <div className="d-flex gap-3 w-100">
                    <div className="icon-holder show-text-x-70">
                      <FontAwesomeIcon icon={faBed} />
                    </div>
                    <div className="text-area">
                      <h2 className="fs-6 text-uppercase mb-0 show-text-x-60">
                        COMFORT AND WELL-BEING
                      </h2>
                      <p className="fw-light fs-6 show-text-x-50">
                        We design products that bring comfort and well-being to
                        the interior of homes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info text-black d-flex align-items-start gap-4 mb-4 pb-3 border-bottom border-gray">
                  <div className="d-flex gap-3 w-100">
                    <div className="icon-holder show-text-x-70">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className="text-area">
                      <h2 className="fs-6 text-uppercase mb-0 show-text-x-60">
                        TAILOR-MADE CUSTOMIZATION
                      </h2>
                      <p className="fw-light fs-6 show-text-x-50">
                        We are constantly looking to innovate and create new
                        designs and styles to meet the changing needs of our
                        customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 p-5 background-light-effect-20">
              <img src={OurValuesImage} alt="" className="square-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="statistics">
        <div className="container-75">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <p className="text-uppercase fs-6 opacity-25 show-text-x-60">
                FAITES CONFIANCE AUX EXPERTS
              </p>
              <h2 className="big-title floor-line pb-4 show-text-y-50">
                Vistas En Ciffres
              </h2>
            </div>

            <div ref={countersRef} className="col-lg-8 col-md-12 container">
              <div className="row counters gap-3">
                <div className="col-lg-3 col-md-12 text-black text-center flex-grow-1">
                  {startCount && <Counter count={5} />}
                  <p className="fs-4 text-body-tertiary ls-2 pb-3 show-text-x-10">
                    YEARS OF EXPERIENCE
                  </p>
                </div>
                <div className="col-lg-3 col-md-12 text-black text-center flex-grow-1">
                  {startCount && <Counter count={58} />}
                  <p className="fs-4 text-body-tertiary ls-2 pb-3 show-text-x-10">
                    WILAYAS AFFECTED
                  </p>
                </div>
                <div className="col-lg-3 col-md-12 text-black text-center flex-grow-1">
                  {startCount && <Counter count={100} type="percent" />}
                  <p className="fs-4 text-body-tertiary ls-2 pb-3 show-text-x-10">
                    CUSTOMERS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Discover />
      <Footer />
    </div>
  );
};

export default WhoWeAre;
