import Image_About_1 from "../assets/images/about_1.jpg";
import Image_About_2 from "../assets/images/about_2.jpg";
import Image_About_3 from "../assets/images/about_3.jpg";
import Image_About_4 from "../assets/images/about_4.jpg";
import Image_About_5 from "../assets/images/about_5.jpg";
import ImageShadow from "react-image-shadow";
import { useTranslation } from "react-i18next";
import { mobileView } from "../constants/responsive/moblieView";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      className="sections about position-relative z-1 bg-white"
      id="about"
    >
      <h1 className="section-title text-center background-light-effect-50">
        {t("about.sectionTitle")}
      </h1>

      <div className="container-75">
        <div className="row">
          <div className="text-area col-xxl-5 col-lg-12 text-start text-black">
            <div className="show-text-x-50">
              <h6
                className={`fs-6 fw-normal mb-3 ls-none ${
                  +mobileView ? "text-center" : ""
                }`}
              >
                {t("about.subtitle")}
              </h6>
              <h1
                className={`fw-bold lh-base ${mobileView ? "text-center" : ""}`}
              >
                {t("about.headline")}
              </h1>
            </div>

            <div className={"mt-5 show-text-y-50"}>
              <p
                className={`fw-bold fs-6 mb-3 ls-none ${
                  mobileView ? "text-center" : ""
                }`}
              >
                {t("about.innovationTitle")}
              </p>
              <p
                className={`fw-normal lh-base ls-1 ${
                  mobileView ? "text-center" : ""
                }`}
              >
                {t("about.innovationText")}
              </p>
            </div>

            <div className="my-5 show-text-y-50">
              <p
                className={`fw-bold fs-6 mb-3 ls-none ${
                  +mobileView ? "text-center" : ""
                }`}
              >
                {t("about.comfortTitle")}
              </p>
              <p
                className={`fw-normal lh-base ls-1 ${
                  mobileView ? "text-center" : ""
                }`}
              >
                {t("about.comfortText")}
              </p>
            </div>

            <a
              href="#"
              className="main-btn bg-black text-white p-4 ls-1 mt-6 fw-normal text-uppercase"
            >
              {t("about.discoverButton")}
            </a>
          </div>

          <div className="images-area col-lg-12 col-xxl-7 pt-5">
            <div className="container-75">
              <div className="row">
                <div className="col-lg-6 col-sm-12 d-flex flex-column gap-4 justify-content-center">
                  {[Image_About_1, Image_About_2, Image_About_3].map(
                    (img, i) => (
                      <div
                        key={i}
                        className="img-holder background-light-effect-10"
                      >
                        <a href={img} target="_blank" rel="noopener noreferrer">
                          <ImageShadow src={img} className="m-auto" />
                        </a>
                      </div>
                    )
                  )}
                </div>

                <div className="col-lg-6 col-sm-12 d-flex flex-column gap-4">
                  {[Image_About_4, Image_About_5].map((img, i) => (
                    <div
                      key={i}
                      className="img-holder background-light-effect-10"
                    >
                      <a href={img} target="_blank" rel="noopener noreferrer">
                        <ImageShadow src={img} className="m-auto" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
