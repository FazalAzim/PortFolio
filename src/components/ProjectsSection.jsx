import { useState } from 'react';
import { featuredProjects, reactWebProjects } from '../data/portfolioData';
import { PhoneMockup } from './PhoneMockup';
import { Icon } from './Icons';

export const ProjectsSection = ({ onOpenGallery }) => {
  const [activeScreens, setActiveScreens] = useState({
    petsbroz: 0,
    collabmind: 0,
    network: 0,
  });

  // Filter mode: 'all' | 'mobile' | 'react-web'
  const [activeCategory, setActiveCategory] = useState('all');

  const handleSelectScreen = (projectId, index) => {
    setActiveScreens((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  const showMobile = activeCategory === 'all' || activeCategory === 'mobile';
  const showWeb = activeCategory === 'all' || activeCategory === 'react-web';

  return (
    <section id="projects" className="projects-section">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="section-pill">
          <Icon name="layers" size={16} />
          <span>Production Portfolio</span>
        </div>
        <h2 className="section-main-heading">
          Featured <span className="gradient-text">React & React Native</span> Projects
        </h2>
        <p className="section-lead-desc">
          Specializing in dual-discipline front-end engineering: fluid 60 FPS mobile apps
          with <strong>React Native</strong> and enterprise dashboard architectures with{' '}
          <strong>React.js</strong>.
        </p>

        {/* Category Filter Tabs */}
        <div className="project-filter-bar">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Projects (Web & Mobile)
          </button>
          <button
            className={`filter-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
          >
            <Icon name="mobile" size={15} />
            <span>Mobile Apps (React Native)</span>
          </button>
          <button
            className={`filter-btn ${activeCategory === 'react-web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('react-web')}
          >
            <Icon name="code" size={15} />
            <span>Web Applications (React.js)</span>
          </button>
        </div>
      </div>

      {/* Flagship Mobile Applications */}
      {showMobile && (
        <div className="mobile-showcase-wrapper">
          <div className="portfolio-subgroup-header">
            <div className="subgroup-title-box">
              <span className="subgroup-tag">Cross-Platform iOS & Android</span>
              <h3 className="subgroup-heading">React Native Flagship Apps</h3>
            </div>
            <span className="subgroup-count">3 Apps Interactive</span>
          </div>

          <div className="projects-showcase-list">
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 1;
              const currentScreenIndex = activeScreens[project.id] || 0;

              return (
                <article
                  key={project.id}
                  className={`project-feature-card ${isEven ? 'reversed' : ''}`}
                  style={{
                    '--accent-color': project.accentColor,
                    '--glow-color': project.borderGlow,
                  }}
                >
                  {/* Device Mockup Column */}
                  <div className="project-mockup-col">
                    <PhoneMockup
                      screens={project.screens}
                      activeIndex={currentScreenIndex}
                      onSelectScreen={(idx) => handleSelectScreen(project.id, idx)}
                      onOpenLightbox={() =>
                        onOpenGallery(project.title, project.screens, currentScreenIndex)
                      }
                      projectTitle={project.title}
                    />
                  </div>

                  {/* Project Info & Description Column */}
                  <div className="project-details-col">
                    <div className="project-meta-header">
                      <span className="project-category-tag">{project.category}</span>
                      <span className="project-badge-pill">{project.badge}</span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-short-tagline">{project.shortTagline}</p>

                    {/* Main Detailed Description */}
                    <div className="project-narrative-box">
                      {project.overview.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} className="narrative-paragraph">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Phases (CollabMind specific highlight) */}
                    {project.phases && (
                      <div className="project-phases-wrap">
                        <h4 className="phases-title">Three Core Project Phases:</h4>
                        <div className="phases-grid">
                          {project.phases.map((ph, phIdx) => (
                            <div key={phIdx} className="phase-card">
                              <span className="phase-number">0{phIdx + 1}</span>
                              <span className="phase-name">{ph.name}</span>
                              <p className="phase-desc">{ph.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Features Bullet Grid */}
                    <div className="project-features-list">
                      <h4 className="features-subheading">Key Platform Capabilities:</h4>
                      <div className="features-bullet-grid">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="feature-bullet-item">
                            <div className="feature-bullet-icon">
                              <Icon name="check" size={14} />
                            </div>
                            <div className="feature-bullet-content">
                              <strong className="feat-title">{feat.title}:</strong>{' '}
                              <span className="feat-desc">{feat.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="project-tech-stack">
                      <span className="stack-label">Architecture & Stack:</span>
                      <div className="stack-pills-row">
                        {project.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-tag-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project CTAs */}
                    <div className="project-actions-row">
                      <button
                        className="view-gallery-btn"
                        onClick={() =>
                          onOpenGallery(project.title, project.screens, currentScreenIndex)
                        }
                      >
                        <Icon name="maximize" size={16} />
                        <span>View All {project.screens.length} Screens in Lightbox</span>
                      </button>

                      <button
                        className="switch-screen-btn"
                        onClick={() =>
                          handleSelectScreen(
                            project.id,
                            (currentScreenIndex + 1) % project.screens.length
                          )
                        }
                      >
                        <span>Next Screenshot</span>
                        <Icon name="chevronRight" size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* React.js Web Applications Showcase */}
      {showWeb && (
        <div className="react-web-showcase-wrapper">
          <div className="portfolio-subgroup-header">
            <div className="subgroup-title-box">
              <span className="subgroup-tag">Front-End Web Development</span>
              <h3 className="subgroup-heading">React.js Web Platforms & Dashboards</h3>
            </div>
            <span className="subgroup-count">Web Apps & Ready for Next Project</span>
          </div>

          <div className="react-web-cards-grid">
            {reactWebProjects.map((item) => (
              <div
                key={item.id}
                className="react-web-card"
                style={{ '--accent-glow': item.accentColor }}
              >
                <div className="web-card-top">
                  <span className="web-card-cat">{item.category}</span>
                  <span className="web-card-badge">{item.badge}</span>
                </div>

                <h4 className="web-card-title">{item.title}</h4>
                <p className="web-card-desc">{item.description}</p>

                <div className="web-card-highlights">
                  <span className="highlights-label">Architecture Deliverables:</span>
                  <ul className="highlights-list">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <Icon name="check" size={12} className="bullet-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="web-card-stack">
                  {item.stack.map((s, sIdx) => (
                    <span key={sIdx} className="web-stack-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Placeholder Card: Ready to Add More React Projects */}
            <div className="react-web-card future-project-card">
              <div className="future-card-content">
                <div className="future-badge">
                  <span className="pulse-dot" />
                  <span>React.js Project Pipeline</span>
                </div>
                <h4 className="future-title">Add Your Next React Project</h4>
                <p className="future-desc">
                  I continuously build modern React.js web applications, client dashboards,
                  and SaaS tools. New projects can be added here easily with full screenshots,
                  live links, and architecture breakdowns.
                </p>
                <div className="future-stack-preview">
                  <span className="future-chip">React.js 19</span>
                  <span className="future-chip">Next.js</span>
                  <span className="future-chip">Tailwind CSS</span>
                  <span className="future-chip">Redux Toolkit</span>
                  <span className="future-chip">Full-Stack APIs</span>
                </div>
                <a href="#contact" className="future-cta-btn">
                  <span>Discuss a New React Project</span>
                  <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
