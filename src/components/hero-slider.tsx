"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    title: "Reliable Manpower & Labour Supply Solutions",
    description: "Skilled, semi-skilled, and unskilled workforce tailored to your project needs, ensuring efficiency, compliance, and timely delivery.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Your Trusted Workforce & Facility Partner",
    description: "Swift Zone delivers dependable staffing, technical support, and facility management solutions with quality, safety, and efficiency.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Skilled Marine Manpower You Can Trust",
    description: "Supporting the maritime industry with experienced technicians, workshop staff, and marine facility management solutions across the UAE.",
    image: "https://images.unsplash.com/photo-1566576912328-109e6d8c1a2d?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              key={current + "-tag"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              UAE Manpower Solutions
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={current + "-title"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                {slides[current].title.split("<br>").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            <motion.p
              key={current + "-desc"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed"
            >
              {slides[current].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-amber-600 text-background font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group px-8 py-4 rounded-full glass border border-white/10 text-foreground font-semibold text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button onClick={prev} className="p-3 rounded-full glass hover:bg-white/10 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-10 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <button onClick={next} className="p-3 rounded-full glass hover:bg-white/10 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
