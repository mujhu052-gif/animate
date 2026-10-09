import React from 'react';
import { FadeIn } from './common/FadeIn.tsx';
import { Check, Sparkles, ArrowRight, Sliders } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      name: 'Starter Package',
      target: 'For businesses starting their digital presence.',
      badge: 'Foundation',
      featured: false,
      cta: 'Get Started',
      features: [
        'Social Media Content',
        'Graphic Designs',
        'Basic Video Editing',
        'Content Planning',
        'Platform Optimization',
        'Monthly Performance Summary',
      ],
      description:
        'A structured launchpad to establish a clean, consistent, and professional footprint on social media.',
    },
    {
      name: 'Growth Package',
      target: 'For businesses that want consistent content and stronger social media growth.',
      badge: 'Most Popular',
      featured: true,
      cta: 'Choose Growth',
      features: [
        'Social Media Management',
        'Content Creation',
        'Video Editing',
        'Graphic Design',
        'Content Strategy',
        'Community & Audience Engagement',
        'Multi-Platform Content Scheduling',
        'Bi-Weekly Growth Analytics',
      ],
      description:
        'Our core engine for active brands seeking increased engagement, reach, and community loyalty.',
    },
    {
      name: 'Custom Package',
      target: 'For brands requiring a complete customized digital solution.',
      badge: 'Full Solution',
      featured: false,
      cta: 'Request Custom Quote',
      features: [
        'Custom Social Media Management',
        'Content Creation',
        'Video Editing',
        'Graphic Design',
        'AI-Assisted Content',
        'Digital Marketing',
        'Customized Strategy',
        'Dedicated Creative Slack / WhatsApp Channel',
        'Priority Turnaround & Revision Rounds',
      ],
      description:
        'Tailored end-to-end agency partnership designed around your exact business model, cadence, and KPIs.',
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-8 md:px-10 py-12 sm:py-24 md:py-32 relative border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-8 sm:mb-16 md:mb-20">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 sm:mb-3 inline-block">
              Flexible Agency Tiers
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-2 sm:mb-4"
              style={{ fontSize: 'clamp(2.1rem, 7vw, 90px)' }}
            >
              Packages &amp; Pricing
            </h2>
            <p className="text-[#D7E2EA]/70 max-w-2xl mx-auto text-xs sm:text-base font-light px-2">
              Clear creative scopes tailored to your brand stage. We believe in transparent scope customization rather than one-size-fits-all rigid fees.
            </p>
          </div>
        </FadeIn>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <FadeIn key={pkg.name} delay={idx * 0.1} y={25} className="h-full">
              <div
                className={`h-full flex flex-col justify-between p-5 sm:p-8 rounded-[28px] sm:rounded-[36px] relative transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-gradient-to-b from-purple-950/40 via-[#161616] to-[#121212] border-2 border-purple-500/60 shadow-2xl shadow-purple-950/50 lg:scale-[1.02]'
                    : 'bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                {/* Popular Pill */}
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 sm:px-4 sm:py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="mb-4 sm:mb-6">
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-medium block mb-1">
                      {pkg.badge}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-300/90 font-light mt-1.5 sm:mt-2 leading-relaxed">
                      {pkg.target}
                    </p>
                  </div>

                  {/* Pricing indication (customized scope, not fake numbers) */}
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 mb-4 sm:mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg sm:text-2xl font-bold text-white uppercase tracking-tight">
                        Tailored Scope
                      </span>
                    </div>
                    <span className="text-[11px] text-[#D7E2EA]/60 block mt-1">
                      Customized monthly retainer or milestone-based deliverables
                    </span>
                  </div>

                  <p className="text-xs text-[#D7E2EA]/75 font-light leading-relaxed mb-4 sm:mb-6">
                    {pkg.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/90 block">
                      What&apos;s Included:
                    </span>
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85">
                        <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package CTA */}
                <div className="pt-3.5 sm:pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    type="button"
                    className={`w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.featured
                        ? 'contact-btn text-white shadow-lg shadow-purple-900/40 hover:brightness-110 active:scale-95'
                        : 'border border-white/20 text-[#D7E2EA] hover:bg-white/10 hover:text-white active:scale-95'
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Customization guarantee note */}
        <FadeIn delay={0.35} y={20}>
          <div className="mt-12 text-center text-xs text-[#D7E2EA]/60 max-w-xl mx-auto flex items-center justify-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>
              All packages are 100% customizable based on posting frequency, production volume, and target platforms.
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
