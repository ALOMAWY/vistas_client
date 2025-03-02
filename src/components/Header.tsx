import { Fragment } from "react";

import Logo_Image from "../assets/images/Logo-Vistas.png";

import { useMenu } from "./MenuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  isDark?: boolean;
}

const Header = ({ isDark }: HeaderProps) => {
  const { setIsMenuOpen, isMenuOpen } = useMenu();
  return (
    <div>
      <header>
        <nav className="navbar py-0 bg-transparent">
          <div className="container-75 d-flex justify-content-between align-items-center">
            <a className="" href="#">
              <img
                src={Logo_Image}
                alt=""
                className="img-fluid"
                loading="lazy"
              />
            </a>
            <div
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="menu-bars p-0 rounded d-flex justify-content-center align-items-center cursor-pointer"
              id="menu-btn"
            >
              {isDark ? (
                <Fragment>
                  <span className="text-black pe-4 text-uppercase fs-3">
                    Menu
                  </span>
                  <FontAwesomeIcon icon={faBars} color="black" size="2x" />
                </Fragment>
              ) : (
                <Fragment>
                  <span className="text-white pe-4 text-uppercase fs-3">
                    Menu
                  </span>
                  <FontAwesomeIcon icon={faBars} color="white" size="2x" />
                </Fragment>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
