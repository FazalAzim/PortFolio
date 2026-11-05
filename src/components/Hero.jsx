import { useState, useEffect } from 'react';
import { Icon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const rotatingTitles = [
  "React.js & React Native Developer",
  "Senior Mobile & Web Software Engineer",
  "Cross-Platform Mobile Architect",
  "High-Performance Frontend Specialist",
];

export const Hero = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
        setFadeState('fade-in');
      }, 400);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-orb hero-glow-1" />
      <div className="hero-glow-orb hero-glow-2" />

      <div className="hero-content">
        {/* Availability Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-status-pill">
            <span className="status-ping" />
            <span className="status-text">Available for React.js & React Native Opportunities</span>
            <span className="status-divider">•</span>
            <span className="status-loc">{personalInfo.location}</span>
          </div>
        </div>

        {/* Profile Avatar & Interactive Glow Ring */}
        <div className="hero-avatar-showcase">
          <div className="avatar-ambient-glow" />
          <div className="avatar-border-ring">
            <div className="avatar-inner">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="hero-avatar-img"
              />
            </div>
          </div>

          {/* Floating Experience Tag */}
          <div className="floating-stat-card stat-exp">
            <div className="stat-icon-wrap">
              <Icon name="sparkles" size={18} />
            </div>
            <div className="stat-content">
              <span className="stat-number">4+ Years</span>
              <span className="stat-label">Production Exp</span>
            </div>
          </div>

          {/* Floating Dual React / Native Tag */}
          <div className="floating-stat-card stat-native">
            <div className="stat-icon-wrap">
              <Icon name="code" size={18} />
            </div>
            <div className="stat-content">
              <span className="stat-number">React.js & Native</span>
              <span className="stat-label">Web • iOS • Android</span>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="hero-text-block">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name-title">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="rotating-title-box">
            <span className={`rotating-title ${fadeState}`}>
              {rotatingTitles[titleIndex]}
            </span>
          </div>

          <p className="hero-lead-bio">
            Results-driven Software Engineer with 4+ years of professional experience building
            modern, scalable, and user-friendly web and mobile applications. Specialized in
            front-end and cross-platform technologies with deep expertise in <strong>React.js</strong> and <strong>React Native</strong>,
            collaborating with backend teams, architecting clean state with Redux, and integrating
            Firebase & CallKeep native APIs.
          </p>

          {/* Core Tech Stack Badges */}
          <div className="hero-stack-chips">
            <span className="stack-chip highlight">React.js (Web)</span>
            <span className="stack-chip highlight">React Native (Mobile)</span>
            <span className="stack-chip">TypeScript</span>
            <span className="stack-chip">Next.js</span>
            <span className="stack-chip">Redux Toolkit</span>
            <span className="stack-chip">Firebase</span>
            <span className="stack-chip">CallKeep</span>
            <span className="stack-chip">REST APIs</span>
            <span className="stack-chip">Agile / Scrum</span>
          </div>

          {/* Hero CTAs */}
          <div className="hero-cta-group">
            <button className="primary-hero-btn" onClick={scrollToProjects}>
              <span>Explore Featured Projects</span>
              <Icon name="arrowDown" size={18} />
            </button>

            <button className="secondary-hero-btn" onClick={onOpenResume}>
              <Icon name="briefcase" size={18} />
              <span>View Updated CV</span>
            </button>

            <a
              href="/fazal-azim-resume.pdf"
              download="Fazal-Azim-CV.pdf"
              className="tertiary-hero-btn"
            >
              <Icon name="download" size={17} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="hero-metrics-grid">
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="metric-card">
              <div className="metric-glow" />
              <div className="metric-val">{stat.value}</div>
              <div className="metric-label">{stat.label}</div>
              <div className="metric-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
