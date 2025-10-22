
import { Link } from "react-router-dom";
import { useMenu } from "./MenuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const MenuLayer = () => {
  const { isMenuOpen, setIsMenuOpen, isAnimating } = useMenu();
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
      <ul className="text-center text-white list-unstyled position-absolute top-50 start-50 translate-middle">
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block"
            to="/"
          >
            Reception
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block"
            to="/who_we_are"
          >
            Who We Are
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block"
            to="/#about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block"
            to="/products"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-decoration-none text-white cursor-pointer fs-4 p-4 fw-bold text-capitalize d-block"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MenuLayer;
