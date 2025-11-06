import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer({ onCopyrightClick, scrollToSection }) {
  return (
    <footer className="footer py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
        {/* Left Column: Personal Info */}
        <div className="personal-info mb-3 mb-md-0">
          <h5 className="mb-2">Niraj Bhandari</h5>
          <p>Junior Web Developer</p>
          <p>Toronto, Ontario, Canada</p>
          <p>
            Computer Programming (Diploma)<br />
            Physical Sciences (Higher Secondary Education)
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="quick-links mb-3 mb-md-0">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="list-unstyled footer-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a></li>
          </ul>
        </div>

        {/* Right Column: Social Media */}
        <div className="social-media">
          <h5 className="mb-3">Connect With Me</h5>
          <div className="social-icons d-flex">
            <a href="https://www.facebook.com/niraj.bhandari.96558/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/nirajz_/" target="_blank" rel="noopener noreferrer" className="ms-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/niraj-bhandari-69aa25307" target="_blank" rel="noopener noreferrer" className="ms-3">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <button className="btn btn-copyright" onClick={onCopyrightClick}>
          © Copyright
        </button>
      </div>
    </footer>
  );
}

export default Footer;
