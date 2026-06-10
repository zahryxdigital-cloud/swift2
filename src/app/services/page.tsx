"use client";

import { motion } from "framer-motion";
import { HardHat, Anchor, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Construction Manpower Supply",
    description:
      "Al Areeq provides skilled, semi-skilled, and general workers for construction projects of all sizes. Our workforce is trained, experienced, and ready to deploy.",
    icon: HardHat,
    image: "/construction-manpower.png",
    href: "/services/construction-manpower-supply",
    features: [
      "General laborers for construction sites",
      "Skilled trades: carpenters, masons, electricians, plumbers",
      "Equipment operators and drivers",
      "Safety-compliant workforce with PPE",
      "Short-term and long-term deployment",
    ],
  },
  {
    title: "Marine Repair & Workshop Manpower Supply",
    description:
      "Supporting the maritime industry with experienced marine technicians, workshop staff, and skilled trades for ship repair, maintenance, and fabrication work.",
    icon: Anchor,
    image: "/marine-repair.png",
    href: "/services/marine-repair-and-workshop-manpower-supply",
    features: [
      "Marine fitters and welders",
      "Ship repair technicians",
      "Mechanical and electrical workshop staff",
      "Painting, blasting, and fabrication specialists",
      "Qualified and experienced marine workforce",
    ],
  },
  {
    title: "Maintenance Staffing Solutions",
    description:
      "Professional maintenance crews for facility upkeep, HVAC, electrical, plumbing, and general building maintenance. We keep your operations running smoothly.",
    icon: Wrench,
    image: "/maintenance-staff.png",
    href: "/services/maintenance-company-staffing-solutions",
    features: [
      "HVAC technicians and maintenance engineers",
      "Electrical and plumbing maintenance staff",
      "Building and facility maintenance crews",
      "Preventive maintenance specialists",
      "24/7 emergency maintenance support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Services</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              Professional Manpower Supply &<br />
              <span className="text-gradient-gold">Workforce Solutions</span>
            </h1>
            <p className="mt-6 text-muted text-sm leading-relaxed">
              Al Areeq provides comprehensive manpower solutions tailored for construction, marine, workshop, and
              maintenance businesses across the UAE.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="aspect-[4/3] bg-cover bg-center rounded-2xl relative overflow-hidden group"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 text-primary font-medium text-sm hover:bg-primary/10 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
