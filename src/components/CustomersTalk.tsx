import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomersTalk = () => {
  return (
    <section className="customers-talk">
      <h1 className="section-title text-center background-altLight-effect-50">
        Customers View
      </h1>
      <div className="views">
        <div className="container-75">
          <div className="row">
            <h1 className="col-md-12 col-lg-4 fs-1 show-text-x-50">
              <p className="">Our customers talk about our products</p>
            </h1>
            <div className="col-md-12 col-lg-4 show-text-y">
              <p className="fw-bold fs-6">
                talk about our products Unparalleled comfort
              </p>
              <p className="fw-normal mt-6">
                Soft and comfortable products, which create a warm and welcoming
                atmosphere in the home.
              </p>
            </div>
            <div className="col-md-12 col-lg-4 show-text-y animation-delay-4">
              <p className="fw-bold fs-6">Tailor-made customization</p>
              <p className="fw-normal mt-6">
                We offer the possibility of customizing some of our products to
                meet your specific needs and to create an interior that suits
                you.
              </p>
            </div>
          </div>
          <div className="gallery-site">
            <div className="content-holder position-relative background-altLight-effect-10">
              <img
                className="img-fluid d-block"
                src="assets/images/testimonials.jpg"
                alt=""
                loading="lazy"
              />
              <div className="info bg-black text-white d-flex flex-wrap justify-content-between position-absolute align-items-center end-0">
                <blockquote className="w-100 show-text-y-10">
                  ”The mati I bought for my daughter is designed with quality
                  materials that protect her against the risk of allergy “
                </blockquote>

                <div className="person mt-5 d-flex gap-4 show-text-x-10">
                  <div className="person-logo rounded-pill">
                    <img
                      className="img-fluid rounded-pill border-3 border-white border"
                      src="assets/images/user.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="name">
                    <p className="first-name mb-2">Ali</p>
                    <p className="last-name text-white-50">Sa3d</p>
                  </div>
                </div>
              </div>
              <div className="buttons d-flex gap-3 mt-3">
                <span className="p-3 main-btn" id="gallery-prev-button">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                <span className="p-3 main-btn" id="gallery-next-button">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersTalk;
