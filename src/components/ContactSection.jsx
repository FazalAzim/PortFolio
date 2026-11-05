import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './Icons';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Mobile App (React Native)',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Mobile App (React Native)',
        message: '',
      });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 1200);
  };

  const projectTypes = [
    'Mobile App (React Native)',
    'Frontend / React.js Web',
    'Full-Time Role',
    'Consulting & Code Review',
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-header-block">
        <div className="section-pill">
          <Icon name="mail" size={16} />
          <span>Get in Touch</span>
        </div>
        <h2 className="section-main-heading">
          Let's Build Something <span className="gradient-text">Exceptional Together</span>
        </h2>
        <p className="section-lead-desc">
          Whether you are looking to launch an innovative mobile app, optimize an existing
          cross-platform codebase, or discuss senior engineering opportunities—let's connect!
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Cards */}
        <div className="contact-info-column">
          <h3 className="info-title">Contact Channels</h3>
          <p className="info-desc">
            Fastest response via WhatsApp and direct email. Feel free to reach out anytime.
          </p>

          <div className="contact-cards-stack">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card whatsapp"
            >
              <div className="card-icon-box">
                <Icon name="whatsapp" size={24} />
              </div>
              <div className="card-text-box">
                <span className="card-label">Direct WhatsApp</span>
                <span className="card-val">{personalInfo.phone}</span>
                <span className="card-hint">Instant messaging & voice</span>
              </div>
              <Icon name="arrowUpRight" size={18} className="card-arrow" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-card email"
            >
              <div className="card-icon-box">
                <Icon name="mail" size={24} />
              </div>
              <div className="card-text-box">
                <span className="card-label">Direct Email</span>
                <span className="card-val">{personalInfo.email}</span>
                <span className="card-hint">Typical response within 2-4 hours</span>
              </div>
              <Icon name="arrowUpRight" size={18} className="card-arrow" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card linkedin"
            >
              <div className="card-icon-box">
                <Icon name="linkedin" size={24} />
              </div>
              <div className="card-text-box">
                <span className="card-label">LinkedIn Profile</span>
                <span className="card-val">{personalInfo.linkedinHandle}</span>
                <span className="card-hint">Connect and view recommendations</span>
              </div>
              <Icon name="arrowUpRight" size={18} className="card-arrow" />
            </a>

            {/* Location */}
            <div className="contact-card location">
              <div className="card-icon-box">
                <Icon name="mapPin" size={24} />
              </div>
              <div className="card-text-box">
                <span className="card-label">Location</span>
                <span className="card-val">{personalInfo.location}</span>
                <span className="card-hint">Time Zone: PKT (UTC+5) • Remote friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="contact-form-column">
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-subtitle">
              Fill out this form and I will respond to your email promptly.
            </p>

            {formStatus === 'success' ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <Icon name="check" size={28} />
                </div>
                <h4 className="success-heading">Message Sent Successfully!</h4>
                <p className="success-text">
                  Thank you for reaching out. Fazal Azim has received your details and will get
                  back to you shortly.
                </p>
                <button
                  className="send-another-btn"
                  onClick={() => setFormStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="message-form">
                {/* Project type pills */}
                <div className="form-field-group">
                  <label className="field-label">How can I help you?</label>
                  <div className="project-type-pills">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={`type-pill-btn ${formData.projectType === type ? 'selected' : ''}`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, projectType: type }))
                        }
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div className="form-field-group">
                  <label className="field-label" htmlFor="user-name">
                    Your Name *
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe / Studio Founder"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>

                {/* Email */}
                <div className="form-field-group">
                  <label className="field-label" htmlFor="user-email">
                    Your Email Address *
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>

                {/* Message */}
                <div className="form-field-group">
                  <label className="field-label" htmlFor="user-msg">
                    Project Details or Message *
                  </label>
                  <textarea
                    id="user-msg"
                    required
                    rows={4}
                    placeholder="Tell me about your mobile app project, timeline, or engineering goals..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="form-submit-btn"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <span className="spinner-dot" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Inquiry</span>
                      <Icon name="send" size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
