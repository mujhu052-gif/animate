import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { FadeIn } from './common/FadeIn.tsx';
import { CardStackItem } from './CardStackItem.tsx';
import { ProjectData } from './common/ProjectModal.tsx';
import { Sparkles } from 'lucide-react';

const METIC_PORTFOLIO: ProjectData[] = [
  {
    number: '01',
    name: 'Instagram Reels Series',
    category: 'Short-Form Video & Hooks',
    description:
      'High-retention short-form video content designed to maximize engagement, watch time, and organic reach. Includes viral hook scripting, kinetic typography captions, custom sound design, and sound-sync cuts.',
    clientScope: 'Hook Scripting · Motion Graphics · Sound Design · Formatted for IG Reels & TikTok',
    year: '2026',
    tools: ['Premiere Pro', 'After Effects', 'CapCut Pro', 'AI Audio Enhancement'],
    col1Img1: '/src/assets/images/work_reels_mockup_1791411065773.jpg',
    col1Img2: '/src/assets/images/hero_agency_display_1791411002591.jpg',
    col2Img: '/src/assets/images/work_reels_mockup_1791411065773.jpg',
  },
  {
    number: '02',
    name: 'Brand Ad Campaign',
    category: 'Digital Advertising Creatives',
    description:
      'High-converting social advertising campaign combining striking graphic design, persuasive copy, and multi-format variants tested across Meta, TikTok, and Google display networks.',
    clientScope: 'Ad Creative Sets · Multi-Variant Testing · Conversion Copywriting · High-CTR Layouts',
    year: '2026',
    tools: ['Photoshop', 'Illustrator', 'Midjourney AI', 'Figma', 'Meta Ads Manager'],
    col1Img1: '/src/assets/images/work_ads_mockup_1791411079463.jpg',
    col1Img2: '/src/assets/images/work_graphics_mockup_1791411099644.jpg',
    col2Img: '/src/assets/images/work_ads_mockup_1791411079463.jpg',
  },
  {
    number: '03',
    name: 'Event Coverage Edit',
    category: 'Cinematic Recap & Post-Production',
    description:
      'Professional event video editing with cinematic multi-cam sequencing, seamless beat transitions, custom LUT color grading, motion lower-thirds, and bite-sized social highlight reels.',
    clientScope: 'Cinematic Recap Reel · Social Cutdowns · Speaker Vignettes · Rapid 48h Turnaround',
    year: '2026',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Studio Audio Mastering'],
    col1Img1: '/src/assets/images/work_event_mockup_1791411089593.jpg',
    col1Img2: '/src/assets/images/work_reels_mockup_1791411065773.jpg',
    col2Img: '/src/assets/images/work_event_mockup_1791411089593.jpg',
  },
  {
    number: '04',
    name: 'Product Launch Graphics',
    category: 'Visual Identity & Promotional Assets',
    description:
      'Complete launch creative kit featuring immersive product promotional graphics, educational carousel suites, countdown story assets, and high-impact digital billboards.',
    clientScope: 'Launch Visual System · Carousel Sets · Teaser Stories · Packaging Digital Mockups',
    year: '2026',
    tools: ['Adobe Illustrator', 'Photoshop', '3D Product Rendering', 'Figma'],
    col1Img1: '/src/assets/images/work_graphics_mockup_1791411099644.jpg',
    col1Img2: '/src/assets/images/work_ads_mockup_1791411079463.jpg',
    col2Img: '/src/assets/images/work_graphics_mockup_1791411099644.jpg',
  },
];

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectData) => void;
  onOpenContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProject,
  onOpenContact,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = METIC_PORTFOLIO.length;

  return (
    <section
      id="work"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pt-20 sm:pt-28 md:pt-36 pb-32 sm:pb-40 px-4 sm:px-6 md:px-10"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
        <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3 inline-block">
          Featured Agency Portfolio
        </span>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
        >
          Selected Work
        </h2>
        <p className="text-[#D7E2EA]/70 max-w-xl mx-auto text-sm sm:text-base font-light mt-4">
          Real creative projects engineered for high retention, community engagement, and brand prestige.
        </p>
      </FadeIn>

      {/* Sticky stacking container */}
      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {METIC_PORTFOLIO.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const range: [number, number] = [index * 0.2, 1];

          return (
            <CardStackItem
              key={project.number}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
              onOpenProject={onOpenProject}
            />
          );
        })}
      </div>

      {/* Professional Call To Action: "Want your project here? Let's create something together." */}
      <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-white/10 text-center">
        <FadeIn delay={0.2} y={20}>
          <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-b from-purple-900/20 via-white/[0.03] to-transparent border border-white/10 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs uppercase tracking-widest font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Partner With Metic Media</span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-4">
              Want your project here?
            </h3>
            <p className="text-base sm:text-lg text-[#D7E2EA]/80 font-light max-w-lg mx-auto mb-8">
              Let&apos;s create something together that elevates your brand and grabs your audience&apos;s attention.
            </p>
            <button
              onClick={onOpenContact}
              type="button"
              className="contact-btn px-10 py-4 rounded-full text-white text-sm font-semibold uppercase tracking-widest shadow-xl shadow-purple-900/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
