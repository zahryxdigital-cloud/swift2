"use client";

import { motion } from "framer-motion";
import { Shield, Users, Clock, Target, Handshake, Zap } from "lucide-react";

const whyItems = [
  {
    icon: Shield,
    title: "Reliable Workforce Supply",
    description: "We provide manpower solutions businesses can depend on for consistent operational support.",
  },
  {
    icon: Target,
    title: "Industry Experience",
    description: "We understand workforce demands within construction, marine, and maintenance sectors.",
  },
  {
    icon: Clock,
    title: "Quick Response & Deployment",
    description: "Our team ensures fast manpower coordination for urgent project requirements.",
  },
  {
    icon: Users,
    title: "Flexible Staffing Solutions",
    description: "We provide manpower support for temporary, contract, and long-term requirements.",
  },
  {
    icon: Handshake,
    title: "Client-Focused Service",
    description: "We prioritize professionalism, communication, and operational efficiency.",
  },
  {
    icon: Zap,
    title: "Safety & Compliance",
    description: "All our workforce is trained, certified, and compliant with UAE labor regulations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            Why Choose{" "}
            <span className="text-gradient-gold">Al Areeq</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-amber-600/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
