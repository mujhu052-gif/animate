import React from 'react';
import { FadeIn } from './common/FadeIn.tsx';
import { Search, PenTool, Radio, BarChart3, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenContact: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Brand & Market Intelligence',
      description:
        'Understand the brand, audience, goals, competitors, and requirements to set a solid trajectory.',
      icon: Search,
      highlight: 'Deep Dive Brief',
    },
    {
      number: '02',
      title: 'Plan & Create',
      tagline: 'Strategy to Production',
      description:
        'Develop the strategy, concepts, content, designs, and videos using human creativity and AI workflows.',
      icon: PenTool,
      highlight: 'Asset Crafting',
    },
    {
      number: '03',
      title: 'Publish & Manage',
      tagline: 'Consistent Execution',
      description:
        'Publish content, manage social platforms, engage with audiences, and maintain rock-solid consistency.',
      icon: Radio,
      highlight: 'Community & Growth',
    },
    {
      number: '04',
      title: 'Review & Grow',
      tagline: 'Performance Optimization',
      description:
        'Analyze performance, improve the strategy, and continuously optimize content and campaigns.',
      icon: BarChart3,
      highlight: 'Iterative Scaling',
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3 inline-block">
              How We Work
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
            >
              Our Process
            </h2>
            <p className="text-[#D7E2EA]/70 max-w-xl mx-auto text-sm sm:text-base font-light">
              A structured, repeatable methodology built to transform ideas into measurable social growth.
            </p>
          </div>
        </FadeIn>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={idx * 0.1} y={25} className="h-full">
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.04] transition-all relative group">
                  {/* Step Top */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-bold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                        Step {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-purple-300 group-hover:scale-105 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/50 block mb-3">
                      {step.tagline}
                    </span>

                    <p className="text-xs sm:text-sm text-[#D7E2EA]/75 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Bottom Indicator */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#D7E2EA]/50">
                    <span className="font-medium text-purple-300/80">{step.highlight}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Process Note */}
        <FadeIn delay={0.4} y={20}>
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 via-white/[0.02] to-emerald-950/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-bold uppercase text-white tracking-wide">
                Ready to accelerate your brand&apos;s growth?
              </h4>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1">
                We onboard new clients with a detailed strategy roadmap and first deliverables within days.
              </p>
            </div>
            <button
              onClick={onOpenContact}
              type="button"
              className="contact-btn px-8 py-3 rounded-full text-white text-xs font-semibold uppercase tracking-widest shrink-0"
            >
              Start Discovery
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
