import React from 'react';
import { motion } from 'framer-motion';


export default function Resume() {
  return (
    <motion.section
      className="resume-section"
      id="resume"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">📄 My Resume</h2>

      <div className="resume-content">
        <div className="resume-block">
          <h3>🎓 Education</h3>
          <p><strong>B.Tech in Computer Science</strong> – Gandhi Institute for Education and Technology</p>
          <p>2021 – 2025</p>
        </div>

        

        

        <div className="resume-block download-btn">
          <a href="public/resume.pdf" target="_blank" rel="noreferrer">
            📥 Download Resume (PDF)
          </a>
        </div>
      </div>
    </motion.section>
  );
}
