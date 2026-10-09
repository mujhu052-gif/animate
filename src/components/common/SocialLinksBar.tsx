import React from 'react';
import { Instagram, Facebook, Phone, Mail, MessageCircle } from 'lucide-react';

export const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.6a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.94-4.52v-6.39a8.16 8.16 0 0 0 4.83 1.58V7.27a4.85 4.85 0 0 1-1-.58z" />
  </svg>
);

interface SocialLinksBarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'minimal';
}

export const SocialLinksBar: React.FC<SocialLinksBarProps> = ({
  className = '',
  size = 'md',
  variant = 'outline',
}) => {
  const whatsappMsg = encodeURIComponent(
    "Hi Metic Media, I'm interested in your creative services. I'd like to discuss my project."
  );

  const socials = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/meticmedia',
      icon: Instagram,
      hoverClass: 'hover:text-pink-400 hover:border-pink-500/60 hover:bg-pink-500/10',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/meticmedia',
      icon: Facebook,
      hoverClass: 'hover:text-blue-400 hover:border-blue-500/60 hover:bg-blue-500/10',
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@meticmedia',
      icon: TikTokIcon,
      hoverClass: 'hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/10',
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/923403516101?text=${whatsappMsg}`,
      icon: MessageCircle,
      hoverClass: 'hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-emerald-500/10',
    },
    {
      name: 'Email',
      href: 'mailto:meticmediapk@gmail.com',
      icon: Mail,
      hoverClass: 'hover:text-purple-400 hover:border-purple-500/60 hover:bg-purple-500/10',
    },
    {
      name: 'Phone',
      href: 'tel:+923403516101',
      icon: Phone,
      hoverClass: 'hover:text-violet-400 hover:border-violet-500/60 hover:bg-violet-500/10',
    },
  ];

  const buttonSize =
    size === 'sm'
      ? 'w-8 h-8 text-xs'
      : size === 'lg'
      ? 'w-12 h-12 text-base'
      : 'w-10 h-10 text-sm';

  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.name}
            className={`${buttonSize} rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
              variant === 'outline'
                ? 'bg-white/[0.04] border border-white/10 text-[#D7E2EA]'
                : variant === 'filled'
                ? 'bg-white/10 text-white'
                : 'text-[#D7E2EA]/70 hover:text-white'
            } ${item.hoverClass} hover:scale-110 active:scale-95`}
          >
            <IconComponent className={iconSize} />
          </a>
        );
      })}
    </div>
  );
};
