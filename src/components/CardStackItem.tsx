import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './common/LiveProjectButton.tsx';
import { ProjectData } from './common/ProjectModal.tsx';

interface CardStackItemProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenProject: (project: ProjectData) => void;
}

export const CardStackItem: React.FC<CardStackItemProps> = ({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const renderMedia = (src: string, alt: string, className: string) => {
    const isVideo = src.toLowerCase().includes('.mp4') || src.toLowerCase().includes('.webm');
    if (isVideo) {
      return (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`${className} pointer-events-none select-none`}
        />
      );
    }
    return (
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        className={className}
      />
    );
  };

  return (
    <div
      ref={containerRef}
      className="h-[70vh] sm:h-[75vh] md:h-[85vh] flex items-start justify-center sticky top-16 sm:top-24 md:top-32"
      style={{
        top: `calc(${index * 24}px + 4rem)`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-[28px] sm:rounded-[40px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3.5 sm:p-6 md:p-8 shadow-2xl relative"
      >
        {/* Top Row: Number, category label, project name, and Live Project ghost button */}
        <div className="flex flex-row items-center justify-between gap-3 mb-3.5 sm:mb-6 md:mb-8 border-b border-[#D7E2EA]/15 pb-3 sm:pb-6">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight shrink-0"
              style={{ fontSize: 'clamp(1.75rem, 5.5vw, 80px)' }}
            >
              {project.number}
            </span>

            {/* Category + Name */}
            <div className="flex flex-col min-w-0">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-xs font-light truncate">
                {project.category}
              </span>
              <h3 className="text-white font-medium uppercase tracking-wide text-sm sm:text-2xl md:text-3xl truncate">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Ghost button */}
          <div className="shrink-0">
            <LiveProjectButton onClick={() => onOpenProject(project)} />
          </div>
        </div>

        {/* Bottom Row: Two-column media grid (supports both images and mp4 videos) */}
        {/* On mobile: nice clean 2-column compact grid, on desktop: 5-col / 7-col layout */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 sm:gap-4 md:gap-6">
          {/* Mobile column 1 / Desktop Left Column (40% width / 5 cols) - 2 stacked media */}
          <div className="md:col-span-5 flex flex-col gap-2 sm:gap-4 md:gap-6">
            {/* Left Top Media */}
            <div
              className="w-full overflow-hidden rounded-[18px] sm:rounded-[30px] md:rounded-[50px] bg-white/5 border border-white/5 cursor-pointer group h-[85px] xs:h-[110px] sm:h-[150px] md:h-auto"
              style={{ minHeight: '80px' }}
              onClick={() => onOpenProject(project)}
            >
              {renderMedia(
                project.col1Img1,
                `${project.name} detail view 1`,
                'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              )}
            </div>

            {/* Left Bottom Media */}
            <div
              className="w-full overflow-hidden rounded-[18px] sm:rounded-[30px] md:rounded-[50px] bg-white/5 border border-white/5 cursor-pointer group h-[95px] xs:h-[120px] sm:h-[180px] md:h-auto"
              style={{ minHeight: '90px' }}
              onClick={() => onOpenProject(project)}
            >
              {renderMedia(
                project.col1Img2,
                `${project.name} detail view 2`,
                'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              )}
            </div>
          </div>

          {/* Mobile column 2 / Desktop Right Column (60% width / 7 cols) - 1 tall media */}
          <div
            className="md:col-span-7 overflow-hidden rounded-[18px] sm:rounded-[30px] md:rounded-[60px] bg-white/5 border border-white/5 cursor-pointer group h-[188px] xs:h-[238px] sm:h-[340px] md:h-auto md:min-h-0"
            onClick={() => onOpenProject(project)}
          >
            {renderMedia(
              project.col2Img,
              `${project.name} hero preview`,
              'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
