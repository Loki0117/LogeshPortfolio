import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just log to console for now
    console.log('Form submitted:', formData);
    alert('Message feature coming soon! For now, please email me directly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    { 
      icon: '📧', 
      label: 'Email', 
      value: 'logeshdev0117@gmail.com', 
      link: 'mailto:logeshdev0117@gmail.com?subject=Hello%20Logesh&body=Hi%20Logesh%2C%20I%20saw%20your%20portfolio...',
      action: 'open in mail app'
    },
    { 
      icon: '📱', 
      label: 'Phone', 
      value: '+91 93456 94880', 
      link: 'tel:9345694880',
      action: 'call directly'
    },
    { 
      icon: '💻', 
      label: 'GitHub', 
      value: '@logesh011', 
      link: 'https://github.com/Loki0117',
      action: 'view profile'
    },
    { 
      icon: '🔗', 
      label: 'LinkedIn', 
      value: 'Logesh S', 
      link: 'https://www.linkedin.com/in/logesh173/',
      action: 'connect'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-grid">
          {/* Left side - Contact info */}
          <div className="contact-info">
            <h3>Let's connect</h3>
            <p className="contact-intro">
              Feel free to reach out through any of these platforms. 
              I'm always open to talking about new opportunities, projects, or just tech in general.
            </p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.link}
                  className="contact-method"
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <span className="method-icon">{method.icon}</span>
                  <div className="method-details">
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                    <span className="method-action">{method.action} →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="contact-form-container">
            <h3>Send a message</h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send message
              </button>
            </form>

            <p className="form-note">
              *For quick replies, email me directly at logeshdev0117@gmail.com
            </p>
          </div>
        </div>

        <div className="contact-footer">
          <p>📍 Tamil Nadu, India · ☕ Available for work</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;