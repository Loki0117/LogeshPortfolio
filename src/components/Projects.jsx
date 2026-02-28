import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Career Guidance Platform",
      description: "An interactive web app that helps students discover their ideal career path through a simple quiz. Built with vanilla JavaScript for fast, responsive user experience.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Loki0117/LightHouse17/tree/main",
      live: "https://light-house17.vercel.app/?#resources",
      duration: "Nov 2021 - May 2025",
      features: [
      "Interactive multi-step career quiz with dynamic recommendations",
      "Category-based filtering and real-time job search system",
      "Service booking and resume upload using modal interfaces",
      "Fully responsive UI built with custom HTML, CSS and JavaScript"
    ],
      category: "web"
    },
    {
      id: 2,
      title: "Interactive Portfolio",
      description: "Developed a component-based React portfolio to demonstrate my frontend development skills and highlight completed projects. Focused on clean architecture, performance optimization, and responsive design.",
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/logesh011/portfolio",
      live: "https://logesh-dev.vercel.app",
      duration: "June 2023",
      features: [
        "Dark/light theme toggle using React state",
        "Smooth scrolling with active navigation tracking",
        "Modular reusable components",
        "Fully responsive mobile-first layout"
      ],
      category: "web"
    },
    {
      id: 3,
      title: "Library Management System",
      description: "Developed a desktop-based library management application to streamline book tracking and user records. The system focuses on structured data handling and clean separation of application logic using the MVC pattern.",
      tech: ["Java", "MySQL", "JDBC", "MVC"],
      github: "https://github.com/Loki0117/Librarymanagement",
      live: null,
      duration: "Jan 2023",
      features: [
        "Full CRUD operations for managing books and users",
        "Secure MySQL database integration using JDBC",
        "Structured architecture following MVC principles",
        "Fast search functionality for efficient record retrieval"
      ],
      category: "desktop"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title with-decoration">Projects I've Built</h2>
          <p className="section-subtitle">
            Real-world applications I've developed during my journey
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              
              {/* Project Header */}
              <header className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <time className="project-duration">{project.duration}</time>
              </header>

              {/* Project Description */}
              <p className="project-description">{project.description}</p>

              {/* Key Features */}
              <div className="project-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-icon">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <footer className="project-footer">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <span className="link-icon" aria-hidden="true">📦</span>
                  <span>GitHub</span>
                </a>
                
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link live-link"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <span className="link-icon" aria-hidden="true">🚀</span>
                    <span>Live Demo</span>
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;