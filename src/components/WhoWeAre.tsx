import { useEffect, useRef, useState } from "react";
import IdentficationsImage from "../assets/images/identafication.jpg";
import OurValuesImage from "../assets/images/our_values.jpg";
import Header from "./Header";
import Discover from "./Discover";
import Footer from "./Footer";
import { faBed, faCheck, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { mobileView } from "../constants/responsive/moblieView";

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
      {type === "percent" ? `${currentCount}%` : currentCount}
    </span>
  );
};

const WhoWeAre = () => {
  const { t } = useTranslation();
  const countersRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!countersRef.current || startCount) return;
      const { top, height } = countersRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (window.scrollY + windowHeight >= top + height) {
        setStartCount(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  return (
    <div>
      <Header isDark={true} />

      <section className="identification">
        <div className="container-75">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 p-5">
              <img
                src={IdentficationsImage}
                alt="identification"
                className="w-75 d-block m-auto"
              />
            </div>
            <div className="col-md-12 col-lg-6 p-5 text-black">
              <h1
                className={`text-capitalize big-title show-text-y-50 ${
                  mobileView ? "text-center" : ""
                }`}
              >
                {t("whoWeAre.title")}
              </h1>
              <p
                className={`fw-normal fs-5 text-body-tertiary show-text-x-50 ${
                  mobileView ? "text-center" : ""
                }`}
              >
                {t("whoWeAre.description1")}
              </p>
              <p
                className={`fw-normal fs-5 text-body-tertiary show-text-x-50 ${
                  mobileView ? "text-center" : ""
                }`}
              >
                {t("whoWeAre.description2")}
              </p>
            </div>
          </div>
        </div>

        <div className="container-75">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 p-5 text-black">
              <h5
                className={`text-uppercase fs-6 opacity-25 show-text-y-75 ${
                  mobileView ? "text-center" : ""
                }`}
              >
                Vistas
              </h5>
              <h1
                className={`text-capitalize big-title mt-2 mb-5 show-text-y-50 ${
                  mobileView ? "text-center" : ""
                }`}
              >
                {t("whoWeAre.ourValues")}
              </h1>

              <div className="values">
                <div className="info d-flex align-items-start gap-4 mb-4 pb-3 border-bottom border-gray">
                  <div className="d-flex gap-3 w-100">
                    <div className="icon-holder show-text-x-70">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="text-area">
                      <h2
                        className={`fs-6 text-uppercase mb-0 show-text-x-60 ${
                          mobileView ? "text-center" : ""
                        }`}
                      >
                        {t("whoWeAre.values.innovation.title")}
                      </h2>
                      <p className="fw-light fs-6 show-text-x-50">
                        {t("whoWeAre.values.innovation.text")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="info d-flex align-items-start gap-4 mb-4 pb-3 border-bottom border-gray">
                  <div className="d-flex gap-3 w-100">
                    <div className="icon-holder show-text-x-70">
                      <FontAwesomeIcon icon={faBed} />
                    </div>
                    <div className="text-area">
                      <h2
                        className={`fs-6 text-uppercase mb-0 show-text-x-60 ${
                          mobileView ? "text-center" : ""
                        }`}
                      >
                        {t("whoWeAre.values.comfort.title")}
                      </h2>
                      <p className="fw-light fs-6 show-text-x-50">
                        {t("whoWeAre.values.comfort.text")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="info d-flex align-items-start gap-4 mb-4 pb-3 border-bottom border-gray">
                  <div className="d-flex gap-3 w-100">
                    <div className="icon-holder show-text-x-70">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className="text-area">
                      <h2
                        className={`fs-6 text-uppercase mb-0 show-text-x-60 ${
                          mobileView ? "text-center" : ""
                        }`}
                      >
                        {t("whoWeAre.values.customization.title")}
                      </h2>
                      <p className="fw-light fs-6 show-text-x-50">
                        {t("whoWeAre.values.customization.text")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6 p-5 background-light-effect-20">
              <img
                src={OurValuesImage}
                alt="our-values"
                className="square-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="statistics">
        <div className="container-75">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <p className="text-uppercase fs-6 opacity-25 show-text-x-60">
                {t("whoWeAre.stats.subtitle")}
              </p>
              <h2 className="big-title floor-line pb-4 show-text-y-50">
                {t("whoWeAre.stats.title")}
              </h2>
            </div>

            <div ref={countersRef} className="col-lg-8 col-md-12 container">
              <div className="row counters gap-3">
                <div className="col-lg-3 col-md-12 text-center flex-grow-1">
                  {startCount && <Counter count={5} />}
                  <p className="fs-4 text-body-tertiary ls-2 pb-3 show-text-x-10">
                    {t("whoWeAre.stats.experience")}
                  </p>
                </div>
                <div className="col-lg-3 col-md-12 text-center flex-grow-1">
                  {startCount && <Counter count={58} />}
                  <p className="fs-4 text-body-tertiary ls-2 pb-3 show-text-x-10">
                    {t("whoWeAre.stats.wilayas")}
                  </p>
                </div>
                <div className="col-lg-3 col-md-12 text-center flex-grow-1">
                  {startCount && <Counter count={100} type="percent" />}
                  <p className="fs-4 text-body-tertiary ls-2 pb-3 show-text-x-10">
                    {t("whoWeAre.stats.customers")}
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
