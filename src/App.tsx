import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./css/master.css";
import "./css/normalize.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home.tsx";
import MenuLayer from "./components/MenuLayer.tsx";
import WhoWeAre from "./components/WhoWeAre.tsx";
import { MenuProvider } from "./components/MenuContext.tsx";
import Contact from "./components/Contact.tsx";
import Products from "./components/Products.tsx";
import Dashboard from "./components/Dashborad.tsx";
import ProductDetails from "./components/ProductDetails.tsx";
import {
  languageType,
  VISTAS_LANGUAGE_KEY,
} from "./constants/language/lang.ts";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const setLanguageSettings = () => {
      const currentLanguage = localStorage.getItem(
        VISTAS_LANGUAGE_KEY
      ) as languageType;

      document.body.dir = currentLanguage == "en" ? "ltr" : "rtl";
      document.body.style.fontFamily =
        currentLanguage == "en"
          ? "var(--bs-body-font-family)"
          : "Noto Sans Arabic, sans-serif";

      const newStyle = document.createElement("style");

      const styleing = `
    *{
    text-align:${currentLanguage == "en" ? "left" : "right"}
    }

    .landing-screen .widgets-layer .quote::after {
    right: ${currentLanguage == "en" ? "-6rem" : "16rem"};
    }`;

      newStyle.append(styleing);

      document.head.appendChild(newStyle);
    };
    setLanguageSettings();
  }, []);
  // Styling

  return (
    <MenuProvider>
      <BrowserRouter>
        <MenuLayer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/who_we_are" element={<WhoWeAre />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/dashboard_963" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;
