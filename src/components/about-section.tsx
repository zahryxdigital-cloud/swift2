"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/about-section.png)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-primary fill-primary pl-0.5" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-600/10 border border-primary/20 backdrop-blur-sm flex items-center justify-center hidden lg:flex">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-[10px] text-muted uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Al Areeq Technical Services
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
              Your Trusted Workforce Partner<br />
              <span className="text-gradient-gold">in the UAE</span>
            </h2>
            <p className="mt-6 text-muted text-sm leading-relaxed">
              Al Areeq Technical Services specializes in providing dependable manpower solutions tailored
              for the construction, marine, workshop, and maintenance sectors. We help businesses meet operational
              demands with skilled workers, efficient deployment, and reliable workforce management.
            </p>
            <p className="mt-4 text-muted text-sm leading-relaxed">
              Whether you require manpower for short-term projects or long-term operations, our team ensures the right
              workforce is supplied with professionalism, commitment, and industry understanding.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="/Swift-Zone-Facility-Management-Profile.pdf"
                target="_blank"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-amber-600 text-background font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Download Company Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
