import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './Footer';

const LayoutApp = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;
