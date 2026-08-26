"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Anchor,
  Wrench,
  Thermometer,
  Zap,
  Paintbrush,
  Layers,
  Hammer,
  Building2,
  Home,
  Sparkles,
  GlassWater,
  Trash2,
  CheckCircle2,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

// --- Data Structures ---

const categoryTabs = [
  { id: "manpower-supply", label: "Manpower Supply Solutions", icon: Users },
  { id: "technical-services", label: "Technical & MEP Services", icon: Wrench },
  { id: "building-cleaning", label: "Building Cleaning & Sanitation", icon: Sparkles },
];

const manpowerServices = [
  {
    id: "construction-manpower-supply",
    title: "Construction Manpower Supply",
    description:
      "Al Areeq provides skilled, semi-skilled, and general workers for construction projects of all sizes. Our workforce is fully trained, safety-certified, and ready for rapid deployment across the UAE.",
    icon: HardHat,
    image: "/construction-manpower.png",
    features: [
      "General laborers for construction sites",
      "Skilled trades: carpenters, masons, electricians, plumbers",
      "Equipment operators and heavy drivers",
      "Safety-compliant workforce equipped with full PPE",
      "Short-term and long-term deployment options",
      "24/7 workforce coordination and logistics support",
    ],
  },
  {
    id: "marine-repair-and-workshop-manpower-supply",
    title: "Marine Repair & Workshop Manpower Supply",
    description:
      "Supporting the maritime industry with experienced marine technicians, workshop staff, and skilled trades for ship repair, vessel maintenance, and heavy fabrication work across UAE ports and shipyards.",
    icon: Anchor,
    image: "/marine-repair.png",
    features: [
      "Certified marine fitters and structural welders",
      "Ship repair and drydock technicians",
      "Mechanical and electrical workshop staff",
      "Painting, abrasive blasting, and metal fabrication specialists",
      "Qualified and safety-vetted marine workforce",
      "HSE-compliant personnel for complex marine operations",
    ],
  },
  {
    id: "maintenance-company-staffing-solutions",
    title: "Maintenance Staffing Solutions",
    description:
      "Professional maintenance crews for facility upkeep, HVAC, electrical, plumbing, and general building maintenance. We keep your commercial and residential operations running seamlessly.",
    icon: Wrench,
    image: "/maintenance-staff.png",
    features: [
      "HVAC technicians and maintenance engineers",
      "Electrical and plumbing maintenance personnel",
      "Building and facility maintenance crews",
      "Preventive maintenance and inspection specialists",
      "24/7 emergency maintenance support teams",
      "Certified trade staff with proven industry track record",
    ],
  },
];

const technicalCapabilities = [
  {
    icon: Thermometer,
    title: "HVAC & AC Maintenance",
    desc: "Comprehensive repair, deep coil cleaning, duct sanitization, gas refilling, and preventive installation of central, split, and package AC units.",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    desc: "Professional troubleshooting, short-circuit diagnostics, distribution boards, wiring installations, fixtures setup, and smart control systems.",
  },
  {
    icon: Wrench,
    title: "Plumbing Solutions",
    desc: "Leakage detection, booster pump repair, piping replacement, sanitary fixture installation, blockage clearing, and drainage restorations.",
  },
  {
    icon: Paintbrush,
    title: "Painting & Wallpapering",
    desc: "Precision internal and external painting, textured coatings, drywall plastering, wall covering installations, and protective surface treatments.",
  },
  {
    icon: Layers,
    title: "Masonry & Tiling",
    desc: "High-finish floor and wall tiling, concrete restoration, marble polishing, drywall partitioning, gypsum false ceilings, and plaster repair work.",
  },
  {
    icon: Hammer,
    title: "Carpentry & Joinery",
    desc: "Custom wooden paneling, door and lock installations, modular cabinet setups, partitions, and wooden furniture maintenance and refurnishing.",
  },
];

const technicalHighlights = [
  { value: "100%", label: "MEP Compliance Rate" },
  { value: "500+", label: "Projects Completed" },
  { value: "24/7", label: "Emergency Support" },
  { value: "Certified", label: "Technical Personnel" },
];

const technicalWorkflow = [
  {
    step: "01",
    title: "Inquiry & Booking",
    desc: "Register your technical service request or periodic maintenance contract requirement online or via direct support.",
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

const cleaningServices = [
  {
    icon: Building2,
    title: "Commercial & Office Cleaning",
    desc: "Bespoke cleaning solutions for corporate offices, retail spaces, warehouses, and institutional buildings to maintain productive environments.",
  },
  {
    icon: Home,
    title: "Residential Deep Cleaning",
    desc: "Detailed sanitization for villas and apartments covering kitchen deep cleans, bathroom steam disinfection, balcony washing, and cabinet detailing.",
  },
  {
    icon: Sparkles,
    title: "Marble Polishing & Restoration",
    desc: "Polishing, grinding, crystallization, and sealing of marble, granite, and tile flooring to restore original luster and protect against stains.",
  },
  {
    icon: Layers,
    title: "Upholstery & Carpet Cleaning",
    desc: "Industrial steam extraction and shampooing for sofa fabrics, mattresses, office chairs, and carpets to eliminate allergens and stubborn stains.",
  },
  {
    icon: GlassWater,
    title: "External Window & Facade Cleaning",
    desc: "Safe facade washing, high-rise glass window cleaning, and high-pressure washing for commercial towers and residential complexes.",
  },
  {
    icon: Trash2,
    title: "Post-Construction Cleaning",
    desc: "Intensive debris clearing, fine dust extraction, paint splashes removal, and deep sanitation immediately following construction or renovation work.",
  },
];

const cleaningHighlights = [
  { value: "100%", label: "Eco-Friendly Chemicals" },
  { value: "50+", label: "Corporate Clients" },
  { value: "Trained", label: "Cleaning Specialists" },
  { value: "98%", label: "Client Satisfaction" },
];

const cleaningWorkflow = [
  {
    step: "01",
    title: "Consultation & Scope",
    desc: "We review your facility type, square footage, and specific instructions to establish a personalized cleaning plan.",
  },
  {
    step: "02",
    title: "Crew & Gear Deployment",
    desc: "Our cleaning supervisors arrive on-site with advanced equipment and green-certified eco-cleaning chemicals.",
  },
  {
    step: "03",
    title: "Systematic Cleaning",
    desc: "Rigorous cleaning process following high-standard hygiene checklists covering deep sanitization and detail cleaning.",
  },
  {
    step: "04",
    title: "Supervisor Audit",
    desc: "A final walkthrough and inspection by the on-site supervisor ensures every corner meets our high hygiene benchmarks.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Complete Services Suite
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Integrated Manpower, Technical &amp; <br />
              <span className="text-gradient-gold">Facility Solutions</span>
            </h1>
            <p className="mt-6 text-muted text-base leading-relaxed">
              Al Areeq Technical Services provides end-to-end workforce supply, MEP technical engineering, and professional building cleaning solutions tailored for businesses across the United Arab Emirates.
            </p>
          </motion.div>

          {/* Quick Jump Category Bar */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {categoryTabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl glass border border-white/10 text-foreground/90 font-semibold text-xs sm:text-sm hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-lg"
                >
                  <TabIcon className="w-4 h-4 text-primary shrink-0" />
                  {tab.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: MANPOWER SUPPLY SOLUTIONS ─── */}
      <section id="manpower-supply" className="relative py-24 scroll-mt-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Workforce Deployment
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Manpower Supply <span className="text-gradient-gold">Solutions</span>
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              Vetted, experienced, and safety-compliant workforce for construction sites, marine workshops, and facility maintenance across Dubai and the UAE.
            </p>
          </div>

          <div className="space-y-20">
            {manpowerServices.map((service, i) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="scroll-mt-28 glass rounded-3xl p-8 sm:p-10 border border-white/5 hover:border-primary/20 transition-all duration-500"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-white/5">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${service.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/20 to-transparent" />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-md flex items-center justify-center border border-white/10">
                          <ServiceIcon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Manpower Category 0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/90 mb-4">
                          Key Workforce Capabilities:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                      >
                        Request Manpower Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: TECHNICAL & MEP SERVICES ─── */}
      <section id="technical-services" className="relative py-24 scroll-mt-24 bg-surface/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Engineering &amp; MEP
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Technical &amp; Maintenance <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              Comprehensive MEP, fit-out maintenance, and engineering services carried out by certified field technicians and engineers.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {technicalHighlights.map((stat, i) => (
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

          {/* Service Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {technicalCapabilities.map((service, i) => {
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

          {/* Workflow & Compliance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass rounded-3xl p-8 sm:p-10 border border-white/5">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Workflow</span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-6">
                Technical Service <span className="text-gradient-gold">Execution Process</span>
              </h3>
              <div className="space-y-6">
                {technicalWorkflow.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="text-2xl font-black text-primary/40 font-mono shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{step.title}</h4>
                      <p className="text-xs text-muted mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 bg-surface/60 rounded-2xl p-6 sm:p-8 border border-white/5">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Safety &amp; Quality</span>
              <h3 className="text-xl font-bold">Uncompromising Technical Standards</h3>
              <div className="space-y-4">
                {[
                  { title: "SLA Response Guarantee", desc: "Fast turnarounds for urgent maintenance and emergency repair calls." },
                  { title: "Calibrated Diagnostic Equipment", desc: "Using industry-certified testing meters, thermal cameras, and gauges." },
                  { title: "OEM Genuine Spare Parts", desc: "100% original replacement components with standard warranty coverage." },
                  { title: "Hazard Analysis & PPE", desc: "Strict risk assessments and safety protocols enforced on all jobs." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider hover:underline"
                >
                  Book Technical Inspection <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BUILDING CLEANING & SANITATION ─── */}
      <section id="building-cleaning" className="relative py-24 scroll-mt-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Facility Management
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Building Cleaning &amp; <span className="text-gradient-gold">Sanitation Services</span>
            </h2>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              Pristine hygiene solutions for commercial towers, residential villas, offices, and post-construction sites.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {cleaningHighlights.map((stat, i) => (
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

          {/* Cleaning Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {cleaningServices.map((service, i) => {
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

          {/* Green Initiative & Workflow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface/50 rounded-3xl p-8 sm:p-10 border border-white/5">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Hygiene Standard</span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-6">
                Professional <span className="text-gradient-gold">Cleaning Process</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cleaningWorkflow.map((step) => (
                  <div key={step.step} className="glass p-5 rounded-2xl border border-white/5">
                    <span className="text-2xl font-black text-primary/40 font-mono block mb-2">
                      {step.step}
                    </span>
                    <h4 className="font-bold text-sm text-foreground mb-1">{step.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Green &amp; Safe</span>
              <h3 className="text-2xl sm:text-3xl font-bold">Health-First Eco Cleaning</h3>
              <p className="text-muted text-sm leading-relaxed">
                We utilize bio-degradable, eco-certified cleaning chemicals and HEPA-filtered vacuum systems to sanitize environments without leaving harmful residues.
              </p>
              <div className="space-y-3">
                {[
                  "Certified non-toxic eco cleaning agents",
                  "EPA-approved hospital-grade disinfectants for high-touch points",
                  "High-pressure external wash equipment & safe scaffold rigs",
                  "Dedicated on-site supervisors for every cleaning crew",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-amber-600 text-background font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  Schedule Cleaning Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA SECTION ─── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-surface border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Looking for Reliable <span className="text-gradient-gold">Manpower or Services?</span>
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Connect with our operations team today to discuss your workforce requirements, technical maintenance contracts, or facility cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                Get a Customized Quote
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn About Our Company
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
