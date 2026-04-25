// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Play } from 'lucide-react';
import { siteData } from '../data/siteData';
import Button from './Button';

const Hero = () => {
  const [tickerPrices, setTickerPrices] = useState({
    'EUR/USD': { price: 1.0842, change: 0.23, direction: 'up' },
    'GBP/USD': { price: 1.2718, change: 0.11, direction: 'down' },
    'XAU/USD': { price: 2308, change: 0.54, direction: 'up' }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPrices(prev => {
        const newPrices = { ...prev };
        Object.keys(newPrices).forEach(key => {
          const delta = (Math.random() - 0.48) * (key === 'XAU/USD' ? 0.8 : 0.0003);
          const newPrice = parseFloat((newPrices[key].price + delta).toFixed(key === 'XAU/USD' ? 0 : 4));
          const changePercent = ((delta / newPrices[key].price) * 100).toFixed(2);
          newPrices[key] = {
            price: newPrice,
            change: Math.abs(parseFloat(changePercent)),
            direction: delta >= 0 ? 'up' : 'down'
          };
        });
        return newPrices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: `${siteData.studentsTrained}+`, label: 'Students Trained' },
    { value: `${siteData.successRate}%`, label: 'Success Rate' },
    { value: `$${siteData.studentReturns}`, label: 'Student Returns' }
  ];

  return (
    <section className="relative min-h-screen pt-[76px]  mb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-76px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-12 lg:py-20"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Live since 2014 · {siteData.yearsOfExperience}+ years in markets
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Trade the Markets{' '}
              <span className="relative inline-block">
                Like an
                <span className="text-primary absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full" />
              </span>
              <br />
              <span className="text-primary">Institution</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I'm {siteData.traderName} — professional forex trader, market analyst, and educator. 
              I teach serious traders how to think clearly, manage risk intelligently, and build consistent profit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Programme
              </Button>
              <Button
                variant="ghost"
                size="lg"
                icon={Play}
                onClick={() => window.open('https://youtube.com', '_blank')}
              >
                Watch Free Intro
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Trader Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:min-h-[300px]"
          >
            {/* Main Trader Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/gabba-hero-4.jpg" 
                alt="Gabba - Professional Forex Trader"
                className="w-full lg:h-[600px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge - Win Rate */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hidden md:block absolute top-8 -left-4 md:left-0 bg-card rounded-xl p-3 shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Monthly Win Rate</div>
                  <div className="text-lg font-bold text-foreground">78.4% this month</div>
                </div>
              </div>
            </motion.div>

            {/* Live Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-foreground/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-border min-w-[280px]"
            >
              <div className="flex gap-4">
                {Object.entries(tickerPrices).map(([pair, data]) => (
                  <div key={pair} className="text-center px-2">
                    <div className="text-xs text-muted-foreground font-medium">{pair}</div>
                    <div className="text-sm font-bold text-background">
                      {pair === 'XAU/USD' ? data.price.toLocaleString() : data.price.toFixed(4)}
                    </div>
                    <div className={`text-xs font-medium ${data.direction === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {data.direction === 'up' ? '▲' : '▼'} {data.change}%
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;