import { useState, useRef } from 'react';
import { Icon } from './Icons';

export const PhoneMockup = ({ screens, activeIndex, onSelectScreen, onOpenLightbox, projectTitle }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const currentScreen = screens[activeIndex] || screens[0];

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // max 9 deg
    const rotateY = ((x - centerX) / centerX) * 9;  // max 9 deg
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    onSelectScreen((activeIndex - 1 + screens.length) % screens.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onSelectScreen((activeIndex + 1) % screens.length);
  };

  return (
    <div className="phone-mockup-wrapper">
      <div
        ref={cardRef}
        className={`phone-mockup-container ${isHovered ? 'hovered' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        }}
      >
        {/* Glow halo behind phone */}
        <div className="phone-ambient-glow" />

        {/* Physical Phone Frame */}
        <div className="phone-hardware">
          {/* Side volume / lock buttons */}
          <div className="phone-btn phone-btn-vol-up" />
          <div className="phone-btn phone-btn-vol-down" />
          <div className="phone-btn phone-btn-power" />

          {/* Screen Outer Bezel */}
          <div className="phone-screen-bezel">
            {/* Dynamic Island */}
            <div className="dynamic-island">
              <span className="camera-lens" />
              <span className="sensor-dot" />
            </div>

            {/* Status bar */}
            <div className="phone-status-bar">
              <span className="phone-time">9:41</span>
              <div className="phone-icons">
                <span className="signal-bars">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
                <span className="phone-wifi">WiFi</span>
                <span className="phone-battery">
                  <span className="battery-fill" />
                </span>
              </div>
            </div>

            {/* Glass Glare Sheen */}
            <div
              className="phone-glare"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
              }}
            />

            {/* Main Interactive Screen Content */}
            <div className="phone-display-content" onClick={onOpenLightbox}>
              <img
                key={currentScreen.image}
                src={currentScreen.image}
                alt={`${projectTitle} - ${currentScreen.title}`}
                className="phone-screen-img"
              />

              {/* Click to expand overlay hint */}
              <div className="screen-inspect-overlay">
                <span className="inspect-pill">
                  <Icon name="maximize" size={14} /> Tap to expand
                </span>
              </div>

              {/* On-screen arrows */}
              {screens.length > 1 && (
                <>
                  <button
                    className="screen-arrow-btn screen-arrow-prev"
                    onClick={handlePrev}
                    aria-label="Previous screen"
                  >
                    <Icon name="chevronLeft" size={18} />
                  </button>
                  <button
                    className="screen-arrow-btn screen-arrow-next"
                    onClick={handleNext}
                    aria-label="Next screen"
                  >
                    <Icon name="chevronRight" size={18} />
                  </button>
                </>
              )}
            </div>

            {/* Home indicator bar */}
            <div className="home-indicator" />
          </div>
        </div>
      </div>

      {/* Screen Caption & Navigation Dots */}
      <div className="mockup-meta">
        <div className="mockup-screen-info">
          <span className="screen-counter">
            Screen {activeIndex + 1} of {screens.length}
          </span>
          <h4 className="active-screen-title">{currentScreen.title}</h4>
          <p className="active-screen-subtitle">{currentScreen.subtitle}</p>
        </div>

        {/* Carousel Dots */}
        <div className="screen-dots">
          {screens.map((_, idx) => (
            <button
              key={idx}
              className={`screen-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => onSelectScreen(idx)}
              aria-label={`Go to screen ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Bar */}
      <div className="mockup-thumb-strip">
        {screens.map((scr, idx) => (
          <button
            key={idx}
            className={`mockup-thumb-pill ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => onSelectScreen(idx)}
          >
            <span className="thumb-idx">{idx + 1}</span>
            <span className="thumb-text">{scr.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
