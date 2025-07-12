import React from "react";
import { Header } from "./layout/Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <p>Main page</p>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
