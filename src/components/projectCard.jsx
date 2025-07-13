import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <a href={link} target="_blank">View Project</a>
      </div>
    </div>
  );
}
