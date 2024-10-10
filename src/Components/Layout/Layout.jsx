import React from "react";
import { ToastContainer } from "react-toastify";
import Router from "../../Router/Router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topnav from "../Topnav/Topnav";

const Layout = () => {
  return (
    <div>
      <header>
        <Topnav />
        <Navbar />
      </header>
      <ToastContainer className="toastify" />
      <div className="router">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
