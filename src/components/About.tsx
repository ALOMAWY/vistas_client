import Image_About_1 from "../assets/images/about_1.jpg";
import Image_About_2 from "../assets/images/about_2.jpg";
import Image_About_3 from "../assets/images/about_3.jpg";
import Image_About_4 from "../assets/images/about_4.jpg";
import Image_About_5 from "../assets/images/about_5.jpg";
import ImageShadow from "react-image-shadow";

const About = () => {
  return (
    <section
      className="sections about position-relative z-1 bg-white"
      id="about"
    >
      <h1 className="section-title text-center background-light-effect-50">
        About
      </h1>

      <div className="container-75">
        <div className="row">
          <div className="text-area col-xxl-5 col-lg-12 text-start text-black">
            <div className="show-text-x-50">
              <h6 className="fs-6 fw-normal mb-3 ls-none">About Vistas</h6>
              <h1 className="fw-bold lh-base">
                Quality products within everyone's reach
              </h1>
            </div>
            <div className="mt-5 show-text-y-50">
              <p className="fw-bold fs-6 mb-3 ls-none">
                Innovation and creativity
              </p>

              <p className="fw-normal lh-base ls-1">
                We are constantly looking to innovate and create new designs and
                styles to meet the changing needs of our customers.
              </p>
            </div>
            <div className="my-5 show-text-y-50">
              <p className="fw-bold fs-6 mb-3 ls-none">
                Comfort and well-being
              </p>

              <p className="fw-normal lh-base ls-1">
                We design products that bring comfort and well-being to the
                interior of homes.
              </p>
            </div>

            <a
              href="#"
              className="main-btn bg-black text-white p-4 ls-1 mt-6 fw-normal text-uppercase"
            >
              Discover Our Products
            </a>
          </div>

          <div className="images-area col-lg-12 col-xxl-7 pt-5">
            <div className="container-75">
              <div className="row">
                <div className="col-lg-6 col-sm-12 d-flex flex-column gap-4 justify-content-center">
                  <div className="img-holder background-light-effect-10">
                    <a
                      href={Image_About_1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImageShadow src={Image_About_1} className="m-auto" />
                    </a>
                  </div>
                  <div className="img-holder background-light-effect-10">
                    <a
                      href={Image_About_2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImageShadow src={Image_About_2} className="m-auto" />
                    </a>
                  </div>
                  <div className="img-holder background-light-effect-10">
                    <a
                      href={Image_About_3}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImageShadow src={Image_About_3} className="m-auto" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 d-flex flex-column gap-4">
                  <div className="img-holder background-light-effect-10">
                    <a
                      href={Image_About_4}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImageShadow src={Image_About_4} className="m-auto" />
                    </a>
                  </div>
                  <div className="img-holder background-light-effect-10">
                    <a
                      href={Image_About_5}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImageShadow src={Image_About_5} className="m-auto" />
                    </a>
                  </div>
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
