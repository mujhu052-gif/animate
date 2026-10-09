import React, { useState } from 'react';
import { FadeIn } from './common/FadeIn.tsx';
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Social Media Management',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'Social Media Management',
    'Content Creation',
    'AI-Assisted Content',
    'Video Editing',
    'Graphic Design',
    'Digital Marketing',
    'Complete Package',
    'Other',
  ];

  const whatsappMessage = encodeURIComponent(
    formData.name
      ? `Hi Metic Media, I'm ${formData.name}. I'm interested in your ${formData.service} services. Let's discuss my project.`
      : "Hi Metic Media, I'm interested in your creative services. I'd like to discuss my project."
  );
  const whatsappUrl = `https://wa.me/923403516101?text=${whatsappMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Social Media Management',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading, description, and direct contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <FadeIn delay={0} y={20}>
                <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3 inline-block">
                  Get In Touch
                </span>
                <h2
                  className="hero-heading font-black uppercase tracking-tight leading-none mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 70px)' }}
                >
                  Let&apos;s Grow Together.
                </h2>
                <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base mb-8">
                  Have a project, business, or idea you want to grow? Tell us what you need and the Metic Media team will get back to you.
                </p>
              </FadeIn>

              {/* Direct Communication Channels (Phone, Email, WhatsApp) */}
              <div className="space-y-4">
                {/* Phone */}
                <FadeIn delay={0.1} y={15}>
                  <a
                    href="tel:+923403516101"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium block">
                        Phone &amp; Direct Line
                      </span>
                      <span className="text-sm sm:text-base text-white font-medium">
                        +92 340 3516101
                      </span>
                    </div>
                  </a>
                </FadeIn>

                {/* Email */}
                <FadeIn delay={0.18} y={15}>
                  <a
                    href="mailto:meticmediapk@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium block">
                        Official Agency Email
                      </span>
                      <span className="text-sm sm:text-base text-white font-medium break-all">
                        meticmediapk@gmail.com
                      </span>
                    </div>
                  </a>
                </FadeIn>

                {/* WhatsApp Direct Chat */}
                <FadeIn delay={0.25} y={15}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all text-emerald-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-emerald-300/70 font-medium block">
                        Direct Messaging
                      </span>
                      <span className="text-sm sm:text-base text-white font-medium">
                        Chat on WhatsApp
                      </span>
                    </div>
                  </a>
                </FadeIn>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-[#D7E2EA]/50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>Prompt response guaranteed within 2 hours</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={25}>
              <div className="p-6 sm:p-10 rounded-[36px] bg-[#141414] border border-white/10 shadow-2xl relative">
                {submitted ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-md mx-auto leading-relaxed font-light">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. The Metic Media strategy team has received your project details and will review them immediately.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                      <button
                        onClick={handleReset}
                        type="button"
                        className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 text-white cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/30 cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-8">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Project Brief</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                        Tell Us About Your Brand
                      </h3>
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mt-1">
                        Fill out the details below and we&apos;ll schedule a discovery call with tailored creative concepts.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-2">
                            Name <span className="text-pink-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-2">
                            Email <span className="text-pink-400">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone / WhatsApp */}
                        <div>
                          <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-2">
                            Phone / WhatsApp <span className="text-pink-400">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+92 340 0000000"
                            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                          />
                        </div>

                        {/* Service Required dropdown */}
                        <div>
                          <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-2">
                            Service Required <span className="text-pink-400">*</span>
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-[#1d1d1d] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors cursor-pointer"
                          >
                            {serviceOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-2">
                          Project Details &amp; Goals <span className="text-pink-400">*</span>
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your brand, current social channels, target timeline, and what you would like to achieve..."
                          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors resize-none"
                        />
                      </div>

                      {/* Submit button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="contact-btn w-full py-4 rounded-full text-white text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer shadow-xl shadow-purple-950/50"
                        >
                          {isSubmitting ? (
                            <span>Dispatching Brief...</span>
                          ) : (
                            <>
                              <span>Send Inquiry</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
