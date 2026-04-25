// src/components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users } from 'lucide-react';
import { siteData } from '../data/siteData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonials = siteData.testimonials;

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // Desktop view - show 3 cards, mobile show 1
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const visibleCards = isMobile ? 1 : 3;

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], originalIndex: index });
    }
    return result;
  };

  return (
    <section className="py-20 bg-background" id="results">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Student Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Real People, <span className="text-primary">Real Returns</span>
          </h2>
          <p className="text-muted-foreground">
            Hear from students who transformed their trading journey
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 hidden md:flex w-10 h-10 bg-card border border-border rounded-full items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 hidden md:flex w-10 h-10 bg-card border border-border rounded-full items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getVisibleTestimonials().map((testimonial, idx) => (
                  <motion.div
                    key={`${testimonial.id}-${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-foreground/80 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.location} · {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xl font-bold text-primary dark:text-green-400">
                            {testimonial.profit}
                          </div>
                          <div className="text-xs text-muted-foreground">Profit</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-foreground">
                            {testimonial.accountSize}
                          </div>
                          <div className="text-xs text-muted-foreground">Account size</div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-primary/70">
                        {testimonial.period} of trading
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">3,400+</div>
            <div className="text-xs text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">87%</div>
            <div className="text-xs text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">$2.1M+</div>
            <div className="text-xs text-muted-foreground">Student Profits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">4.9</div>
            <div className="text-xs text-muted-foreground">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;