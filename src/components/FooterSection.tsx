import React from 'react';
import { ArrowUp, Phone, Mail, MessageCircle } from 'lucide-react';
import { MeticLogo } from './common/MeticLogo.tsx';
import { SocialLinksBar } from './common/SocialLinksBar.tsx';

interface FooterSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Process', target: 'process' },
    { label: 'Work', target: 'work' },
    { label: 'Team', target: 'team' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'Contact', target: 'contact' },
  ];

  const serviceLinks = [
    'Social Media Management',
    'Content Creation',
    'Video Editing',
    'Graphic Design',
    'Digital Marketing',
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi Metic Media, I'm interested in your creative services. I'd like to discuss my project."
  );
  const whatsappUrl = `https://wa.me/923403516101?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-12 px-5 sm:px-8 md:px-10 text-[#D7E2EA] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <MeticLogo showTagline={true} size="md" />
            <p className="text-xs text-[#D7E2EA]/70 leading-relaxed font-light mt-3">
              Metic Media is a creative digital agency dedicated to delivering meticulous strategy, viral short-form video editing, brand design, and AI-accelerated growth.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <span className="font-bold uppercase tracking-wider text-white text-xs block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.target)}
                    className="text-xs text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div>
            <span className="font-bold uppercase tracking-wider text-white text-xs block mb-4">
              Services
            </span>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact Channels */}
          <div>
            <span className="font-bold uppercase tracking-wider text-white text-xs block mb-4">
              Contact
            </span>
            <ul className="space-y-3 text-xs text-[#D7E2EA]/80 font-light">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="tel:+923403516101" className="hover:text-white transition-colors">
                  +92 340 3516101
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:meticmediapk@gmail.com" className="hover:text-white transition-colors break-all">
                  meticmediapk@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-300"
                >
                  WhatsApp: +92 340 3516101
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Pure Social Icons (Instagram, Facebook, TikTok, WhatsApp, etc.) & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#D7E2EA]/60">
          <div className="flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-white/80">
              Follow Us:
            </span>
            <SocialLinksBar size="sm" variant="outline" className="flex-wrap" />
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 Metic Media. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
