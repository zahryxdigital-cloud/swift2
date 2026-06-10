"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormState("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(message);
      setFormState("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/40 transition-colors";

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
                <a href="tel:+971568126777" className="text-sm text-muted hover:text-primary transition-colors">
                  +971 56 812 6777
                </a> <br />
                <a href="tel:+97145585725" className="text-sm text-muted hover:text-primary transition-colors">
                  +971 4 558 5725
                </a>
              </div>
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Email Us</h3>
                <a
                  href="mailto:Infoalareeqtech@gmail.com"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Infoalareeqtech@gmail.com
                </a>
              </div>
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-sm text-muted">
                  Office no 202, Coastal Building, Al Qusais 2, Dubai, United Arab Emirates
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

                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-lg font-semibold">Message Sent!</h3>
                      <p className="text-muted text-sm max-w-xs">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setFormState("idle")}
                        className="mt-4 px-6 py-2.5 rounded-full border border-primary/30 text-primary text-sm hover:bg-primary/10 transition-colors"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">
                            Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">
                            Email <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 5X XXX XXXX"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">Subject</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-muted mb-2 uppercase tracking-wider font-medium">
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your manpower requirements..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {/* Error banner */}
                      <AnimatePresence>
                        {formState === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                            <span>{errorMsg || "Failed to send. Please try again."}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-amber-600 text-background font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formState === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
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
