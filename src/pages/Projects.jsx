import React, { useState } from 'react';
import{ motion } from 'framer-motion';

const projectList = [
  {
    title: 'Typing Speed Test',
    category: 'HTML',
    image: 'src/assets/typing.jpg',
    description: 'Test your typing speed with real-time WPM and accuracy.',
    link: "https://abinash009-cloud.github.io/typing-speed-test/",
    stack: ['HTML', 'CSS'],
  },
  {
    title: 'Task Tracker',
    category: 'React',
    image: 'src/assets/task-tracker.png',
    description: 'Track your tasks efficiently with add, edit, and delete features.',
    link: "https://abinash009-cloud.github.io/react-task-tracker/",
    stack: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    title: 'Multi Fitness Tracker',
    category: 'HTML',
    image: 'src/assets/Fitness Tacker.png',
    description: 'Track your fitness activities with this multi-functional tracker.',
    link: "https://abinash009-cloud.github.io/Multi-Fitness-Tracker/",
    stack: ['HTML', 'CSS', 'JavaScript'],
  }

];


const categories = ['All', 'React', 'HTML'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectList
    : projectList.filter(p => p.category === filter);

  return (
     <motion.section
      className="projects-section"
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <section className="projects-section" id="projects">
      <h2 className="section-title">💼 Projects</h2>

      {/* 🏷 Filter Buttons */}
      <div className="project-filters">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔲 Filtered Projects */}
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project.image} alt={project.title} />
           <div className="project-info">
  <h3>{project.title}</h3>
  <div className="stack-badges">
    {project.stack.map((tech, i) => (
      <span key={i} className="badge">{tech}</span>
    ))}
  </div>
  <span className="tooltip">{project.description}</span>
</div>

          </a>
        ))}
      </div>
    </section>
    </motion.section>
  );
}
