import React from "react";
import { Outlet } from "react-router-dom";
import TheHeader from "./TheHeader";
import Footer from "./Footer"; // если есть

const Layout = () => {
  return (
    <>
      <TheHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
