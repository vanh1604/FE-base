import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "./components/layout/LayoutApp";
import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LayoutApp />}>
          <Route path='login' element={<Login />} />
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
