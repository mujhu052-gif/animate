/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { MarqueeSection } from './components/MarqueeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FooterSection } from './components/FooterSection.tsx';
import { ContactModal } from './components/common/ContactModal.tsx';
import { ProjectModal, ProjectData } from './components/common/ProjectModal.tsx';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>(
    'Social Media Management'
  );
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleOpenService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    setIsContactOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedServiceForContact(packageName);
    setIsContactOpen(true);
  };

  return (
    <div
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] selection:bg-[#B600A8]/30 selection:text-white font-['Kanit',sans-serif]"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. Services Section (Clicking any service opens the quote & brief modal) */}
      <ServicesSection onSelectService={handleOpenService} />

      {/* 5. Process Section */}
      <ProcessSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 6. Projects / Work Section */}
      <ProjectsSection
        onOpenProject={(project) => setSelectedProject(project)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 7. Team Section */}
      <TeamSection />

      {/* 8. Pricing Section */}
      <PricingSection onSelectPackage={handleSelectPackage} />

      {/* 9. In-Page Contact Section */}
      <ContactSection initialService={selectedServiceForContact} />

      {/* 10. Footer Section */}
      <FooterSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Global Quick Quote & Brief Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={selectedServiceForContact}
      />

      {/* Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
