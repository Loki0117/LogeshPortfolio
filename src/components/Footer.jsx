import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Logesh S</h3>
            <p>Creating meaningful digital experiences, one project at a time.</p>
           <div className="social-links">
            <a
              href="https://github.com/Loki0117"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/logesh173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:logeshdev0117@gmail.com">
              Email
            </a>
          </div>
          </div>
          
          <div className="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-quote">
            <h4>Currently</h4>
            <p>Open to new opportunities and collaborations. Let's build something great together!</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {year} Logesh S. Made with ☕ and code</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;