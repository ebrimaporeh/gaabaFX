// src/components/Courses.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Clock, Users, MessageCircle, Award, Shield, Zap } from 'lucide-react';
import { siteData } from '../data/siteData';
import Button from './Button';

const Courses = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const courses = siteData.courses;

  const getIcon = (feature) => {
    if (feature.toLowerCase().includes('live')) return <MessageCircle className="w-3.5 h-3.5 text-primary" />;
    if (feature.toLowerCase().includes('session') || feature.toLowerCase().includes('mentorship')) return <Users className="w-3.5 h-3.5 text-primary" />;
    if (feature.toLowerCase().includes('hour')) return <Clock className="w-3.5 h-3.5 text-primary" />;
    if (feature.toLowerCase().includes('guarantee')) return <Shield className="w-3.5 h-3.5 text-primary" />;
    if (feature.toLowerCase().includes('access')) return <Zap className="w-3.5 h-3.5 text-primary" />;
    return <Check className="w-3.5 h-3.5 text-primary" />;
  };

  return (
    <section className="py-20 bg-foreground" id="courses">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Education
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Choose Your <span className="text-primary">Level</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              From complete beginner to elite trader. Every programme is built around the same 
              institutional methodology I use daily.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="default"
              onClick={() => window.location.href = '/contact'}
              className="border-white/20 text-white hover:bg-white hover:text-foreground"
            >
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-2xl transition-all duration-300 ${
                course.featured
                  ? 'bg-gradient-to-br from-primary/20 via-white/5 to-transparent border-2 border-primary/40 shadow-lg shadow-primary/10'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              } hover:transform hover:-translate-y-2`}
            >
              {/* Featured Badge */}
              {course.featured && (
                <div className="absolute -top-3 left-6">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-primary rounded-full shadow-lg">
                    <Star className="w-3 h-3 text-primary-foreground fill-current" />
                    <span className="text-xs font-bold text-primary-foreground">{course.tag}</span>
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Tag */}
                {!course.featured && (
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    {course.tag}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-white">
                    ${course.price}
                  </span>
                  {course.period && (
                    <span className="text-gray-400 text-sm ml-1">/{course.period}</span>
                  )}
                  {!course.period && (
                    <span className="text-gray-400 text-sm ml-1">one-time</span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {course.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2.5"
                    >
                      {getIcon(feature)}
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  animate={hoveredCard === course.id ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {course.featured ? (
                    <Button
                      variant="primary"
                      size="default"
                      icon={ArrowRight}
                      iconPosition="right"
                      onClick={() => window.location.href = '/contact'}
                      className="w-full justify-center shadow-lg shadow-primary/25"
                    >
                      Enroll Now
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="default"
                      onClick={() => window.location.href = '/contact'}
                      className="w-full justify-center border-white/20 text-white hover:bg-white hover:text-foreground"
                    >
                      {course.title === '1-on-1 Mentorship' ? 'Apply Now' : 'Enroll Now'}
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Award className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Lifetime access & updates</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <MessageCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Private community access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;