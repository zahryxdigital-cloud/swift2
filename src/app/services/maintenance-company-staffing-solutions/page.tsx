"use client";

import { motion } from "framer-motion";
import { Wrench, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MaintenanceStaffingPage() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Maintenance Company<br />
              <span className="text-gradient-gold">Staffing Solutions</span>
            </h1>
            <p className="text-muted text-sm leading-relaxed mb-8">
              Professional maintenance crews for facility upkeep, HVAC, electrical, plumbing, and general building
              maintenance. We keep your operations running smoothly across the UAE.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-amber-600 text-background font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all group"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="aspect-[4/3] bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border border-white/5 max-w-3xl"
        >
          <h2 className="text-xl font-bold mb-6">What We Provide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "HVAC technicians and maintenance engineers",
              "Electrical and plumbing maintenance staff",
              "Building and facility maintenance crews",
              "Preventive maintenance specialists",
              "24/7 emergency maintenance support",
              "Certified and experienced workforce",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
