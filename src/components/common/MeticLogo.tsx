import React from 'react';

interface MeticLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const MeticLogo: React.FC<MeticLogoProps> = ({
  className = '',
  showTagline = false,
  size = 'md',
}) => {
  const imageDimension = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Real Branded Image Logo */}
      <div className={`relative shrink-0 ${imageDimension} rounded-xl overflow-hidden border border-purple-500/30 shadow-[0_0_15px_rgba(182,0,168,0.35)] bg-black/60`}>
        <img
          src="/src/assets/images/metic_logo_brand_1791410987375.jpg"
          alt="Metic Media Official Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center">
          <span className={`font-black tracking-wider uppercase text-white font-['Kanit',sans-serif] ${titleSize}`}>
            METIC<span className="text-[#BBCCD7] font-medium ml-1">MEDIA</span>
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/60 font-light mt-1">
            Let&apos;s Grow Together
          </span>
        )}
      </div>
    </div>
  );
};
