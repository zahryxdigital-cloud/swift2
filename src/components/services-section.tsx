"use client";

import { motion } from "framer-motion";
import { HardHat, Anchor, Wrench } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Construction Manpower Supply",
    description:
      "Skilled, semi-skilled, and general workers for construction projects. We ensure timely deployment and workforce reliability.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    href: "/services/construction-manpower-supply",
  },
  {
    title: "Marine Repair & Workshop Manpower Supply",
    description:
      "Experienced marine technicians, welders, fitters, and workshop staff for ship repair and maritime operations.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1566576912328-109e6d8c1a2d?q=80&w=2070&auto=format&fit=crop",
    href: "/services/marine-repair-and-workshop-manpower-supply",
  },
  {
    title: "Maintenance Staffing Solutions",
    description:
      "Professional maintenance crews for facility upkeep, HVAC, electrical, plumbing, and general building maintenance.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
    href: "/services/maintenance-company-staffing-solutions",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            Professional Manpower Supply &<br />
            <span className="text-gradient-gold">Workforce Solutions</span>
          </h2>
          <p className="mt-4 text-muted text-sm leading-relaxed">
            Swift Zone provides reliable manpower solutions for construction, marine repair, workshops, and maintenance businesses across the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link href={service.href} className="group block">
                <div className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 h-full">
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
