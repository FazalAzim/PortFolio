import { useEffect } from 'react';
import { Icon } from './Icons';

export const ImageLightbox = ({ isOpen, onClose, images, currentIndex, onIndexChange, projectTitle }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) {
        onIndexChange((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images, onClose, onIndexChange]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentItem = images[currentIndex] || images[0];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Header bar */}
        <div className="lightbox-header">
          <div className="lightbox-title-box">
            <span className="lightbox-badge">{projectTitle}</span>
            <h3 className="lightbox-screen-title">{currentItem.title}</h3>
            {currentItem.subtitle && (
              <p className="lightbox-screen-sub">{currentItem.subtitle}</p>
            )}
          </div>
          <div className="lightbox-actions">
            <span className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close image viewer"
            >
              <Icon name="x" size={22} />
            </button>
          </div>
        </div>

        {/* Main image stage */}
        <div className="lightbox-stage">
          {images.length > 1 && (
            <button
              className="lightbox-nav-btn prev"
              onClick={() => onIndexChange((currentIndex - 1 + images.length) % images.length)}
              aria-label="Previous screenshot"
            >
              <Icon name="chevronLeft" size={26} />
            </button>
          )}

          <div className="lightbox-image-wrapper">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="lightbox-img"
              loading="lazy"
            />
          </div>

          {images.length > 1 && (
            <button
              className="lightbox-nav-btn next"
              onClick={() => onIndexChange((currentIndex + 1) % images.length)}
              aria-label="Next screenshot"
            >
              <Icon name="chevronRight" size={26} />
            </button>
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="lightbox-thumbnails">
            {images.map((item, idx) => (
              <button
                key={idx}
                className={`lightbox-thumb ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => onIndexChange(idx)}
              >
                <img src={item.image} alt={item.title} />
                <span className="thumb-caption">{item.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
