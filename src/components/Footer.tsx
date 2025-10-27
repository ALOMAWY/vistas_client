import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mobileView } from "../constants/responsive/moblieView";

const Footer = () => {
  const { t } = useTranslation();
  const productsRef = useRef<HTMLUListElement | null>(null);

  const toggleProducts = () => {
    if (!productsRef.current) return;
    const products = productsRef.current;

    if (products.clientWidth > 1) {
      products.style.cssText = `height: 0px; width: 0px; opacity: 0;`;
    } else {
      products.style.cssText = `height: 150px; width: 100%; opacity: 1;`;
    }
  };

  return (
    <section>
      <footer className="container-75">
        <div className="row text-capitalize ls-n1 justify-content-evenly">
          <div className="info col-md-12 col-lg-8 show-text-y">
            <h3
              className={`fw-bold fs-5 mb-5 position-relative ${
                mobileView ? "m-auto" : ""
              }`}
            >
              Vistas
            </h3>
            <p
              className={`ls-n1 fw-normal text-black lh-lg w-75 ${
                mobileView ? "m-auto text-center mb-5" : ""
              }`}
            >
              {t("footer.aboutText")}
            </p>
          </div>

          <div className="col-2 show-text-x">
            <h6 className="text-black-50 fs-6 pb-4 text-uppercase">
              {t("footer.menu.title")}
            </h6>
            <ul className="list-unstyled text-black p-0">
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/about">
                  {t("footer.menu.about")}
                </Link>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/reception">
                  {t("footer.menu.reception")}
                </Link>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/who-we-are">
                  {t("footer.menu.whoWeAre")}
                </Link>
              </li>
              <li
                className="cursor-pointer fw-medium pb-3 position-relative show-products"
                onClick={toggleProducts}
              >
                <p className="text-black m-0 ">
                  <span className="p-0">{t("footer.menu.product")}</span>
                  <span className="plus-icon">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </p>
                <ul
                  ref={productsRef}
                  className="position-absolute start-50 translate-middle-x p-0 top-100 bg-white border border-gray overflow-y-scroll"
                  style={{ height: "0px", width: "0px", opacity: "0" }}
                >
                  {[...Array(12)].map((_, i) => (
                    <li
                      key={i}
                      className="cursor-pointer fw-medium p-3 border-bottom border-gray"
                    >
                      <Link className="text-black" to="/Products">
                        {t("footer.menu.product")} {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/contact">
                  {t("footer.menu.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-2 show-text-x animation-delay-4">
            <h6 className="text-black-50 fs-6 pb-4 text-uppercase">
              {t("footer.follow.title")}
            </h6>
            <ul className="list-unstyled text-black p-0">
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/whatsapp">
                  {t("footer.follow.whatsapp")}
                </Link>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/facebook">
                  {t("footer.follow.facebook")}
                </Link>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/instagram">
                  {t("footer.follow.instagram")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="copyright border-top pt-3">
        <div className="container-75">
          <p className="fw-normal text-center">
            &#169; 2025 Vistas - {t("footer.rights")} |{t("footer.developedBy")}
            <Link
              className="text-primary p-2"
              to="https://github.com/ALOMAWY"
              target="_blank"
            >
              Abdalrahman ALDABBAS
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
