import React, { useState } from "react";
import { motion } from "framer-motion";
import aboutImg from "../niraj.png"; // Replace with your About image

function About() {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    "Python 🐍",
    "JavaScript ⚡",
    "React 💻",
    "SQL 🗄️",
    "CSS 🎨",
    "Teamwork 🤝",
    "Problem Solving 🧩",
  ];

  return (
    <section className="about-section">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={aboutImg} alt="About Me" className="about-img" />
        <div className="about-content">
          <h2>About</h2>
       <p>
             I am a Computer Programming student  with skills in Python, JavaScript, CSS, and SQL. 
             I enjoy learning how to build practical software solutions and improving my knowledge in web development and database management. 
             With past experience in customer service, I bring strong teamwork, problem-solving, and communication skills.
              I am eager to apply my technical abilities, keep growing in the tech field, and explore opportunities in software development and IT.
            </p>
           
            <h3>Education</h3>
            <p>
              Higher Secondary School: St. Lawrence College<br />
              Diploma in Computer Programming: Sault College, Canada
            </p>
           
           
            <h3>Goals</h3>
            <p>
              I aim to create secure and scalable applications, continue learning new technologies, 
              and contribute meaningfully to the software development and IT industry.
            </p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSkills(!showSkills)}
          >
            {showSkills ? "Hide Skills 🔽" : "Show My Skills 🚀"}
          </motion.button>

          {showSkills && (
            <motion.ul
              className="skills-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {skills.map((skill, idx) => (
                <li key={idx}>✅ {skill}</li>
              ))}
            </motion.ul>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
