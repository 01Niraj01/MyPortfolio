import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";



function App() {
  const [showModal, setShowModal] = useState(false);

  /* Scroll to section */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <span className="navbar-brand">Niraj Bhandari</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("home")}>Home</button></li>
              <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("about")}>About</button></li>
              <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("services")}>Services</button></li>
              <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("projects")}>Projects</button></li>
              <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("contact")}>Contact</button></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Service /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>

      {/* Footer */}
      <Footer
        onCopyrightClick={() => setShowModal(true)}
        scrollToSection={scrollToSection}
      />

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h4>Copyright Information</h4>
            <p>© Niraj Bhandari. All Rights Reserved</p>
            <p>Designed by Niraj Bhandari</p>
            <button className="btn-close" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
