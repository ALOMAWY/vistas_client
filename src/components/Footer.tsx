import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
            <h3 className="fw-bold fs-5 mb-5 position-relative">Vistas</h3>

            <p className="ls-n1 fw-normal text-black lh-lg w-75">
              Passionate about Interior Design and motivated by the desire to
              offer the best to the Algerian consumer, the founders of Vistas
              then made the decision to create this home textile company
              stemming from Link combination of deep motivations and personal
              convictions
            </p>
          </div>

          <div className="col-2 show-text-x">
            <h6 className="text-black-50 fs-6 pb-4 text-uppercase">Menu</h6>
            <ul className="list-unstyled text-black">
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/Products">
                  about
                </Link>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/Products">
                  reception
                </Link>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/Products">
                  Who We Are
                </Link>
              </li>
              <li
                className="cursor-pointer fw-medium pb-3 position-relative show-products"
                onClick={() => toggleProducts()}
              >
                <p className="text-black m-0">
                  <span> product </span>
                  <span className="plus-icon">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </p>
                <ul
                  ref={productsRef}
                  className="position-absolute start-50 translate-middle-x p-0 top-100 bg-white border border-gray overflow-y-scroll"
                  style={{ height: "0px", width: "0px", opacity: "0" }}
                >
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                  <li className="cursor-pointer fw-medium p-3 border-bottom border-gray">
                    <Link className="text-black" to="/Products">
                      product
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/Products">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2 show-text-x animation-delay-4">
            <h6 className="text-black-50 fs-6 pb-4 text-uppercase">Follow</h6>
            <ul className="list-unstyled text-black">
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/Products">
                  Whatsapp
                </Link>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/Products">
                  Facebook
                </Link>
              </li>
              <li className="cursor-pointer fw-medium pb-3">
                <Link className="text-black" to="/Products">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright border-top pt-3">
        <div className="container-75">
          <p className="fw-normal">
            &#169; 2025 Vistas - All rights reversed | site developed by
            <Link className="text-primary p-2" to="https://github.com/ALOMAWY">Abdalrahman ALDABBAS</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
