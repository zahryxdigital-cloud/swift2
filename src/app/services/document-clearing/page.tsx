"use client";

import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  Building2,
  Users,
  Compass,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";

const mainServices = [
  {
    icon: Users,
    title: "Visa Processing & Residency",
    desc: "End-to-end assistance for partner, investor, employment, family, and golden visas. We handle medical typing, Emirates ID registration, and visa stamping seamlessly.",
  },
  {
    icon: Building2,
    title: "Company Setup & Licensing",
    desc: "Complete business setup solutions. From trade license registration, local sponsor agreements, memorandum of association (MOA), to office space clearances.",
  },
  {
    icon: FileText,
    title: "Corporate PRO Services",
    desc: "Dedicated corporate representation with government departments including DED, MOHRE, General Directorate of Residency and Foreigners Affairs (GDRFA).",
  },
  {
    icon: CreditCard,
    title: "Government Liaisoning",
    desc: "Fast-track processing for Municipal approvals, Civil Defense certificates, Chamber of Commerce registration, and all ministerial clearances.",
  },
  {
    icon: Compass,
    title: "Embassy Attestation",
    desc: "Attestation services for degrees, marriage certificates, birth certificates, power of attorney, and commercial documents from all foreign embassies.",
  },
  {
    icon: Briefcase,
    title: "Legal Translation",
    desc: "MOJ approved legal translation services for corporate contracts, court agreements, power of attorney, and general legal documentation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Audit",
    desc: "We analyze your documentation requirements and outline the process, timelines, and required government fees.",
  },
  {
    step: "02",
    title: "Document Submission",
    desc: "Our secure systems accept and check your files to ensure 100% compliance before submission to government portals.",
  },
  {
    step: "03",
    title: "Government Processing",
    desc: "Our expert PRO agents represent your interest directly at ministries and departments to secure quick approvals.",
  },
  {
    step: "04",
    title: "Delivery & Handover",
    desc: "We deliver your processed visas, trade licenses, or attested documents right to your doorstep safely.",
  },
];

const statistics = [
  { value: "99%", label: "Approval Success Rate" },
  { value: "10k+", label: "Visas Processed" },
  { value: "24/7", label: "Client Assistance" },
  { value: "100%", label: "Compliance & Safety" },
];

export default function DocumentClearingPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
        <div className="absolute top-40 left-10 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                Corporate Services
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              Hassle-Free <span className="text-gradient-gold">Document Clearing</span>
              <br />&amp; PRO Services in UAE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted text-base leading-relaxed"
            >
              Al Areeq offers premium, fast-tracked document clearing and governmental PRO services, allowing you to focus on your core business operations while we navigate UAE regulations.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {statistics.map((stat, i) => (
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

      {/* ─── Core Offerings ─── */}
      <section className="relative py-24 bg-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Solutions</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Comprehensive <span className="text-gradient-gold">Governmental PRO</span> Services
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              We handle every documentation need across all UAE ministries and governmental departments with absolute accuracy.
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

      {/* ─── Process Workflow ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Workflow</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Our Streamlined <span className="text-gradient-gold">Onboarding Process</span>
            </h2>
            <p className="mt-4 text-muted text-sm">
              We make document clearance and visas simple, secure, and completely stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
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

      {/* ─── Why Choose Us ─── */}
      <section className="relative py-24 bg-surface/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Why Us</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                Navigating Government Regulations <span className="text-gradient-gold">Efficiently</span>
              </h2>
              <p className="mt-6 text-muted text-sm leading-relaxed mb-8">
                As a fully registered and highly experienced agency, we offer reliable legal and document clearing assistance across all seven emirates.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Speed & Accuracy", desc: "Fast-tracked submissions with minimal rejection probability." },
                  { title: "Direct Liaison", desc: "Strong direct channels with all major governmental authorities." },
                  { title: "Transparent Costing", desc: "Detailed breakdown of government fees and service charges." },
                  { title: "Confidentiality", desc: "Your data and legal corporate documents are completely secure with us." }
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
                    "url(https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop)",
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
              Need Reliable PRO or <span className="text-gradient-gold">Document Assistance?</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Get in touch with our specialists today for a detailed consultation regarding your business licensing, PRO services, or visa requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                Request Consultation
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
