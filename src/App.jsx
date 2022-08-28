import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ShoppingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
