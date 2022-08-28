import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  const [navMenuActive, setNavMenuActive] = useState(false);

  function hamburgerClickHandler() {
    navMenuActive === false ? setNavMenuActive(true) : setNavMenuActive(false);
  }

  return (
    <BrowserRouter>
      <Navbar
        hamburgerClickHandler={hamburgerClickHandler}
        navMenuActive={navMenuActive}
      />
      <ShoppingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
