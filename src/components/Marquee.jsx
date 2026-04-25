// src/components/Marquee.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const items = [
    'Institutional Smart Money Concepts',
    'Order Block Trading',
    'Fair Value Gap Strategy',
    'Liquidity & Market Structure',
    'Risk Management Mastery',
    '1-on-1 Mentorship Available',
    'Live Trade Alerts · Daily',
    'Supply & Demand Zones',
    'Price Action Mastery',
    'Fibonacci Retracements'
  ];

  // Duplicate items for seamless loop
  const marqueeItems = [...items, ...items];

  return (
    <div className="bg-foreground py-4 overflow-hidden border-y border-border">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-0 whitespace-nowrap"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-3 px-6 border-r border-border/20"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;