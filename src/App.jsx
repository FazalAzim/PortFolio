import { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageLightbox } from './components/ImageLightbox';
import { ResumeModal } from './components/ResumeModal';
import './App.css';

function App() {
  // Lightbox Modal state
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    projectTitle: '',
    images: [],
    currentIndex: 0,
  });

  // Resume Modal state
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenGallery = (projectTitle, images, initialIndex = 0) => {
    setLightboxState({
      isOpen: true,
      projectTitle,
      images,
      currentIndex: initialIndex,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleIndexChange = (newIndex) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  return (
    <div className="portfolio-app-root">
      {/* Dynamic Cosmic Background */}
      <ParticleBackground />

      {/* Main Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="main-content-flow">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Featured Mobile Projects Section */}
        <ProjectsSection onOpenGallery={handleOpenGallery} />

        {/* Technical Skills Radar & Metrics */}
        <SkillsSection />

        {/* Experience & Career Timeline */}
        <ExperienceSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Fullscreen Screenshot Lightbox */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onIndexChange={handleIndexChange}
        projectTitle={lightboxState.projectTitle}
      />

      {/* Interactive CV Reader Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
