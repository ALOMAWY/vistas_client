import React from "react";
import { useTranslation } from "react-i18next";

const Discover = () => {
  const { t } = useTranslation();

  return (
    <section className="discover bg-black w-100 h-100 text-white">
      <div className="container-75">
        <div className="row">
          <h1 className="col-lg-5 col-md-6 col-sm-12 show-text-x-50">
            <p className="fs-1 ls-none text-white">{t("discover.title")}</p>
          </h1>

          <div className="col-lg-7 col-md-6 col-sm-12 d-flex justify-content-evenly align-items-start">
            <p className="fw-normal ls-none text-white-50 show-text-x-50">
              {t("discover.text")}
            </p>

            <a
              className="text-uppercase py-4 px-5 fw-normal show-text-y-50"
              href="who_we_are.html"
            >
              {t("discover.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
