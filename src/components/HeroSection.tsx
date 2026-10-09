import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { ContactButton } from './common/ContactButton.tsx';
import { Magnet } from './common/Magnet.tsx';
import { MeticLogo } from './common/MeticLogo.tsx';

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Process', target: 'process' },
    { label: 'Work', target: 'work' },
    { label: 'Team', target: 'team' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (target === 'contact') {
      onNavigate('contact');
    } else {
      onNavigate(target);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Metic Media, I'm interested in your creative services. I'd like to discuss my project."
  );
  const whatsappUrl = `https://wa.me/923403516101?text=${whatsappMessage}`;

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none"
      style={{ boxSizing: 'border-box' }}
    >
      {/* 1. Clean Top Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full px-4 sm:px-6 md:px-10 pt-4 sm:pt-5 md:pt-6 z-40 shrink-0"
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto gap-4">
          {/* Metic Media Branded Image Logo */}
          <button
            onClick={(e) => handleNavClick(e, 'hero')}
            className="cursor-pointer text-left focus:outline-none shrink-0"
          >
            <MeticLogo showTagline={true} size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e, item.target)}
                type="button"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs xl:text-sm hover:text-white hover:opacity-80 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Header Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 contact-btn px-5 md:px-6 py-2.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider cursor-pointer whitespace-nowrap"
            >
              <span>Get Free Quote</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden bg-[#141414]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 mt-3 space-y-4 shadow-2xl overflow-hidden max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className="text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium uppercase text-[#D7E2EA] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="contact-btn w-full py-2.5 rounded-full text-white text-xs font-medium uppercase tracking-wider text-center cursor-pointer"
                >
                  Get a Free Quote
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-emerald-500/40 text-emerald-300 text-xs uppercase tracking-wider bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* 2. Hero Upper Text Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex flex-col justify-start items-center z-20 px-3 sm:px-6 pt-2 sm:pt-4 md:pt-5 lg:pt-6 text-center max-w-5xl mx-auto shrink-0"
      >
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-1.5 sm:mb-3">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
          <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-widest text-[#D7E2EA]">
            Social · Content · Video · Design
          </span>
        </div>

        {/* High-Impact Headline with fluid clamp sizing */}
        <h1
          className="hero-heading font-black uppercase tracking-tight text-center select-none max-w-4xl px-2"
          style={{
            fontSize: 'clamp(1.65rem, 5.2vw, 3.75rem)',
            lineHeight: 1.05,
          }}
        >
          We build the momentum behind your brand.
        </h1>
      </motion.div>

      {/* 3. Original 3D Character Avatar (Responsive on Mobile and Desktop) */}
      {/* On desktop/laptop (lg+): centered bottom avatar with Magnet */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-3 xl:bottom-5 z-10 w-[280px] xl:w-[350px] 2xl:w-[380px] pointer-events-auto justify-center items-end"
      >
        <Magnet
          padding={140}
          strength={3.5}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex items-end justify-center"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Metic Media Creative Avatar"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[42vh] xl:max-h-[45vh] object-contain drop-shadow-2xl select-none pointer-events-none"
            loading="eager"
          />
        </Magnet>
      </motion.div>

      {/* On mobile and tablet (< lg): positioned in natural vertical flow between headline and CTAs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="lg:hidden flex items-center justify-center my-auto py-1 sm:py-3 z-10 w-full px-4"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
          alt="Metic Media Creative Avatar"
          referrerPolicy="no-referrer"
          className="w-[170px] xs:w-[200px] sm:w-[240px] md:w-[270px] h-auto max-h-[28vh] sm:max-h-[34vh] object-contain drop-shadow-2xl select-none pointer-events-none"
          loading="eager"
        />
      </motion.div>

      {/* 4. Bottom Information & Action Bar */}
      <div className="w-full px-4 sm:px-6 md:px-10 pb-4 sm:pb-7 md:pb-8 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-3 sm:gap-5 z-20 shrink-0 max-w-7xl mx-auto">
        {/* Concise agency copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-center lg:text-left max-w-xs sm:max-w-sm lg:max-w-[280px] xl:max-w-[320px]"
          style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)' }}
        >
          a creative digital agency helping businesses build a stronger online presence through modern content
        </motion.p>

        {/* CTA Buttons (Get Free Quote + WhatsApp) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-medium uppercase tracking-wider px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs transition-all cursor-pointer shadow-lg shadow-emerald-950/40 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
          <ContactButton
            onClick={onOpenContact}
            label="Get a Free Quote"
            className="w-full sm:w-auto text-center justify-center !py-2.5 sm:!py-3.5"
          />
        </motion.div>
      </div>
    </section>
  );
};

