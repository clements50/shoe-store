import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  const [navMenuActive, setNavMenuActive] = useState(false);

  function navMenuHandler() {
    navMenuActive === false ? setNavMenuActive(true) : setNavMenuActive(false);
  }

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar navMenuHandler={navMenuHandler} navMenuActive={navMenuActive} />
        <ShoppingCart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
