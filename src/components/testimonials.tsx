"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mohammed Ibrahim",
    role: "Project Manager",
    quote:
      "Swift Zone has been a reliable partner for our operations. Their manpower supply team is professional, punctual, and highly skilled. From maintenance support to marine field staffing, their service quality has always exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Ahmed Farook",
    role: "Managing Partner",
    quote:
      "We are extremely satisfied with the facility management and technical manpower services provided by Swift Zone. Their team responds quickly, maintains high standards, and ensures smooth day-to-day operations for our company.",
    rating: 5,
  },
  {
    name: "Saeed Al Mazroui",
    role: "Operations Director",
    quote:
      "Swift Zone's workforce solutions have been instrumental in helping us meet our project deadlines. Their ability to supply skilled workers on short notice is truly impressive. Highly recommended for construction manpower needs.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            What Our{" "}
            <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-500 relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="border-t border-white/5 pt-4">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
