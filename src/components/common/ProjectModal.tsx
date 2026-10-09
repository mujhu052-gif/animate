import React, { useState } from 'react';
import { X, Sparkles, Box, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  tools?: string[];
  clientScope?: string;
  year?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return null;

  const currentDisplayImage = selectedImage || project.col2Img;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#141414] border border-[#D7E2EA]/20 rounded-3xl sm:rounded-[36px] p-5 sm:p-8 md:p-10 shadow-2xl z-10 my-6 text-[#D7E2EA] max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#D7E2EA]/60 mb-2">
                  <span className="font-mono text-purple-400 font-bold">{project.number}</span>
                  <span>·</span>
                  <span className="text-white font-medium">{project.category}</span>
                  <span>·</span>
                  <span>{project.year || '2026'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                  {project.name}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="contact-btn px-6 py-2.5 rounded-full text-white text-xs font-semibold uppercase tracking-widest cursor-pointer"
                >
                  Commission Similar Project
                </button>
              </div>
            </div>

            {/* Main Featured Media */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#0C0C0C] aspect-[16/10] sm:aspect-[16/9] mb-4">
              {currentDisplayImage.toLowerCase().includes('.mp4') ||
              currentDisplayImage.toLowerCase().includes('.webm') ? (
                <video
                  src={currentDisplayImage}
                  autoPlay
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={currentDisplayImage}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                />
              )}
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs text-white/80 border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Metic Media Production</span>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[project.col1Img1, project.col1Img2, project.col2Img].map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
                    currentDisplayImage === img
                      ? 'border-purple-400 shadow-md shadow-purple-500/20'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Preview ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Project Specs and Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div className="md:col-span-2 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Project Scope &amp; Creative Strategy</h4>
                <p className="text-sm text-[#D7E2EA]/85 leading-relaxed font-light">
                  {project.description}
                </p>
                <p className="text-xs text-[#D7E2EA]/60 leading-relaxed font-light">
                  Engineered with platform-native retention hooks, typography hierarchy, high-contrast visual grading, and optimized aspect ratios for modern organic and paid channels.
                </p>
              </div>

              <div className="space-y-4 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#D7E2EA]/60 uppercase tracking-wider mb-1">
                    <Box className="w-3.5 h-3.5 text-purple-400" />
                    <span>Deliverables</span>
                  </div>
                  <div className="text-xs text-white font-medium">
                    {project.clientScope || 'High-Engagement Reel Assets · Campaign Creatives · Multi-Ratio Exports'}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#D7E2EA]/60 uppercase tracking-wider mb-1">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>Creative Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(project.tools || ['Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator', 'Figma']).map((tool) => (
                      <span key={tool} className="text-[11px] text-[#D7E2EA]/80 bg-white/5 px-2 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
