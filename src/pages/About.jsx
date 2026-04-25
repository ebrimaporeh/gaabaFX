// src/pages/About.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield, Clock, BarChart3 } from 'lucide-react';
import { siteData } from '../data/siteData';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  const stats = [
    { icon: Users, value: `${siteData.studentsTrained}+`, label: 'Students Trained' },
    { icon: TrendingUp, value: `${siteData.successRate}%`, label: 'Success Rate' },
    { icon: Award, value: `${siteData.yearsOfExperience}+`, label: 'Years Experience' },
    { icon: BarChart3, value: `$${siteData.studentReturns}`, label: 'Student Returns' },
  ];

  const values = [
    { icon: Shield, title: 'Transparency', description: 'Every trade journaled and shared. No cherry-picking, no fake results.' },
    { icon: Clock, title: 'Consistency', description: 'A repeatable edge — not guesswork, not indicators. Same methodology every day.' },
    { icon: TrendingUp, title: 'Long-term Focus', description: 'Building sustainable wealth, not chasing quick riches or gambling.' },
  ];

  return (
    <div className="pt-[76px] md:pt-[76px]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              About {siteData.traderName}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              A Decade of <span className="text-primary">Real</span> Market Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I started trading with $500 and a library of PDFs. After years of failure, losses, and rebuilding, 
              I developed a methodology rooted in institutional behaviour — the way banks and hedge funds actually move price.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="reveal"
            >
              <div className="section-tag">My Methodology</div>
              <h2 className="section-title">
                Trade Like an <em className="text-primary">Institution</em>
              </h2>
              <p className="section-body mb-6">
                Most retail traders lose because they're taught to trade like retail. 
                I teach institutional concepts that actually work.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Smart Money Concepts (SMC) - Institutional order flow analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Order blocks, fair value gaps, and liquidity sweeps</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Risk-first mindset - protect capital above all else</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Verified, journaled results - complete transparency</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="reveal"
            >
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">My Trading Philosophy</h3>
                  <p className="text-muted-foreground mt-2">
                    "The market doesn't reward emotions. It rewards preparation and discipline."
                  </p>
                </div>
                <div className="space-y-4">
                  {values.map((value) => (
                    <div key={value.title} className="flex gap-3">
                      <value.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default About;