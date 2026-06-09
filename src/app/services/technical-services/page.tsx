"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Cpu,
  Hammer,
  Paintbrush,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Thermometer,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

const mainServices = [
  {
    icon: Thermometer,
    title: "HVAC & AC Maintenance",
    desc: "Comprehensive repair, deep coil cleaning, duct sanitization, gas refilling, and preventive installation of all central and split air conditioning systems.",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    desc: "Professional troubleshooting, short-circuit diagnostics, database boards, wiring installations, fixtures setup, and smart control system integrations.",
  },
  {
    icon: Wrench,
    title: "Plumbing Solutions",
    desc: "Leakage detection, booster pump repair, piping replacements, sanitary fixtures installation, blockages cleaning, and drainage line restorations.",
  },
  {
    icon: Paintbrush,
    title: "Painting & Wallpapering",
    desc: "Precision internal and external painting, textured coatings, drywall plastering, wallpaper installation, and protective surface treatments.",
  },
  {
    icon: Layers,
    title: "Masonry & Tiling",
    desc: "High-finish floor and wall tiling, concrete restoration, marble polishing, drywall partitioning, gypsum ceilings, and plaster repairs.",
  },
  {
    icon: Hammer,
    title: "Carpentry & Joinery",
    desc: "Custom wooden paneling, door and lock installations, modular cabinets setups, partitions, and wooden furniture repairs and refurnishing.",
  },
];

const highlights = [
  { value: "100%", label: "MEP Compliance Rate" },
  { value: "500+", label: "Projects Completed" },
  { value: "24/7", label: "Emergency Breakdown Support" },
  { value: "Certified", label: "Technical Personnel" },
];

const workflow = [
  {
    step: "01",
    title: "Inquiry & Booking",
    desc: "Register your technical service request or periodic maintenance contract requirement online or via our direct support line.",
  },
  {
    step: "02",
    title: "Site Inspection",
    desc: "Our qualified inspection team visits your site to perform diagnostics and outline the precise technical workflow.",
  },
  {
    step: "03",
    title: "Expert Execution",
    desc: "Deploying certified technicians equipped with modern tools to carry out technical operations with zero downtime.",
  },
  {
    step: "04",
    title: "Quality Sign-off",
    desc: "Post-job testing and thorough quality assurance audits to verify safety parameters and performance before hand-off.",
  },
];

export default function TechnicalServicesPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                Engineering &amp; MEP
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              Expert <span className="text-gradient-gold">Technical Solutions</span>
              <br />&amp; Maintenance Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted text-base leading-relaxed"
            >
              Al Areeq delivers premium engineering, fit-out maintenance, and MEP (Mechanical, Electrical, Plumbing) support tailored for commercial offices, residential spaces, and industrial facilities in the UAE.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {highlights.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 text-center hover:border-primary/20 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-xs text-muted mt-2 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Divisions ─── */}
      <section className="relative py-24 bg-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Capabilities</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Engineering &amp; Technical <span className="text-gradient-gold">Services Grid</span>
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              We employ highly qualified trade professionals to execute technical jobs with precision, safety, and strict regulatory adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-8 border border-white/5 hover:border-primary/25 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Workflow Process ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Workflow</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Our Professional <span className="text-gradient-gold">Work Process</span>
            </h2>
            <p className="mt-4 text-muted text-sm">
              How we execute technical and maintenance requests efficiently and safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative glass rounded-2xl p-6 border border-white/5 hover:border-primary/15 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-300 font-mono mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quality Standards ─── */}
      <section className="relative py-24 bg-surface/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Safety &amp; Compliance</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                Uncompromising Technical <span className="text-gradient-gold">Safety &amp; Standards</span>
              </h2>
              <p className="mt-6 text-muted text-sm leading-relaxed mb-8">
                Every project and call-out is supervised by senior field engineers adhering strictly to health and safety regulations.
              </p>
              <div className="space-y-4">
                {[
                  { title: "SLA Commitments", desc: "Rigorous adherence to response times, especially for emergency call-outs." },
                  { title: "Certified Tools", desc: "Equipped with advanced calibrations and diagnostic devices." },
                  { title: "Risk Assessments", desc: "Mandatory pre-job hazard analysis and safety controls mapping." },
                  { title: "Guaranteed Spares", desc: "Usage of genuine OEM replacement parts with warranty coverage." }
                ].map((item, idx) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent blur-xl pointer-events-none" />
              <div
                className="relative aspect-[4/3] bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need Professional Technical <span className="text-gradient-gold">or MEP Crews?</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Get in touch with our operations center to book technical inspection crews, setup annual maintenance packages, or request skilled technical manpower.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Go Back About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
