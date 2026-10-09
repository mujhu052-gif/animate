import React, { useState } from 'react';
import { FadeIn } from './common/FadeIn.tsx';
import {
  ArrowUpRight,
  Share2,
  PenTool,
  Video,
  Palette,
  Sparkles,
  TrendingUp,
  Check,
} from 'lucide-react';

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
  items: string[];
  icon: React.ElementType;
}

export const METIC_SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Social Media Management',
    description:
      'We manage your social media presence from strategy to publishing and audience engagement.',
    icon: Share2,
    items: [
      'Instagram Management',
      'Facebook Management',
      'TikTok Management',
      'LinkedIn Management',
      'Content Scheduling',
      'Audience Engagement',
      'Growth Strategy',
    ],
  },
  {
    number: '02',
    name: 'Content Creation',
    description:
      'We create engaging and original content designed around your brand, audience, and marketing goals.',
    icon: PenTool,
    items: [
      'Content Strategy',
      'Copywriting',
      'AI-Assisted Content',
      'Original Content',
      'Creative Concepts',
      'Social Media Content',
    ],
  },
  {
    number: '03',
    name: 'Video Editing',
    description:
      'Professional short-form and promotional video editing designed for modern social media platforms.',
    icon: Video,
    items: [
      'Instagram Reels',
      'YouTube Shorts',
      'TikTok Videos',
      'Social Media Ads',
      'Motion Graphics',
      'Captions',
      'Transitions',
    ],
  },
  {
    number: '04',
    name: 'Graphic Design',
    description:
      'Creative visual designs that make your brand look professional, consistent, and memorable.',
    icon: Palette,
    items: [
      'Social Media Posts',
      'Advertising Creatives',
      'Brand Graphics',
      'Thumbnails',
      'Promotional Designs',
      'Campaign Visuals',
    ],
  },
  {
    number: '05',
    name: 'AI-Assisted Content',
    description:
      'We use modern AI-assisted workflows together with human creativity to produce content faster while maintaining quality and brand identity.',
    icon: Sparkles,
    items: [
      'AI Creative Concepts',
      'AI Visual Content',
      'AI-Assisted Copywriting',
      'AI Video Concepts',
      'Content Ideation',
      'Creative Automation',
    ],
  },
  {
    number: '06',
    name: 'Digital Marketing',
    description:
      'Digital marketing solutions focused on increasing your online reach, engagement, visibility, and conversions.',
    icon: TrendingUp,
    items: [
      'Campaign Strategy',
      'Social Media Advertising',
      'Creative Ads',
      'Audience Targeting',
      'Campaign Content',
      'Performance Optimization',
    ],
  },
];

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[36px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-12 sm:py-20 md:py-32 relative z-0"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-8 sm:mb-16 md:mb-24">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-black/50 font-semibold mb-2 sm:mb-3 inline-block">
              Core Creative Solutions
            </span>
            <h2
              className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.1rem, 7vw, 100px)' }}
            >
              Services
            </h2>
            <p className="mt-3 sm:mt-4 text-black/60 max-w-xl mx-auto text-xs sm:text-base font-light px-2">
              End-to-end creative digital agency capabilities engineered to build momentum and grow modern brands. Click any service to request a quote.
            </p>
          </div>
        </FadeIn>

        {/* 6 Detailed Service Items */}
        <div className="border-t border-[rgba(12,12,12,0.15)]">
          {METIC_SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.number} delay={index * 0.08} y={20}>
                <div
                  onMouseEnter={() => setActiveService(service.number)}
                  onMouseLeave={() => setActiveService(null)}
                  onClick={() => onSelectService?.(service.name)}
                  className="group flex flex-col lg:flex-row lg:items-start justify-between gap-3 sm:gap-6 lg:gap-12 py-5 sm:py-8 md:py-12 border-b border-[rgba(12,12,12,0.15)] cursor-pointer transition-all duration-200 hover:bg-black/[0.02] px-2 sm:px-5 rounded-2xl"
                  title={`Request a quote for ${service.name}`}
                >
                  {/* Left Number & Icon */}
                  <div className="shrink-0 flex items-center justify-between lg:flex-col lg:items-start lg:justify-start gap-3 sm:gap-4">
                    <span
                      className="font-black text-[#0C0C0C] leading-none select-none tracking-tight transition-transform duration-300 group-hover:translate-x-1 inline-block"
                      style={{ fontSize: 'clamp(1.9rem, 5vw, 90px)' }}
                    >
                      {service.number}
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black/70 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Middle: Name + Description */}
                  <div className="flex-1 flex flex-col gap-1.5 sm:gap-3 max-w-2xl">
                    <div className="flex items-center justify-between">
                      <h3
                        className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                        style={{ fontSize: 'clamp(1.05rem, 2.2vw, 2.2rem)' }}
                      >
                        {service.name}
                      </h3>
                    </div>
                    <p
                      className="font-light leading-relaxed text-[#0C0C0C]/80"
                      style={{
                        fontSize: 'clamp(0.82rem, 1.3vw, 1.15rem)',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Includes list chips */}
                    <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs bg-black/[0.04] text-black/75 border border-black/[0.08] group-hover:border-purple-600/30 transition-colors font-medium"
                        >
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right CTA arrow */}
                  <div className="shrink-0 flex items-center gap-1.5 self-end lg:self-start pt-1 sm:pt-2 text-[11px] sm:text-xs uppercase tracking-widest text-black/50 group-hover:text-purple-700 font-semibold transition-colors">
                    <span className="inline text-purple-600 sm:text-inherit font-medium sm:font-semibold">Get a Quote</span>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
