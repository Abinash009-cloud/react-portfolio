import React from 'react';


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img src="Logo-copy.png" alt="Logo" />
        </div>

        {/* Thank you message */}
        <p className="footer-thankyou">👣 Thank you for visiting my portfolio!</p>

        {/* Back to Top */}
        <button className="back-to-top-footer" onClick={scrollToTop}>
          ↑ Back to Top
        </button>

        {/* Footer Text */}
        <p className="footer-text">
          © {new Date().getFullYear()} Abinash Sahoo — All Rights Reserved
        </p>

        {/* Social Links */}
        <div className="footer-socials">
          <a href="https://github.com/abinash009-cloud" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/abinash-sahoo-42455425b/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        
          <a href="mailto:sahooabinash0123@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
