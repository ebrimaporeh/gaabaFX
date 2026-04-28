// src/pages/About.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
} from "lucide-react";
import { siteData } from "../data/siteData";
import WhatsAppButton from "../components/WhatsAppButton";

const About = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  const stats = [
    {
      icon: Users,
      value: `${siteData.studentsTrained}+`,
      label: "Students Trained",
    },
    {
      icon: TrendingUp,
      value: `${siteData.successRate}%`,
      label: "Success Rate",
    },
    {
      icon: Award,
      value: `${siteData.yearsOfExperience}+`,
      label: "Years Experience",
    },
    {
      icon: BarChart3,
      value: `$${siteData.studentReturns}`,
      label: "Student Returns",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Every trade journaled and shared. No cherry-picking, no fake results.",
    },
    {
      icon: Clock,
      title: "Consistency",
      description:
        "A repeatable edge — not guesswork, not indicators. Same methodology every day.",
    },
    {
      icon: TrendingUp,
      title: "Long-term Focus",
      description:
        "Building sustainable wealth, not chasing quick riches or gambling.",
    },
  ];

  return (
    <div className="py-10 md:pt-36">
      {/* Hero Section - Simple fade in */}
      <section className="bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              About {siteData.traderName}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              A Decade of <span className="text-primary">Real</span> Market
              Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I started trading with $500 and a library of PDFs. After years of
              failure, losses, and rebuilding, I developed a methodology rooted
              in institutional behaviour — the way banks and hedge funds
              actually move price.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Subtle fade in */}
      <section className="py-16 border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section - Redesigned */}
      <section className="py-16 md:py-14 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Methodology Content */}
            <div className="reveal space-y-8">
              {/* Section Header */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    My Methodology
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  Trade Like an{" "}
                  <span className="text-primary">Institution</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Most retail traders lose because they're taught to trade like
                  retail. I teach institutional concepts that actually work.
                </p>
              </div>

              {/* Methodology Highlights */}
              <div className="space-y-4">
                {[
                  {
                    title: "Smart Money Concepts (SMC)",
                    description:
                      "Institutional order flow analysis - understand how banks and hedge funds move price",
                  },
                  {
                    title: "Advanced Order Flow",
                    description:
                      "Order blocks, fair value gaps, and liquidity sweeps - the building blocks of institutional trading",
                  },
                  {
                    title: "Risk-First Mindset",
                    description:
                      "Protect capital above all else with professional risk management strategies",
                  },
                  {
                    title: "Complete Transparency",
                    description:
                      "Verified, journaled results with no cherry-picking - see exactly what works",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-primary">✓</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Trusted by 3,400+ traders
                  </p>
                  <p className="text-xs text-muted-foreground">
                    87% success rate after 90 days
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Philosophy Card */}
            <div className="reveal">
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl opacity-50"></div>

                {/* Main Card */}
                <div className="relative bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
                  {/* Decorative Top Bar */}
                  <div className="h-2 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Quote Section */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <TrendingUp className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                        My Trading Philosophy
                      </h3>
                      <div className="relative">
                        <svg
                          className="w-8 h-8 text-primary/30 absolute -top-2 -left-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-muted-foreground italic px-4 py-2">
                          "The market doesn't reward emotions. It rewards
                          preparation and discipline."
                        </p>
                        <svg
                          className="w-8 h-8 text-primary/30 absolute -bottom-2 -right-2 transform rotate-180"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Philosophy Values */}
                    <div className="space-y-5">
                      {values.map((value, index) => (
                        <div key={value.title} className="flex gap-4 group">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                            <value.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {value.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <button
                        onClick={() =>
                          document
                            .getElementById("courses")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="w-full group flex items-center justify-between text-left"
                      >
                        <span className="text-sm font-medium text-primary">
                          Learn more about my approach
                        </span>
                        <svg
                          className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default About;
