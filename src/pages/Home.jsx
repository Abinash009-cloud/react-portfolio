import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
     <motion.div
      className="section"
      id="home"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <div className="home-page">
      <div className="home-content">
        <div className="intro">
          <h1>👋 Hi, I'm <span className="highlight">Abinash Sahoo</span></h1>
          <h2>
  <TypeAnimation
    sequence={[
      'Frontend Developer',
      1500,
      'React Enthusiast',
      1500,
      'UI Designer',
      1500
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

          <p>
            I enjoy crafting clean and interactive UIs using React, JavaScript, HTML, and CSS. Welcome to my portfolio!
          </p>

          <div className="cta-buttons">
 
  <a href="#contact" className="btn">Contact Me</a>
</div>
<div className="social-icons">
  <a href="https://github.com/Abinash009-cloud" target="_blank" rel="noreferrer">
    <i className="fab fa-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/abinash-sahoo-42455425b/" target="_blank" rel="noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
</div>


        </div>

        <div className="home-img">
          <svg
            className="home-blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 
                  311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 
                  237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 
                  466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 
                  219.583 9.19024 145.964Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 
                  311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 
                  237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 
                  466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 
                  219.583 9.19024 145.964Z"
                fill="#61dafb"
              />
              <image
                className="home-blob-img"
                x="0"
                y="0"
                width="100%"
                height="100%"
                href='/src/assets/profile1.png'
                
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
