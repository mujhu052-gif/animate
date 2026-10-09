import React from 'react';
import { Sparkles } from 'lucide-react';
import { FadeIn } from './common/FadeIn.tsx';
import { ContactButton } from './common/ContactButton.tsx';
import { AnimatedText } from './common/AnimatedText.tsx';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-[70vh] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Centered Clean Content Stack */}
      <div className="relative z-20 flex flex-col items-center max-w-5xl w-full text-center my-auto">
        {/* Clean About Metic Media Pill */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs uppercase tracking-widest font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>About Metic Media</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={30} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-tight tracking-tight text-center max-w-4xl mx-auto mb-10"
            style={{ fontSize: 'clamp(2.4rem, 6.5vw, 4.8rem)' }}
          >
            Meticulous by name. It&apos;s how we treat every post, frame and pixel.
          </h2>
        </FadeIn>

        {/* Animated Paragraph with character-by-character reveal */}
        <div className="w-full flex justify-center mb-12">
          <div className="max-w-[760px] px-4">
            <AnimatedText
              text="Metic Media is a creative digital agency focused on building powerful digital identities for modern businesses. We combine strategy, creativity, technology, AI-assisted workflows, and human creativity to create content that helps brands grow. We work as an extension of your team, helping you plan, create, publish, manage, and improve your digital presence."
              className="text-[#D7E2EA] font-normal text-center leading-relaxed text-base sm:text-lg md:text-xl"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div>
          <FadeIn delay={0.25} y={20}>
            <ContactButton onClick={onOpenContact} label="Let's Grow Together" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
