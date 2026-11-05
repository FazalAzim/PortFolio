import { useState } from 'react';
import { Icon } from './Icons';
import { personalInfo, careerTimeline } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary' | 'pdf'

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="resume-header-info">
            <span className="resume-pill">Updated Curriculum Vitae</span>
            <h2 className="resume-name">{personalInfo.name}</h2>
            <p className="resume-sub">
              Software Engineer • React.js Web & React Native Developer
            </p>
          </div>

          <div className="resume-header-actions">
            {/* Tab switch */}
            <div className="resume-tab-switch">
              <button
                className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
                onClick={() => setActiveTab('summary')}
              >
                Structured CV
              </button>
              <button
                className={`tab-btn ${activeTab === 'pdf' ? 'active' : ''}`}
                onClick={() => setActiveTab('pdf')}
              >
                PDF View
              </button>
            </div>

            {/* Download PDF button */}
            <a
              href="/fazal-azim-resume.pdf"
              download="Fazal-Azim-Software-Engineer-CV.pdf"
              className="resume-download-btn"
            >
              <Icon name="download" size={16} />
              <span>Download CV</span>
            </a>

            {/* Close button */}
            <button className="resume-close-btn" onClick={onClose} aria-label="Close modal">
              <Icon name="x" size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="resume-modal-body">
          {activeTab === 'summary' ? (
            <div className="resume-document-paper">
              {/* Top Contact Bar */}
              <div className="cv-paper-header">
                <div className="cv-paper-identity">
                  <h1 className="cv-candidate-name">{personalInfo.name}</h1>
                  <h3 className="cv-candidate-title">Software Engineer (React.js & React Native)</h3>
                </div>
                <div className="cv-paper-contact">
                  <span>
                    <Icon name="mapPin" size={13} /> {personalInfo.location}
                  </span>
                  <span>
                    <Icon name="phone" size={13} /> {personalInfo.phone}
                  </span>
                  <a href={`mailto:${personalInfo.email}`} className="cv-link">
                    <Icon name="mail" size={13} /> {personalInfo.email}
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="cv-link"
                  >
                    <Icon name="linkedin" size={13} /> {personalInfo.linkedinHandle}
                  </a>
                </div>
              </div>

              {/* WHO AM I */}
              <div className="cv-section-block">
                <h4 className="cv-section-title">WHO AM I</h4>
                <p className="cv-body-text">{personalInfo.bio}</p>
                <p className="cv-body-text" style={{ marginTop: '8px' }}>
                  Proven ability to work effectively in office-based and team-oriented environments,
                  contributing to both technical development and operational efficiency. Adept at
                  understanding business requirements, translating them into functional solutions,
                  and delivering high-quality software products.
                </p>
                <p className="cv-body-text" style={{ marginTop: '8px' }}>
                  Strong communication, problem-solving, and analytical skills with a focus on
                  writing clean, maintainable, and performance-optimized code. Passionate about
                  learning new technologies and continuously improving development workflows.
                </p>
              </div>

              {/* MY STACK */}
              <div className="cv-section-block">
                <h4 className="cv-section-title">MY STACK</h4>
                <div className="cv-stack-list">
                  <p className="cv-stack-line">
                    <strong>Frontend Development:</strong> React.js, React Native, Next.js, JavaScript (ES6+), TypeScript, Responsive UI Development
                  </p>
                  <p className="cv-stack-line">
                    <strong>State Management:</strong> Redux Toolkit, Context API, Efficient State Handling
                  </p>
                  <p className="cv-stack-line">
                    <strong>Mobile Development:</strong> Cross-platform App Development using React Native, Performance Optimization
                  </p>
                  <p className="cv-stack-line">
                    <strong>Firebase & Native Integrations:</strong> Firebase, Firebase Notifications, CallKeep
                  </p>
                  <p className="cv-stack-line">
                    <strong>API Integration:</strong> REST APIs, JSON Data Handling, Axios, API Optimization
                  </p>
                  <p className="cv-stack-line">
                    <strong>Tools & Workflow:</strong> Git, GitHub, Agile Methodology, Sprint Planning, Code Reviews
                  </p>
                  <p className="cv-stack-line">
                    <strong>UI/UX Practices:</strong> User-Centered Design, Performance Optimization, Clean UI Implementation
                  </p>
                  <p className="cv-stack-line">
                    <strong>Other Skills:</strong> Debugging, Code Optimization, Testing, Documentation
                  </p>
                </div>
              </div>

              {/* MY JOURNEY */}
              <div className="cv-section-block">
                <h4 className="cv-section-title">MY JOURNEY</h4>
                <div className="cv-journey-list">
                  {careerTimeline.map((job, idx) => (
                    <div key={idx} className="cv-job-item">
                      <div className="cv-job-header">
                        <span className="cv-job-role">{job.role}</span>
                        <span className="cv-job-period">{job.period}</span>
                      </div>
                      <div className="cv-job-company">
                        {job.company}, {job.location}
                      </div>
                      <ul className="cv-job-bullets">
                        {job.highlights.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* EDUCATION */}
              <div className="cv-section-block">
                <h4 className="cv-section-title">EDUCATION</h4>
                <div className="cv-edu-header">
                  <span className="cv-edu-deg">BS Software Engineering</span>
                  <span className="cv-edu-meta">2017 – 2021 | University of Swat | CGPA: 3.32</span>
                </div>
              </div>

              {/* TECHNICAL SKILLS */}
              <div className="cv-section-block">
                <h4 className="cv-section-title">TECHNICAL SKILLS</h4>
                <p className="cv-body-text">
                  JavaScript (ES6+), React.js, React Native, Next.js, TypeScript, Redux Toolkit, Firebase, Firebase Notifications, CallKeep
                </p>
              </div>

              {/* ADDITIONAL SKILLS */}
              <div className="cv-section-block">
                <h4 className="cv-section-title">ADDITIONAL SKILLS</h4>
                <p className="cv-body-text">
                  Project Management, Business Development Understanding, Critical Thinking and Problem Solving, Verbal and Written Communication, Public Speaking, Microsoft Excel (Advanced), Microsoft Office (Word, Excel, PowerPoint), Office Administration and Documentation
                </p>
              </div>
            </div>
          ) : (
            <div className="resume-pdf-view">
              <object
                data="/fazal-azim-resume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="resume-pdf-frame"
              >
                <div className="pdf-fallback">
                  <p>Your browser does not support inline PDF viewing.</p>
                  <a
                    href="/fazal-azim-resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="fallback-btn"
                  >
                    Open PDF in New Window
                  </a>
                </div>
              </object>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
