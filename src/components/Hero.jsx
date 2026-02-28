import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

/**
 * Hero Component
 * Landing section with personal introduction and call-to-action buttons
 * Features animated entrance, social proof stats, and responsive design
 */
const Hero = () => {
  // Refs for animation control
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  /**
   * Handle scroll-based animations
   * Reveals stats when they come into view
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stats-visible');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    const currentRef = statsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  /**
   * Handle smooth scroll to sections
   * @param {Event} e - Click event
   * @param {string} targetId - ID of target section
   */
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update URL without page jump
      window.history.pushState(null, '', targetId);
    }
  };

  /**
   * Personal stats data
   * Used in social proof section
   */
  const personalStats = [
    {
      id: 1,
      value: '3+',
      label: 'Projects Built',
      ariaLabel: '3 plus projects completed'
    },
    {
      id: 2,
      value: '2025',
      label: 'Graduate',
      ariaLabel: 'Graduated in 2025'
    }
  ];

  return (
    <section 
      id="home" 
      className="hero"
      ref={heroRef}
      aria-label="Hero section with personal introduction"
    >
      <div className="container">
        <div className="hero-content">
          
          {/* Greeting Badge */}
          <div className="hero-badge" role="status" aria-live="polite">
            <span aria-hidden="true">👋</span>
            <span>Hey, I'm</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-name">
            Logesh S
          </h1>

          {/* Professional Title */}
          <p className="hero-title">
            Computer Science Graduate &{' '}
            <strong className="highlight">
              Full-Stack Developer
            </strong>
          </p>

          {/* Description */}
          <p className="hero-description">
            I turn ideas into real-world applications. With 3+ projects under my belt,
            I specialize in building meaningful digital experiences using Java, React, 
            and Spring Boot. Currently seeking opportunities to make an impact.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-actions" role="group" aria-label="Call to action buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              aria-label="View my portfolio projects"
            >
              <span aria-hidden="true">→</span>
              See My Work
            </a>
            
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              aria-label="Get in touch with me"
            >
              Let's Talk
              <span aria-hidden="true">←</span>
            </a>
          </div>

          {/* Social Proof Stats */}
          <div 
            className="hero-stats" 
            ref={statsRef}
            role="list" 
            aria-label="Personal statistics"
          >
            {personalStats.map((stat) => (
              <div 
                key={stat.id} 
                className="stat-item"
                role="listitem"
              >
                <span 
                  className="stat-number" 
                  aria-label={stat.ariaLabel}
                >
                  {stat.value}
                </span>
                <span className="stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Optional: Scroll indicator */}
          <div className="scroll-indicator" aria-hidden="true">
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="scroll-link"
              aria-label="Scroll down to about section"
            >
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Display name for debugging
Hero.displayName = 'Hero';

export default Hero;