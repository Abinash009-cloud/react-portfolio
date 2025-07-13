import React from 'react';
import { motion } from 'framer-motion';


export default function About() {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-image">
  <img src="src/assets/profile.jpg" alt="Abinash Sahoo" />
</div>

      <h2 className="section-title">🙋‍♂️ About Me</h2>
      <p className="about-description">
        Hello! I'm <strong>Abinash Sahoo</strong>, a passionate Frontend Developer based in India.
        I love creating interactive and responsive websites using <strong>React</strong>, 
        <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.
      </p>
      <p className="about-description">
        I'm a B.Tech student who enjoys turning complex problems into elegant solutions. I’ve worked on 
        projects like a Typing Speed Test, Todo App, and Weather App to strengthen my skills.
      </p>
      <p className="about-description">
        I'm always eager to learn new technologies and explore creative ways to improve user experience. 
        Let's build something awesome together!
      </p>
    </motion.section>
  );
}
