import { careerTimeline } from '../data/portfolioData';
import { Icon } from './Icons';

export const ExperienceSection = ({ onOpenResume }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header-block">
        <div className="section-pill">
          <Icon name="briefcase" size={16} />
          <span>Proven Track Record</span>
        </div>
        <h2 className="section-main-heading">
          Career Journey & <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-lead-desc">
          Four years of professional software engineering spanning product-based and
          service-driven companies, turning client visions into resilient, high-speed mobile and
          web realities.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-vertical-spine" />

        <div className="timeline-items-list">
          {careerTimeline.map((item, index) => {
            const isEducation = item.role.includes('BS');

            return (
              <div
                key={index}
                className={`timeline-node-card ${item.current ? 'current-role' : ''}`}
              >
                {/* Node icon & marker */}
                <div className="timeline-marker">
                  <div className="marker-ring">
                    <Icon name={isEducation ? 'graduationCap' : 'briefcase'} size={18} />
                  </div>
                  {item.current && <span className="marker-live-dot" />}
                </div>

                {/* Timeline Card Body */}
                <div className="timeline-card-content">
                  <div className="timeline-card-header">
                    <div className="role-and-company">
                      <div className="role-badge-row">
                        <h3 className="timeline-role-title">{item.role}</h3>
                        {item.current && (
                          <span className="current-badge">Currently Active</span>
                        )}
                      </div>
                      <div className="company-and-location">
                        <span className="company-name">{item.company}</span>
                        <span className="company-dot">•</span>
                        <span className="company-loc">
                          <Icon name="mapPin" size={13} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="timeline-period-badge">
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="timeline-highlights">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="timeline-highlight-item">
                        <span className="highlight-bullet" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Special mentions for projects */}
                  {item.company === 'Teknovation' && (
                    <div className="timeline-projects-tag">
                      <span className="tag-intro">Key Deliverables:</span>
                      <span className="timeline-sub-tag">CollabMind Architecture</span>
                      <span className="timeline-sub-tag">Network Messenger</span>
                      <span className="timeline-sub-tag">Petsbroz Features</span>
                    </div>
                  )}

                  {item.company.includes('Jazzari') && (
                    <div className="timeline-projects-tag">
                      <span className="tag-intro">Key Deliverables:</span>
                      <span className="timeline-sub-tag">Tabula LMS</span>
                      <span className="timeline-sub-tag">Vendo RemoteReps</span>
                      <span className="timeline-sub-tag">Createy E-Commerce</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CV Callout Banner */}
      <div className="timeline-cv-callout">
        <div className="callout-content">
          <h4 className="callout-heading">Looking for Complete Work History & Credentials?</h4>
          <p className="callout-desc">
            Download the official PDF resume or inspect the interactive digital CV viewer.
          </p>
        </div>
        <div className="callout-actions">
          <button className="callout-view-btn" onClick={onOpenResume}>
            <Icon name="eye" size={16} />
            <span>Open CV Viewer</span>
          </button>
          <a
            href="/fazal-azim-resume.pdf"
            download="Fazal-Azim-Software-Engineer-CV.pdf"
            className="callout-download-btn"
          >
            <Icon name="download" size={16} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
};
