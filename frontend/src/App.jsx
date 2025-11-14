import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Choose from "./components/Choose";
import Ideas from "./components/Ideas";
import Promise from "./components/Promise";
import Services from "./components/Services";
import Value from "./components/Value";
import Clients from "./components/Clients";
import Touch from "./components/Touch";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ImpressumPage from "./pages/ImpressumPage";
import RealPage from "./pages/RealPage";
import ServicesPage from "./pages/ServicesPage";

const Home = () => (
  <>
    <Hero />
    <Choose />
    <Ideas />
    <Promise />
    <Services />
    <Value />
    <Clients />
    <Touch />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-invest-black text-invest-white">
        <Navbar />

        {/* Main Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/real" element={<RealPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>

        {/* Footer always visible */}
        <Footer />  
      </div>
    </Router>
  );
};

export default App;
