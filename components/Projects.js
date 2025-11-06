import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Food Ordering System (Java)",
      points: [
        "Built a console-based application to handle menu items, orders, and billing.",
        "Applied object-oriented programming (OOP) concepts and file handling.",
      ],
    },
    {
      id: 2,
      title: "Catch Game (Java)",
      points: [
        "Designed a simple interactive game using Java and its features.",
        "Implemented loops, conditions, and graphics basics.",
      ],
    },
    {
      id: 3,
      title: "Database Management Project",
      points: [
        "Created and managed tables for a sample ticket booking system.",
        "Practiced SQL queries (insert, update, join, delete).",
      ],
    },
    {
      id: 4,
      title: "Troubleshooting Lab Practice",
      points: [
        "Installed/uninstalled software, resolved driver errors, configured user accounts.",
        "Practiced basic command-line operations in Linux for file navigation.",
      ],
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      points: [
        "Showcased projects, skills, and contact form for the portfolio.",
        "Implemented responsive design and smooth scroll navigation.",
      ],
    },
    {
      id: 6,
      title: "Simple To-Do App (JavaScript)",
      points: [
        "Implemented add, delete, and complete task features.",
        "Used JavaScript, HTML, CSS to create interactive UI.",
      ],
    },
  ];

  return (
    <section className="projects-section container my-5" id="projects">
      {/* Section Heading */}
      <motion.h2
        className="text-center mb-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Small description below heading */}
      <p className="text-center mb-5">
        <strong>I have worked on the following projects to gain skills.</strong>
      </p>

      {/* Projects Grid */}
      <div className="row">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-card p-4 h-100">
              <h4 className="project-title">{proj.title}</h4>
              <ul className="mt-2 text-start">
                {proj.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Animated separator below every project */}
            <motion.div
              className="project-separator my-4"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
