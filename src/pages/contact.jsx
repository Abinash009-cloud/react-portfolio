import React, { useState } from 'react';
import { motion } from 'framer-motion';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add EmailJS or API call here
    setSubmitted(true);
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">📬 Contact Me</h2>

      {submitted ? (
        <p className="thank-you">✅ Thank you! I’ll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </motion.section>
  );
}
