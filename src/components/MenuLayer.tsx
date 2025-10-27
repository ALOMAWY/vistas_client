import { Link } from "react-router-dom";
import { useMenu } from "./MenuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const MenuLayer = () => {
  const { isMenuOpen, setIsMenuOpen, isAnimating } = useMenu();
  const { t } = useTranslation();

  return (
    <section
      className="menu-area position-absolute w-100 h-100 bg-transparent top-0 start-0 fixed-top sticky z-2"
      style={{
        display: isMenuOpen ? "block" : "none",
        opacity: isAnimating ? "1" : "0",
      }}
    >
      <div
        id="close-menu"
        className="close-menu position-absolute start-50 translate-middle-x cursor-pointer"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <FontAwesomeIcon icon={faCircleXmark} size="2x" color="white" />
      </div>

      <ul className="text-center text-white list-unstyled position-absolute top-50 start-50 translate-middle p-0">
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block text-center"
            to="/"
          >
            {t("menu.reception")}
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block text-center"
            to="/who_we_are"
          >
            {t("menu.whoWeAre")}
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block text-center"
            to="/#about"
          >
            {t("menu.about")}
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block text-center"
            to="/products"
          >
            {t("menu.products")}
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block text-center"
            to="/contact"
          >
            {t("menu.contact")}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MenuLayer;
