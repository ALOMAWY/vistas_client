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
// import ImageCropper from "./components/ImageCropper.tsx";

function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <MenuLayer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Who_We_Are" element={<WhoWeAre />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Dashboard_963" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;
