"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              We&apos;re Here to{" "}
              <span className="text-gradient-gold">Help!</span>
            </h1>
            <p className="mt-6 text-muted text-sm leading-relaxed">
              Looking for reliable manpower solutions? Contact Al Areeq for professional workforce support across
              construction, marine, and maintenance sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all">
                <Phone className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Call Us</h3>
                <a href="tel:+971551697568" className="text-sm text-muted hover:text-primary transition-colors">
                  +971 55 169 7568
                </a>
              </div>
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Email Us</h3>
                <a
                  href="mailto:info@swiftzonegroup.com"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  info@swiftzonegroup.com
                </a>
              </div>
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-sm text-muted">
                  Office B-24
                  <br />
                  Hor Al Anz Building - 307
                  <br />
                  Hor Al Anz, Dubai
                  <br />
                  United Arab Emirates
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-2xl p-8 border border-white/5">
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">Phone</label>
                      <input
                        type="tel"
                        placeholder="+971 5X XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">Subject</label>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your manpower requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-amber-600 text-background font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="glass rounded-2xl overflow-hidden border border-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.874975700914!2d55.32595987879021!3d25.274790870976215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d00024923e7%3A0xa5dc6ccc8847f19a!2sHOR%20AL%20ANZ%20BUILDING!5e0!3m2!1sen!2sae!4v1778048994265!5m2!1sen!2sae"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
