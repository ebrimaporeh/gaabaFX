// src/components/AboutPreview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Award, BarChart3, ArrowRight } from 'lucide-react';
import Button from './Button';
import { siteData } from '../data/siteData';

const AboutPreview = () => {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'SMC Methodology',
      description: 'Institutional order flow, liquidity sweeps, and market structure analysis.'
    },
    {
      icon: Shield,
      title: 'Risk First Mindset',
      description: 'Protecting capital is the first rule. Everything else follows from there.'
    },
    {
      icon: Award,
      title: 'Verified Results',
      description: 'Every trade journaled and shared. No cherry-picking, complete transparency.'
    },
    {
      icon: BarChart3,
      title: 'Consistent Process',
      description: 'A repeatable edge — not guesswork, not indicators, just pure price action.'
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/gabba-hero-5.jpg" 
                alt={siteData.traderName}
                className="w-full h-auto object-cover"
              />
              
              {/* Quote Card Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-lg rounded-xl p-4 border border-primary/20 shadow-lg"
              >
                <div className="text-center">
                  <p className="text-sm font-serif italic text-foreground mb-2">
                    "The market doesn't reward emotions. It rewards preparation and discipline."
                  </p>
                  <p className="text-md font-bold text-primary uppercase tracking-wider">
                    — {siteData.traderName}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  About {siteData.traderName}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                A Decade of <span className="text-primary">Real</span> Market Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I started trading in 2014 with $500 and a library of PDFs. After years of failure, 
                losses, and rebuilding, I developed a methodology rooted in institutional behaviour — 
                the way banks and hedge funds actually move price. Today I trade full-time and share 
                exactly what works.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => window.location.href = '/about'}
            >
              Learn More About {siteData.traderName}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;