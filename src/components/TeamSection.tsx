import React from 'react';
import { FadeIn } from './common/FadeIn.tsx';

export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      role: 'Founder & CEO',
      focus: 'Creative Direction & Strategy',
      image: '/src/assets/images/team_creative_dir_1791411013732.jpg',
      ringGradient: 'from-purple-500 via-pink-500 to-cyan-400',
    },
    {
      role: 'Co-Founder',
      focus: 'Social Media & Growth Lead',
      image: '/src/assets/images/team_social_mgr_1791411045665.jpg',
      ringGradient: 'from-emerald-400 via-teal-500 to-purple-500',
    },
    {
      role: 'Head of Video Production',
      focus: 'Short-Form Reels & Motion',
      image: '/src/assets/images/team_video_editor_1791411022954.jpg',
      ringGradient: 'from-blue-500 via-purple-500 to-pink-500',
    },
    {
      role: 'Lead Visual Designer',
      focus: 'Graphic Design & Ad Creatives',
      image: '/src/assets/images/team_graphic_design_1791411033788.jpg',
      ringGradient: 'from-pink-500 via-purple-500 to-amber-400',
    },
  ];

  return (
    <section
      id="team"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-8 md:px-10 py-12 sm:py-20 md:py-24 relative border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn delay={0} y={20}>
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-purple-400 font-semibold mb-1.5 sm:mb-2 inline-block">
              Leadership &amp; Creative Team
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-2 sm:mb-3"
              style={{ fontSize: 'clamp(2rem, 6vw, 75px)' }}
            >
              Our Team
            </h2>
            <p className="text-[#D7E2EA]/70 max-w-lg mx-auto text-xs sm:text-sm font-light px-2">
              The creative minds directing your brand&apos;s digital momentum.
            </p>
          </div>
        </FadeIn>

        {/* 4 Compact Cards with Circular Avatars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.role} delay={index * 0.08} y={15}>
              <div className="flex flex-col items-center text-center p-3.5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
                {/* Subtle top glow */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-purple-600/20 blur-2xl opacity-30 group-hover:opacity-75 transition-opacity pointer-events-none" />

                {/* Circular Image Container with Gradient Glow Ring */}
                <div className="relative mb-2.5 sm:mb-4">
                  <div
                    className={`w-18 h-18 xs:w-20 xs:h-20 sm:w-28 sm:h-28 rounded-full p-0.5 sm:p-1 bg-gradient-to-tr ${member.ringGradient} shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-black/80">
                      <img
                        src={member.image}
                        alt={`${member.role} - ${member.focus}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  {/* Active dot */}
                  <div className="absolute bottom-0.5 right-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/90 border border-white/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* Role / Designation */}
                <h3 className="text-xs sm:text-base font-bold uppercase text-white tracking-wide mb-0.5 sm:mb-1 leading-snug">
                  {member.role}
                </h3>

                {/* Focus / Domain */}
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-purple-400 font-medium leading-tight">
                  {member.focus}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
