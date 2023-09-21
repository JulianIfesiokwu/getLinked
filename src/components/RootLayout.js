import React from "react";
import { Outlet } from "react-router";
import Header from "./Header.js";
import Footer from "./Footer.js";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
