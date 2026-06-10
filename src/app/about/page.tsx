"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Quote,
  Building2,
  Clock,
  Globe,
} from "lucide-react";

import Link from "next/link";

const stats = [
  { value: "5+", label: "Years of Experience", icon: Clock },
  { value: "200+", label: "Clients Served", icon: Users },
  { value: "1000+", label: "Manpower Deployed", icon: Building2 },
  { value: "UAE", label: "Wide Coverage", icon: Globe },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "We deliver dependable manpower and facility solutions that businesses can consistently count on.",
  },
  {
    icon: Award,
    title: "Professionalism",
    desc: "High standards in workforce management, client communication, and service delivery.",
  },
  {
    icon: Heart,
    title: "Commitment",
    desc: "Dedicated to supporting our clients' operational success with unwavering dedication.",
  },
  {
    icon: TrendingUp,
    title: "Efficiency",
    desc: "Focused on timely manpower deployment and smooth workforce coordination.",
  },
  {
    icon: Users,
    title: "Integrity",
    desc: "Honest, transparent dealings with clients, workers, and all stakeholders.",
  },
  {
    icon: CheckCircle2,
    title: "Quality",
    desc: "Ensuring every deployment meets the highest standards of skill and performance.",
  },
];

const whyUs = [
  "Licensed and compliant with UAE labour regulations",
  "Rapid deployment of skilled, semi-skilled & general workers",
  "Dedicated account managers for each client",
  "Proven track record across construction & marine sectors",
  "Transparent contracts with no hidden charges",
  "24/7 support and workforce management assistance",
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/about-section.png)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              About Us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Delivering Reliable{" "}
            <br />
            <span className="text-gradient-gold">Facility &amp; Manpower</span><br />
            Services Across the UAE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted text-base leading-relaxed max-w-2xl mx-auto"
          >
            Al Areeq Facility Management Services is a trusted provider of professional facility management,
            manpower supply, maintenance, and technical support services across the UAE.
          </motion.p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="relative py-12 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-gradient-gold">{stat.value}</span>
                  <span className="text-xs text-muted mt-1">{stat.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Who We Are ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div
                  className="aspect-[4/3] bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage:
                      "url(/about-who-we-are.png)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent rounded-2xl" />
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-5 -right-5 glass rounded-xl px-5 py-3 border border-primary/20 shadow-xl">
                <span className="text-primary font-bold text-xl">5+</span>
                <p className="text-xs text-muted">Years of Excellence</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Who We Are</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-snug">
                About Al Areeq{" "}
                <span className="text-gradient-gold">Facilities Management</span>
              </h2>
              <div className="mt-6 space-y-4 text-muted text-sm leading-relaxed">
                <p>
                  Al Areeq Facilities Management Services is a trusted manpower supply company in the UAE,
                  serving construction companies, marine repair businesses, workshops, and maintenance firms
                  with reliable workforce solutions.
                </p>
                <p>
                  We are committed to helping businesses operate efficiently by supplying skilled,
                  semi-skilled, and general workers tailored to project and operational requirements.
                </p>
                <p>
                  Our focus is on professionalism, timely deployment, workforce reliability, and
                  long-term client partnerships that drive mutual growth.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {["Fully licensed & compliant with UAE regulations", "Skilled workforce across multiple sectors", "Long-term partnership approach"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Founder / CEO Section ─── */}
      <section className="relative py-24 bg-surface overflow-hidden">
        <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Leadership</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Message from Our <span className="text-gradient-gold">Founder &amp; CEO</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Gold ring glow */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/40 via-amber-400/20 to-transparent blur-md" />
                <div className="relative w-full max-w-sm lg:max-w-md rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                  <Image
                    src="/founder.jpg"
                    alt="Mohammed Jahadul Alam - Founder & Managing Director, Al Areeq"
                    width={500}
                    height={650}
                    className="object-cover w-full h-auto"
                    priority
                  />
                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent px-6 py-5">
                    <p className="font-bold text-base text-foreground">Mohammed Jahadul Alam</p>
                    <p className="text-xs text-primary font-medium mt-0.5">Founder &amp; Managing Director</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Message from the MD</span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold">Managing Director&apos;s Message</h3>

              {/* Quote icon */}
              <div className="mt-6 relative">
                <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/20" />
                <div className="pl-6 space-y-4 text-muted text-sm leading-relaxed">
                  <p>Welcome to Al Areeq Facility Management Services.</p>
                  <p>
                    At Al Areeq, we are committed to delivering reliable, efficient, and high-quality
                    facility management and manpower solutions across the UAE. Our goal is to support
                    businesses with professional services that ensure operational excellence, safety,
                    and customer satisfaction.
                  </p>
                  <p>
                    With a dedicated team and a strong focus on professionalism, integrity, and
                    innovation, we continuously strive to exceed client expectations in every project
                    we undertake.
                  </p>
                  <p>
                    We value the trust our clients place in us and believe that long-term relationships
                    are built through quality service, transparency, and consistent performance.
                  </p>
                </div>
              </div>

              {/* Signature block */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-1 rounded-full bg-gradient-to-b from-primary to-amber-400" />
                <div>
                  <p className="font-bold text-foreground">Mohammed Jahadul Alam</p>
                  <p className="text-xs text-muted mt-0.5">Founder &amp; Managing Director, Al Areeq Facility Management Services</p>
                </div>
              </div>

              {/* Credential badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["UAE Licensed", "5+ Years Experience", "Industry Expert"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30 text-primary bg-primary/5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Direction</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Mission &amp; <span className="text-gradient-gold">Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted text-sm leading-relaxed">
                To provide reliable, efficient, and professional manpower solutions that support business
                growth and operational excellence across construction, marine, and maintenance industries.
                We strive to be the most trusted manpower partner in the UAE.
              </p>
              <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-primary to-amber-400 rounded-full" />
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted text-sm leading-relaxed">
                To be the premier business solutions provider in the UAE, delivering exceptional value through our diverse portfolio of companies.
              </p>
              <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-primary to-amber-400 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Business Divisions / Portfolio ─── */}
      <section className="relative py-24 bg-surface/50 overflow-hidden border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Sectors</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Diverse Portfolio of <span className="text-gradient-gold">Companies</span>
            </h2>
            <p className="mt-4 text-muted text-sm max-w-xl mx-auto">
              Delivering specialized solutions through our core business entities across the UAE.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              /*
              {
                num: "01",
                title: "Document Clearing",
                desc: "Hassle-free government services",
                details: "Professional clearing, visa processing, licensing assistance, and streamlined government liaison services.",
                icon: Globe,
                href: "/services/document-clearing",
              },
              */
              {
                num: "01",
                title: "Technical Services",
                desc: "Expert technical solutions",
                details: "Comprehensive technical support, engineering, maintenance, and expert technical manpower supply.",
                icon: ShieldCheck,
                href: "/services/technical-services",
              },
              {
                num: "02",
                title: "Building Cleaning",
                desc: "Professional facility management",
                details: "Top-tier building cleaning, janitorial maintenance, and thorough facility hygiene solutions tailored for commercial sectors.",
                icon: Building2,
                href: "/services/building-cleaning",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href} className="group block h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-2xl p-8 border border-white/5 group-hover:border-primary/25 transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-full"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-primary/20 transition-all duration-500" />

                    <div>
                      {/* Top row with Number and Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-5xl font-black text-white/10 group-hover:text-primary/20 transition-colors duration-500 font-mono">
                          {item.num}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary/80 mb-4">
                        {item.desc}
                      </p>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.details}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-primary group-hover:text-white transition-colors duration-300">
                      <span>Explore Division</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="relative py-24 bg-surface overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">What Drives Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Our <span className="text-gradient-gold">Core Values</span>
            </h2>
            <p className="mt-4 text-muted text-sm max-w-xl mx-auto">
              These principles guide every decision we make and every service we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{v.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Why Al Areeq</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-snug">
                Why Businesses Choose{" "}
                <span className="text-gradient-gold">Al Areeq</span>
              </h2>
              <p className="mt-6 text-muted text-sm leading-relaxed">
                We bring a combination of industry experience, licensed operations, and a client-first
                approach that makes us the preferred manpower and facility management partner in the UAE.
              </p>
              <ul className="mt-8 space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent blur-xl" />
              <div
                className="relative aspect-[4/3] bg-cover bg-center rounded-2xl overflow-hidden"
                style={{
                  backgroundImage:
                    "url(/about-why-swift-zone.png)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
              </div>
              {/* floating stat */}
              <div className="absolute -bottom-5 -left-5 glass rounded-xl px-5 py-3 border border-primary/20 shadow-xl">
                <span className="text-primary font-bold text-xl">1000+</span>
                <p className="text-xs text-muted">Workers Deployed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface to-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Partner with{" "}
              <span className="text-gradient-gold">Al Areeq?</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Let us provide the reliable manpower and facility management solutions your business needs
              to thrive across the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
