import { personalInfo } from '../data/portfolioData';
import { Icon } from './Icons';

export const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-glow-bar" />

      <div className="footer-main-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-brand-title">
            <span className="brand-badge-fa">FA</span>
            <span className="brand-fullname">{personalInfo.name}</span>
          </div>
          <p className="footer-bio-snippet">
            Senior Software Engineer specialized in React Native and Frontend engineering.
            Committed to building lightning-fast, intuitive digital products.
          </p>
          <div className="footer-contact-summary">
            <a href={`mailto:${personalInfo.email}`} className="footer-email-link">
              <Icon name="mail" size={15} />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`https://wa.me/${personalInfo.whatsapp}`} className="footer-email-link">
              <Icon name="phone" size={15} />
              <span>{personalInfo.phone}</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            <li>
              <button onClick={() => scrollTo('hero')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollTo('projects')}>Featured Mobile Apps</button>
            </li>
            <li>
              <button onClick={() => scrollTo('skills')}>Technical Skills</button>
            </li>
            <li>
              <button onClick={() => scrollTo('experience')}>Career Experience</button>
            </li>
            <li>
              <button onClick={() => scrollTo('contact')}>Contact & Inquiries</button>
            </li>
          </ul>
        </div>

        {/* Projects Column */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Featured Apps</h4>
          <ul className="footer-links-list">
            <li>
              <button onClick={() => scrollTo('projects')}>Petsbroz (Pet Marketplace)</button>
            </li>
            <li>
              <button onClick={() => scrollTo('projects')}>CollabMind (Residential PM)</button>
            </li>
            <li>
              <button onClick={() => scrollTo('projects')}>Network (Encrypted Messenger)</button>
            </li>
            <li>
              <button onClick={() => scrollTo('projects')}>React.js Web Platforms (Tabula, Vendo)</button>
            </li>
            <li>
              <button onClick={onOpenResume}>Curriculum Vitae (PDF)</button>
            </li>
          </ul>
        </div>

        {/* Connect & Top Column */}
        <div className="footer-connect-col">
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-social-icons">
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn whatsapp"
              aria-label="WhatsApp"
            >
              <Icon name="whatsapp" size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn mail"
              aria-label="Email"
            >
              <Icon name="mail" size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn linkedin"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" size={18} />
            </a>
          </div>

          <button className="footer-back-to-top" onClick={scrollToTop}>
            <span>Back to top</span>
            <Icon name="arrowUp" size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Legal / Tech Bar */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="footer-stack-credit">
          Crafted with React 19, Modern CSS Glassmorphism, 3D Tilt Mockups & Hardware Acceleration.
        </p>
      </div>
    </footer>
  );
};
