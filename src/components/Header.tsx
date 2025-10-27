import { useState } from "react";

import Logo_Image from "../assets/images/Logo-Vistas.png";

import { useMenu } from "./MenuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { languageType, VISTAS_LANGUAGE_KEY } from "../constants/language/lang";

interface HeaderProps {
  isDark?: boolean;
}

const Header = ({ isDark }: HeaderProps) => {
  const { t } = useTranslation();
  const { setIsMenuOpen, isMenuOpen } = useMenu();

  const storageLang: languageType =
    (localStorage.getItem(VISTAS_LANGUAGE_KEY) as languageType) || "en";
  const [lang, setLang] = useState<languageType>(storageLang);

  const handleLanguage = () => {
    const newLang = lang == "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem(VISTAS_LANGUAGE_KEY, newLang);
    i18n.changeLanguage(newLang);

    // Styling

    document.body.dir = newLang == "en" ? "ltr" : "rtl";
    document.body.style.fontFamily =
      newLang == "en"
        ? "var(--bs-body-font-family)"
        : "Noto Sans Arabic, sans-serif";

    const newStyle = document.createElement("style");

    const styleing = `
    *{
    text-align:${newLang == "en" ? "left" : "right"}
    }

    .landing-screen .widgets-layer .quote::after {
    right: ${newLang == "en" ? "-6rem" : "16rem"};
    }`;

    newStyle.append(styleing);

    document.head.appendChild(newStyle);

    // Styling
  };

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

            <div className="d-flex gap-3 align-items-center">
              {isDark ? (
                <>
                  <button
                    className=" bg-transparent border p-1 rounded-3"
                    onClick={handleLanguage}
                  >
                    <FontAwesomeIcon
                      icon={faLanguage}
                      color="black"
                      size="2x"
                    />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className=" bg-transparent border p-2 rounded-3"
                    onClick={handleLanguage}
                  >
                    <FontAwesomeIcon
                      icon={faLanguage}
                      color="white"
                      size="2x"
                    />
                  </button>
                </>
              )}
              <div
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="menu-bars p-0 rounded d-flex justify-content-center align-items-center cursor-pointer"
                id="menu-btn"
              >
                {isDark ? (
                  <div className="d-flex align-items-center gap-4">
                    <span className="text-black  text-uppercase fs-3">
                      {t("header.menu")}
                    </span>
                    <FontAwesomeIcon icon={faBars} color="black" size="2x" />
                  </div>
                ) : (
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-white  text-uppercase fs-3">
                      {t("header.menu")}
                    </span>
                    <FontAwesomeIcon icon={faBars} color="white" size="2x" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
