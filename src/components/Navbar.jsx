import { useState, useEffect } from 'react';
import { Icon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['hero', 'projects', 'skills', 'experience', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand / Logo */}
        <button className="nav-brand" onClick={() => scrollTo('hero')}>
          <div className="brand-avatar">
            <span className="brand-initials">FA</span>
            <span className="brand-dot" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-title">React.js & React Native</span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          <button
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollTo('projects')}
          >
            <span>Projects</span>
            <span className="link-counter">Web & Mobile</span>
          </button>
          <button
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollTo('skills')}
          >
            <span>Skills</span>
          </button>
          <button
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => scrollTo('experience')}
          >
            <span>Experience</span>
          </button>
          <button
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollTo('contact')}
          >
            <span>Contact</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button className="nav-cv-btn" onClick={onOpenResume}>
            <Icon name="briefcase" size={16} />
            <span>Resume & CV</span>
          </button>

          <button className="nav-hire-btn" onClick={() => scrollTo('contact')}>
            <span className="hire-glow" />
            <span>Hire Me</span>
            <Icon name="arrowUpRight" size={15} />
          </button>

          {/* Mobile hamburger button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-links">
            <button
              className={`mobile-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollTo('projects')}
            >
              <Icon name="mobile" size={20} />
              <span>Featured Mobile Apps (3)</span>
            </button>
            <button
              className={`mobile-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollTo('skills')}
            >
              <Icon name="code" size={20} />
              <span>Technical Skills</span>
            </button>
            <button
              className={`mobile-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollTo('experience')}
            >
              <Icon name="briefcase" size={20} />
              <span>Career Journey</span>
            </button>
            <button
              className={`mobile-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollTo('contact')}
            >
              <Icon name="mail" size={20} />
              <span>Get in Touch</span>
            </button>
          </div>

          <div className="mobile-drawer-footer">
            <button
              className="mobile-cv-action"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <Icon name="download" size={18} />
              <span>View & Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
