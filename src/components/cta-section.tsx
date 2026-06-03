"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to Build Your{" "}
            <span className="text-gradient-gold">Workforce?</span>
          </h2>
          <p className="mt-6 text-muted max-w-2xl mx-auto text-sm leading-relaxed">
            Get in touch with Swift Zone Facilities Management Services for reliable manpower supply and professional
            workforce solutions tailored to your construction, marine, workshop, and maintenance requirements across the
            UAE.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-amber-600 text-background font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="group px-8 py-4 rounded-full glass border border-white/10 text-foreground font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
