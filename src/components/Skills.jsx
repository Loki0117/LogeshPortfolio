import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    // Languages
    { name: "Java", icon: "☕", level: "Advanced" },
    { name: "JavaScript", icon: "⚡", level: "Advanced" },
    { name: "SQL", icon: "🗄️", level: "Intermediate" },
    { name: "HTML/CSS", icon: "🎨", level: "Advanced" },
    
    // Frameworks
    { name: "React", icon: "⚛️", level: "Intermediate" },
    { name: "Spring Boot", icon: "🍃", level: "Intermediate" },
    
    // Tools
    { name: "Git", icon: "📦", level: "Advanced" },
    { name: "Postman", icon: "📮", level: "Intermediate" },
    { name: "Eclipse", icon: "🌒", level: "Advanced" },
    { name: "VS Code", icon: "💻", level: "Advanced" },
    { name: "AWS", icon: "☁️", level: "Beginner" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h1 className="skills-title">Technical arsenal</h1>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-inner">
                <div className="skill-front">
                  <span className="skill-icon">{skill.icon}</span>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
                <div className="skill-back">
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;