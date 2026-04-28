// src/components/Marquee.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Users, Shield, Zap, Globe, LineChart, Target, BookOpen } from 'lucide-react';

const Marquee = () => {
  const [hovered, setHovered] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const tooltipTimeoutRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const items = [
    { id: 1, title: 'Smart Money Concepts', detail: 'Learn how institutional traders move price, identify accumulation and distribution phases, and follow the smart money.', icon: TrendingUp, url: '/courses#smc' },
    { id: 2, title: 'Order Block Trading', detail: 'Master the art of identifying institutional order blocks where large players enter and exit positions.', icon: Target, url: '/courses#order-blocks' },
    { id: 3, title: 'Fair Value Gap Strategy', detail: 'Trade FVGs with precision - understand how price reacts to inefficiencies and fair value areas.', icon: Zap, url: '/courses#fvg' },
    { id: 4, title: 'Liquidity & Structure', detail: 'Identify liquidity pools, understand market structure shifts, and trade with the trend.', icon: LineChart, url: '/courses#liquidity' },
    { id: 5, title: 'Risk Management', detail: 'Protect your capital with professional risk management strategies - the key to long-term success.', icon: Shield, url: '/courses#risk' },
    { id: 6, title: '1-on-1 Mentorship', detail: 'Get personalized coaching, trade reviews, and direct access to me for 8 weeks.', icon: Users, url: '/contact#mentorship' },
    { id: 7, title: 'Live Trade Alerts', detail: 'Daily trade setups, market analysis, and real-time alerts sent directly to your phone.', icon: Globe, url: '/courses#alerts' },
    { id: 8, title: 'Supply & Demand', detail: 'Master supply and demand zones - the foundation of all price movement.', icon: Target, url: '/courses#supply-demand' },
    { id: 9, title: 'Price Action Mastery', detail: 'Read the market like a pro with pure price action - no indicators needed.', icon: BookOpen, url: '/courses#price-action' },
    { id: 10, title: 'Fibonacci Retracements', detail: 'Use Fibonacci tools effectively to identify key reversal and continuation levels.', icon: LineChart, url: '/courses#fibonacci' }
  ];

  const marqueeItems = [...items, ...items];

  const handleItemClick = (item, event) => {
    event.stopPropagation();

    if (!isMobile) {
      const rect = event.currentTarget.getBoundingClientRect();

      setTooltipPosition({
        top: rect.top,
        left: rect.left + rect.width / 2
      });
    }

    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }

    if (activeTooltip?.id === item.id) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(item);
      tooltipTimeoutRef.current = setTimeout(() => {
        setActiveTooltip(null);
      }, 5000);
    }
  };

  const closeTooltip = () => {
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    setActiveTooltip(null);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        activeTooltip &&
        !e.target.closest('.marquee-item') &&
        !e.target.closest('.tooltip-card')
      ) {
        closeTooltip();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeTooltip]);

  return (
    <>
      {/* Marquee */}
      <div className="bg-background py-4 overflow-hidden border-y border-border relative">
        <div className="relative flex overflow-x-hidden">
          <motion.div
            animate={!hovered ? { x: [0, '-50%'] } : {}}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {marqueeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="marquee-item flex items-center gap-3 px-6 border-r border-border/50 cursor-pointer hover:bg-primary/5"
                  onClick={(e) => handleItemClick(item, e)}
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Tooltip / Modal */}
      <AnimatePresence>
        {activeTooltip && (
          <>
            {/* Overlay (only on mobile) */}
            {isMobile && (
              <motion.div
                className="fixed inset-0 bg-black/40 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeTooltip}
              />
            )}

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`tooltip-card fixed z-50 ${
                isMobile
                  ? 'inset-0 flex items-center justify-center px-4'
                  : ''
              }`}
              style={
                !isMobile
                  ? {
                      top: tooltipPosition.top - 10,
                      left: tooltipPosition.left,
                      transform: 'translate(-50%, -100%)'
                    }
                  : {}
              }
            >
              <div className="relative bg-card rounded-2xl shadow-2xl border border-primary/20 w-full max-w-[380px] overflow-hidden">

                {/* Close button (mobile) */}
                {isMobile && (
                  <button
                    onClick={closeTooltip}
                    className="absolute top-3 right-3 p-2 rounded-full bg-background/80"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <activeTooltip.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{activeTooltip.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {activeTooltip.detail}
                  </p>
                </div>

                {/* Arrow (desktop only) */}
                {!isMobile && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card rotate-45 border-r border-b border-primary/20"></div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Marquee;