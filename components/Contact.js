import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // hide message after 3s
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">
      <motion.div
        className="container my-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center mb-4">Contact</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </motion.div>

          <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </motion.div>

          {/* Subject Field */}
          <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <label>Subject</label>
          </motion.div>

          <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label>Message</label>
          </motion.div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.p
              className="success-msg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
