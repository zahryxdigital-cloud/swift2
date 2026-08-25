"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  Plus,
  X,
  CheckCircle2,
  MessageSquare,
  User,
  Building,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  date?: string;
  isUserSubmitted?: boolean;
  avatarInitials?: string;
}

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mohammed Ibrahim",
    role: "Project Manager, Al Futtaim Construction",
    quote:
      "Al Areeq has been a reliable partner for our operations. Their manpower supply team is professional, punctual, and highly skilled. From maintenance support to marine field staffing, their service quality has always exceeded our expectations.",
    rating: 5,
    date: "August 2026",
    avatarInitials: "MI",
  },
  {
    id: "2",
    name: "Ahmed Farook",
    role: "Managing Partner, Gulf Marine Services",
    quote:
      "We are extremely satisfied with the facility management and technical manpower services provided by Al Areeq. Their team responds quickly, maintains high standards, and ensures smooth day-to-day operations for our company.",
    rating: 5,
    date: "July 2026",
    avatarInitials: "AF",
  },
  {
    id: "3",
    name: "Saeed Al Mazroui",
    role: "Operations Director, Apex Infrastructure",
    quote:
      "Al Areeq's workforce solutions have been instrumental in helping us meet our project deadlines. Their ability to supply skilled workers on short notice is truly impressive. Highly recommended for construction manpower needs.",
    rating: 5,
    date: "June 2026",
    avatarInitials: "SM",
  },
  {
    id: "4",
    name: "Tariq Rashid",
    role: "Technical Lead, Oasis Marine Engineering",
    quote:
      "The specialized technical crews provided for our shipyard project were exceptional. Safety compliant, fully certified, and dedicated to delivering top-tier maintenance standards.",
    rating: 5,
    date: "May 2026",
    avatarInitials: "TR",
  },
];

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState<number>(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; quote?: string }>({});

  // Load user reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("alareeq_testimonials");
      if (saved) {
        const parsed: Testimonial[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTestimonialsList([...parsed, ...INITIAL_TESTIMONIALS]);
        }
      }
    } catch (e) {
      console.error("Failed to load stored testimonials:", e);
    }
  }, []);

  const totalReviews = testimonialsList.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying || isModalOpen) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isModalOpen, nextSlide]);

  const handleRatingHover = (starIndex: number) => setHoveredRating(starIndex);
  const handleRatingLeave = () => setHoveredRating(null);
  const handleRatingClick = (starIndex: number) => setRating(starIndex);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; quote?: string } = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!quote.trim()) newErrors.quote = "Review text is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});

    setTimeout(() => {
      const initials = name
        .trim()
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);

      const newReview: Testimonial = {
        id: `user-${Date.now()}`,
        name: name.trim(),
        role: role.trim() || "Verified Client",
        quote: quote.trim(),
        rating,
        date: "Just now",
        isUserSubmitted: true,
        avatarInitials: initials || "VC",
      };

      const updatedList = [newReview, ...testimonialsList];
      setTestimonialsList(updatedList);

      // Save user reviews to localStorage
      try {
        const userSubmittedOnly = updatedList.filter((t) => t.isUserSubmitted);
        localStorage.setItem("alareeq_testimonials", JSON.stringify(userSubmittedOnly));
      } catch (err) {
        console.error("Could not save review to localStorage:", err);
      }

      setSubmitting(false);
      setSuccessMessage(true);
      setCurrentIndex(0); // jump to new review in slider

      // Reset form after short delay
      setTimeout(() => {
        setName("");
        setRole("");
        setQuote("");
        setRating(5);
        setSuccessMessage(false);
        setIsModalOpen(false);
      }, 1500);
    }, 600);
  };

  const activeRating = hoveredRating !== null ? hoveredRating : rating;
  const ratingLabels: Record<number, string> = {
    1: "1 Star - Disappointed",
    2: "2 Stars - Fair",
    3: "3 Stars - Good",
    4: "4 Stars - Very Good",
    5: "5 Stars - Outstanding",
  };

  const averageRating = (
    testimonialsList.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
  ).toFixed(1);

  // Helper to compute visible cards for desktop (3), tablet (2), mobile (1)
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < Math.min(3, totalReviews); i++) {
      const idx = (currentIndex + i) % totalReviews;
      items.push({ item: testimonialsList[idx], displayOffset: i });
    }
    return items;
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Control Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left max-w-2xl"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Client Reviews & Testimonials
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">{averageRating} out of 5</span>
              <span className="text-xs text-muted">({totalReviews} verified reviews)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-amber-500 text-background font-semibold text-xs sm:text-sm hover:opacity-95 shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              Write a Review
            </button>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 glass">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                title={isAutoPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
                className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4 text-primary" /> : <Play className="w-4 h-4" />}
              </button>
              <div className="w-px h-5 bg-white/10" />
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Professional Aesthetic Card Slider Window */}
        <div className="relative overflow-hidden min-h-[340px] px-1 py-4">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {getVisibleItems().map(({ item, displayOffset }) => (
                <div
                  key={`${item.id}-${displayOffset}`}
                  className={`glass rounded-3xl p-8 border transition-all duration-500 relative flex flex-col justify-between group ${
                    item.isUserSubmitted
                      ? "border-primary/40 bg-gradient-to-b from-primary/10 via-surface/80 to-surface shadow-2xl shadow-primary/10"
                      : "border-white/10 hover:border-primary/30 bg-surface/60 hover:bg-surface/90"
                  }`}
                >
                  {/* Subtle Background Watermark Quote */}
                  <Quote className="w-20 h-20 text-primary/10 absolute top-4 right-6 pointer-events-none group-hover:scale-110 group-hover:text-primary/15 transition-all duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`w-4 h-4 ${
                              starIdx < item.rating ? "fill-primary text-primary" : "text-foreground/20 fill-none"
                            }`}
                          />
                        ))}
                      </div>

                      {item.isUserSubmitted ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/15 border border-primary/30 px-2.5 py-1 rounded-full">
                          <Sparkles className="w-3 h-3 animate-pulse" /> Live Review
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-muted tracking-wider bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                          Verified Client
                        </span>
                      )}
                    </div>

                    <p className="text-sm sm:text-base text-foreground/90 leading-relaxed mb-6 italic relative z-10 font-normal">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Avatar Initials Badge */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-amber-600 p-[1.5px] shrink-0">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold text-xs text-primary">
                          {item.avatarInitials || item.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted line-clamp-1">{item.role}</p>
                      </div>
                    </div>

                    {item.date && (
                      <span className="text-[10px] text-muted tracking-wide shrink-0">{item.date}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsList.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setDirection(dotIdx > currentIndex ? 1 : -1);
                setCurrentIndex(dotIdx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? "w-8 bg-gradient-to-r from-primary to-amber-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Modal for Writing Review */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl z-10 my-8 overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Share Your Feedback</h3>
                    <p className="text-xs text-muted mt-0.5">Your rating will be published instantly</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {successMessage ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Review Submitted Live!</h4>
                    <p className="text-sm text-muted max-w-xs">
                      Thank you! Your testimonial has been added to our homepage feed.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                        Overall Rating
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1 bg-white/5 p-2.5 rounded-xl border border-white/5">
                          {[1, 2, 3, 4, 5].map((starVal) => (
                            <button
                              key={starVal}
                              type="button"
                              onMouseEnter={() => handleRatingHover(starVal)}
                              onMouseLeave={handleRatingLeave}
                              onClick={() => handleRatingClick(starVal)}
                              className="p-1 focus:outline-none transition-transform hover:scale-125"
                            >
                              <Star
                                className={`w-6 h-6 transition-colors ${
                                  starVal <= activeRating
                                    ? "fill-primary text-primary"
                                    : "text-foreground/30 fill-none"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-primary px-2">
                          {ratingLabels[activeRating]}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Salim Al Hashmi"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:border-primary focus:outline-none transition-all placeholder:text-muted/50"
                        />
                      </div>
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Role & Company (Optional)
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="e.g. Project Manager, Al Nahda Marine"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:border-primary focus:outline-none transition-all placeholder:text-muted/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                        Your Review *
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
                        <textarea
                          rows={3}
                          value={quote}
                          onChange={(e) => setQuote(e.target.value)}
                          placeholder="Share your experience working with Al Areeq Technical Services..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:border-primary focus:outline-none transition-all placeholder:text-muted/50 resize-none"
                        />
                      </div>
                      {errors.quote && <p className="text-xs text-red-400 mt-1">{errors.quote}</p>}
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-5 py-2.5 rounded-full text-xs font-semibold text-muted hover:text-foreground hover:bg-white/5 transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-amber-500 text-background font-bold text-xs hover:opacity-95 shadow-md shadow-primary/20 transition-all disabled:opacity-50"
                      >
                        {submitting ? (
                          <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            Post Live Review
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
