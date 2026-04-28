// src/components/CTA.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle, MessageCircle, Star, TrendingUp, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';
import Button from './Button';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
      }, 1000);
    }
  };

  const benefits = [
    { icon: Shield, text: '30-day money-back guarantee' },
    { icon: Clock, text: 'Lifetime access & updates' },
    { icon: TrendingUp, text: 'Proven institutional methodology' },
    { icon: MessageCircle, text: 'Private community support' },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
              <Star className="w-4 h-4 text-primary fill-current" />
              <span className="text-sm font-medium text-primary">
                Limited spots — new cohort opens monthly
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Ready to Trade Like<br />an <span className="text-primary">Institution</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop guessing. Stop losing. Start trading with a proven methodology used by 
              the world's most consistent retail traders.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <benefit.icon className="w-4 h-4 text-primary" />
                <span className="text-xs md:text-sm text-foreground/80">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="shadow-lg shadow-primary/25"
            >
              Join FX Mastery Pro
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={MessageCircle}
              onClick={() => window.open(`https://wa.me/${siteData.whatsappNumber}`, '_blank')}
            >
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
              <p className="text-center text-sm text-foreground/80 mb-4">
                Get weekly market analysis and trading tips straight to your inbox
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button type="submit" variant="primary" size="sm">
                  Subscribe
                </Button>
              </form>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-green-600 dark:text-green-400 mt-3"
                >
                  <CheckCircle className="w-3 h-3 inline mr-1" />
                  Thanks for subscribing! Check your inbox.
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Guarantee Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-6"
          >
            <Shield className="w-3 h-3 inline mr-1" />
            30-day money-back guarantee · No questions asked
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTA;