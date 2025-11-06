import React, { useState, useEffect } from "react";
import codingImg from "../coding.png";
import { motion } from "framer-motion";

function Home() {
  const [showMore, setShowMore] = useState(false);

  const roles = [
    "Junior Web Developer 💻",
    "Database Designer 🗄️",
    "Junior Software Programmer 🖥️"
  ];
  const [currentRole, setCurrentRole] = useState(0);

  // Loop to animate role text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="home-header"
      style={{ backgroundImage: `url(${codingImg})` }}
    >
      <div className="overlay">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          👋 Hi, I’m Niraj Bhandari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-subtitle"
        >
          {roles[currentRole]}
        </motion.p>

        <motion.button
          className="btn-primary hero-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore(!showMore)}
        >
          🚀 {showMore ? "Show Less" : "Learn More"}
        </motion.button>

        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-me"
          >
       
            <p> Outside coding I love  hiking , sports , and experimenting with tech!!!</p>
             <p className="highlight-quote">
      "Code is like poetry; every line you write builds a story, and every bug you fix teaches patience." 
    </p>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Home;
