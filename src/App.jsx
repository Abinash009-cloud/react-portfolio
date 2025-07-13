import React, { useState, useEffect } from 'react';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Skills from './pages/skills';
import Contact from './pages/Contact';

import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import Footer from './pages/footer';
import { Routes, Route, Link } from 'react-router-dom';
 {/* Add this after Routes */}


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="App">
      <ScrollProgress />

      {/* Navbar with logo navigation */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src="public/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="resume"><Resume /></div>
              <div id="projects"><Projects /></div>
              <div id="skills"><Skills /></div>
              <div id="contact"><Contact /></div>
              
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
     
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
      <Footer />

      {/* Scroll to top button */}

    </div>
  );
}
