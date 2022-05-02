import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../pages/About";
import Css from "../pages/Css";
import Home from "../pages/Home";
import Html from "../pages/Html";
import Logo from "../pages/Logo";
import Services from "../pages/Services";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/html" element={<Html/>} />
        <Route path="/css" element={<Css/>} />
        <Route path="/logo" element={<Logo/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default AppRouter;
