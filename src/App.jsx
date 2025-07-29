import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "./components/layout/LayoutApp";
import "./App.css";
import Home from "./pages/Home-page/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart-Item/Cart";
import ProductDetail from "./pages/ProductDetaild";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LayoutApp />}>
          <Route path='login' element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
