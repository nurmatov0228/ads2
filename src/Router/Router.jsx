import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Vacancy from "../Pages/Vacancy";
import NotFound from "../Pages/NotFound";
import Contact from "../Pages/Contact";
import Videos from "../Pages/Videos";
import Allteam from "../Pages/Allteam";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/allvideos" element={<Videos />} />
        <Route path="/teams" element={<Allteam />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
