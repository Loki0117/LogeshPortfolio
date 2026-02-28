import React from 'react';
import '../styles/About.css';

/**
 * About Component
 * Displays personal information, interests, and career milestones
 * Features a responsive two-column layout with interactive elements
 */
const About = () => {
  /**
   * Career milestones timeline data
   * Each object represents a significant achievement or event
   */
  const milestones = [
    {
      id: 1,
      year: '2019',
      title: 'Started My Journey',
      description: 'Completed SSLC with 77% and discovered my passion for computers',
      icon: '🚀'
    },
    {
      id: 2,
      year: '2021',
      title: 'Higher Secondary',
      description: 'Finished HSC with 80.5%, focused on Computer Science stream',
      icon: '📚'
    },
    {
      id: 3,
      year: '2021',
      title: 'B.Tech CSE',
      description: 'Joined Kalasalingam Academy to pursue my dream in tech',
      icon: '🎓'
    },
    {
      id: 4,
      year: '2023',
      title: 'First Project',
      description: 'Built Library Management System using Java and MySQL',
      icon: '💻'
    },
    {
      id: 5,
      year: '2025',
      title: 'Graduation',
      description: 'Completed degree with 7.2 CGPA, ready for industry challenges',
      icon: '✨'
    }
  ];

  /**
   * Personal interests and hobbies
   * Displayed as interactive tags in the about section
   */
  const interests = [
    { id: 1, emoji: '☕', label: 'Coffee enthusiast' },
    { id: 2, emoji: '📚', label: 'Tech reader' },
    { id: 3, emoji: '🎮', label: 'Gaming' },
    { id: 4, emoji: '🌱', label: 'Continuous learner' },
    { id: 5, emoji: '🚗', label: 'Automotive Enthusiast' },
    { id: 6, emoji: '✈️', label: 'Travel enthusiast' }
  ];

  /**
   * Handle interest tag click (optional)
   * Can be expanded for filtering or analytics
   */
  const handleInterestClick = (interest) => {
    // Optional: Add analytics tracking
    console.debug(`Interest clicked: ${interest.label}`);
  };

  return (
    <section 
      id="about" 
      className="about"
      aria-label="About Me Section"
    >
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <h2 className="section-title with-decoration">
            About Me
          </h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Left Column - Personal Story */}
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                👋 Hi there! I'm not just a developer—I'm a problem solver who 
                loves creating things that make a difference.
              </p>
              
              <p>
                My journey in tech started with simple curiosity and has grown 
                into a deep passion for building applications that people 
                actually enjoy using. I believe the best software is invisible it 
                just works and makes life easier.
              </p>
              
              <p>
                <strong>What drives me?</strong> The magical moment when lines 
                of code transform into something that solves real problems. 
                Whether it's helping someone find their career path or organizing 
                books in a library, I'm passionate about creating technology 
                that serves people.
              </p>
              
            </div>

            {/* Interests Section */}
            <div className="interests-section">
              <h3 className="interests-title">
                <span aria-hidden="true">✨</span> When I'm Not Coding
              </h3>
              <div className="interests-grid">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    className="interest-item"
                    onClick={() => handleInterestClick(interest)}
                    aria-label={`Interest: ${interest.label}`}
                    type="button"
                  >
                    <span className="interest-emoji" aria-hidden="true">
                      {interest.emoji}
                    </span>
                    <span className="interest-label">{interest.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Milestones Timeline */}
          <div className="milestones-section">
            <h3 className="milestones-header">
              <span aria-hidden="true">📈</span> My Journey So Far
            </h3>
            
            <div className="timeline" role="list" aria-label="Career milestones timeline">
              {milestones.map((milestone, index) => (
                <article 
                  key={milestone.id}
                  className="timeline-item"
                  role="listitem"
                  style={{ '--item-index': index }}
                >
                  <div className="timeline-year" aria-label={`Year ${milestone.year}`}>
                    <span aria-hidden="true">{milestone.icon}</span>
                    {milestone.year}
                  </div>
                  
                  <div className="timeline-content">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Display name for debugging
About.displayName = 'About';

export default About;