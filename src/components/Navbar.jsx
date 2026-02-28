import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');
  
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { id: 'home', label: 'Home'  },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects'},
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActive(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, );

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    setMobileOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <a 
          href="#home" 
          className="navbar-logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className="navbar-logo-text">LS</span>
        </a>

        {/* Desktop Menu */}
        <nav className={`navbar-menu ${mobileOpen ? 'navbar-menu-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar-link ${active === item.id ? 'navbar-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <span className="navbar-link-icon">{item.icon}</span>
              <span className="navbar-link-label">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          <button 
            className="navbar-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button 
            className={`navbar-hamburger ${mobileOpen ? 'navbar-hamburger-active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="navbar-overlay" onClick={() => setMobileOpen(false)}></div>
        )}
      </div>
    </header>
  );
};

export default Navbar;