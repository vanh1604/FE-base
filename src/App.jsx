import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "./components/layout/LayoutApp";

import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
