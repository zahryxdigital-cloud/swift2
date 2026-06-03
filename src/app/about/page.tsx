"use client";

import { motion } from "framer-motion";
import { Play, Target, Eye, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">About Us</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              Delivering Reliable Facility & Manpower{" "}
              <span className="text-gradient-gold">Services Across the UAE</span>
            </h1>
            <p className="mt-6 text-muted text-sm leading-relaxed">
              Swift Zone Facility Management Services is a trusted provider of professional facility management, manpower
              supply, maintenance, and technical support services across the UAE.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div
                  className="aspect-[4/3] bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2070&auto=format&fit=crop)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Who We Are</span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold">
                About Swift Zone Facilities <span className="text-gradient-gold">Management Services</span>
              </h2>
              <p className="mt-6 text-muted text-sm leading-relaxed">
                Swift Zone Facilities Management Services is a trusted manpower supply company in the UAE, serving
                construction companies, marine repair businesses, workshops, and maintenance firms with reliable
                workforce solutions.
              </p>
              <p className="mt-4 text-muted text-sm leading-relaxed">
                We are committed to helping businesses operate efficiently by supplying skilled, semi-skilled, and general
                workers tailored to project and operational requirements.
              </p>
              <p className="mt-4 text-muted text-sm leading-relaxed">
                Our focus is on professionalism, timely deployment, workforce reliability, and long-term client partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Message from MD</span>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold">Managing Director&apos;s Message</h2>
                <div className="mt-6 space-y-4 text-muted text-sm leading-relaxed">
                  <p>Welcome to Swift Zone Facility Management Services.</p>
                  <p>
                    At Swift Zone, we are committed to delivering reliable, efficient, and high-quality facility management
                    and manpower solutions across the UAE. Our goal is to support businesses with professional services that
                    ensure operational excellence, safety, and customer satisfaction.
                  </p>
                  <p>
                    With a dedicated team and a strong focus on professionalism, integrity, and innovation, we continuously
                    strive to exceed client expectations in every project we undertake.
                  </p>
                  <p>
                    We value the trust our clients place in us and believe that long-term relationships are built through
                    quality service, transparency, and consistent performance.
                  </p>
                </div>
                <div className="mt-6 border-l-2 border-primary pl-4">
                  <p className="font-semibold">Mohammed Jahadul Alam</p>
                  <p className="text-xs text-muted">Managing Director, Swift Zone Facility Management Services</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div
                className="aspect-[3/4] bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521791136064-7986c2920f36?q=80&w=2069&auto=format&fit=crop)",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Core Values</span>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Reliability", desc: "We deliver dependable manpower support businesses can trust." },
                  { title: "Professionalism", desc: "We maintain high standards in workforce management and client service." },
                  { title: "Commitment", desc: "We are dedicated to supporting our clients' operational success." },
                  { title: "Efficiency", desc: "We focus on timely manpower deployment and smooth workforce coordination." },
                ].map((v) => (
                  <div key={v.title} className="glass rounded-xl p-5 border border-white/5">
                    <h4 className="font-semibold text-primary text-sm">{v.title}</h4>
                    <p className="text-sm text-muted mt-1">{v.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Mission</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                To provide reliable, efficient, and professional manpower solutions that support business growth and
                operational excellence across construction and marine industries.
              </p>
              <div className="mt-12 flex items-center gap-3 mb-6">
                <Eye className="w-5 h-5 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Vision</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                To become one of the most trusted manpower supply partners in the UAE by delivering quality workforce
                solutions with integrity and commitment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
