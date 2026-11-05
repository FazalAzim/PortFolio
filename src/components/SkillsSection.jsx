import { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Icon } from './Icons';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontendWeb');

  const categories = [
    { key: 'frontendWeb', label: 'React.js Web', icon: 'code' },
    { key: 'mobile', label: 'React Native Mobile', icon: 'mobile' },
    { key: 'firebaseAndNative', label: 'Firebase & Native', icon: 'shield' },
    { key: 'stateAndApi', label: 'State & APIs', icon: 'database' },
    { key: 'workflow', label: 'Workflow & Tools', icon: 'terminal' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header-block">
        <div className="section-pill">
          <Icon name="code" size={16} />
          <span>Core Competencies</span>
        </div>
        <h2 className="section-main-heading">
          Technical Skills & <span className="gradient-text">Engineering Mastery</span>
        </h2>
        <p className="section-lead-desc">
          Four years of professional development building production software across{' '}
          <strong>React.js</strong> and <strong>React Native</strong>, specializing in responsive
          state architecture, Firebase cloud integrations, CallKeep VoIP, and REST APIs.
        </p>

        {/* Category Tabs */}
        <div className="skills-nav-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`skills-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <Icon name={cat.icon} size={18} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Showcase Grid */}
      <div className="skills-grid-container">
        {Object.entries(skillsData).map(([key, group]) => {
          const isSelected = activeCategory === key;

          return (
            <div
              key={key}
              className={`skill-group-card ${isSelected ? 'highlighted' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <div className="skill-card-header">
                <div className="skill-icon-badge">
                  <Icon name={group.icon} size={22} />
                </div>
                <div>
                  <h3 className="skill-group-title">{group.title}</h3>
                  <span className="skill-count">{group.skills.length} Specialized Capabilities</span>
                </div>
              </div>

              <div className="skill-bars-list">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="skill-bar-item">
                    <div className="skill-meta-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Highlights Banner */}
      <div className="architecture-banner">
        <div className="arch-item">
          <div className="arch-number">Dual Core</div>
          <div className="arch-label">React.js & React Native</div>
          <p className="arch-sub">Unified component architecture across web, iOS, and Android</p>
        </div>
        <div className="arch-divider" />
        <div className="arch-item">
          <div className="arch-number">Firebase & VoIP</div>
          <div className="arch-label">Native Push & CallKeep</div>
          <p className="arch-sub">FCM notifications and system-level calling background integration</p>
        </div>
        <div className="arch-divider" />
        <div className="arch-item">
          <div className="arch-number">60 FPS Native</div>
          <div className="arch-label">Performance Optimized</div>
          <p className="arch-sub">FlatList virtualization, memoized renders, and fluid gestures</p>
        </div>
      </div>
    </section>
  );
};
