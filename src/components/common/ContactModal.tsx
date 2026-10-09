import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Sparkles, Phone, MessageCircle, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Social Media Management',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
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
      ? `Hi Metic Media, I'm ${formData.name}. I'm interested in your ${formData.service} services. I'd like to discuss my project.`
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
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#141414] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 my-8 text-[#D7E2EA] max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                  Brief Dispatched!
                </h3>
                <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <span className="text-white font-medium">{formData.name || 'friend'}</span>. The Metic Media team will analyze your requirements and get back to you within 24 hours.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleReset}
                    type="button"
                    className="contact-btn px-8 py-3 rounded-full text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Done
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Metic Media · Let&apos;s Grow Together</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    Start a Project
                  </h2>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light">
                    Tell us what you need and our creative leads will curate a bespoke proposal.
                  </p>
                </div>

                {/* Quick contact badge bar */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] text-[#D7E2EA]/80">
                  <a href="tel:+923403516101" className="flex items-center gap-2 hover:text-white truncate">
                    <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">+92 340 3516101</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-300 hover:text-emerald-200 truncate"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>WhatsApp Available</span>
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                      Your Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Email Address <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@brand.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                        Phone / WhatsApp <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 340 ..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                      Service Required <span className="text-pink-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1d1d1d] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/80 mb-1.5">
                      Message &amp; Project Scope <span className="text-pink-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand goals, target platforms, and timeline..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-btn flex items-center gap-2 px-8 py-3 rounded-full text-white text-xs sm:text-sm font-semibold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
