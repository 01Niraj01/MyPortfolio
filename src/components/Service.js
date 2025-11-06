import React, { useState } from "react";
import { Code, Database, Laptop } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Service() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "Building responsive websites using React & Bootstrap.",
      more: "✨ I focus on creating clean, scalable, and SEO-friendly web solutions that provide excellent user experience.",
      icon: <Code size={50} color="#0d6efd" />,
    },
    {
      id: 2,
      title: "Database Management",
      desc: "Experienced in MySQL, SQL queries, and data analysis.",
      more: "⚡ I design efficient database structures, write optimized queries, and ensure smooth data handling.",
      icon: <Database size={50} color="#198754" />,
    },
    {
      id: 3,
      title: "Software Development",
      desc: "Creating Java and Python applications with clean architecture.",
      more: "🚀 I love problem-solving and delivering reliable, maintainable applications.",
      icon: <Laptop size={50} color="#dc3545" />,
    },
  ];

  return (
    <div className="container my-5" id="services">
      <motion.h2
        className="text-center mb-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Services
      </motion.h2>

      {/* New subtitle text */}
      <motion.p
        className="text-center mb-5 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
       
        <strong>The services I provide are listed below :</strong>
      
      </motion.p>

      <div className="row text-center">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="service-card"
              onClick={() => toggleExpand(service.id)}
            >
              <motion.div className="service-icon mb-3">
                {service.icon}
              </motion.div>

              <h4>{service.title}</h4>
              <p>{service.desc}</p>

              <AnimatePresence>
                {expanded === service.id && (
                  <motion.p
                    className="service-more mt-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.more}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                className="btn btn-sm btn-outline-primary mt-3"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(service.id);
                }}
              >
                {expanded === service.id ? "Show Less ▲" : "Read More ▼"}
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Service;
