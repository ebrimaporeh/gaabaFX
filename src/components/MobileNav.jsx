// src/components/MobileNav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Phone, HelpCircle, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/contact', icon: Phone, label: 'Contact' },
    { path: '/faq', icon: HelpCircle, label: 'FAQ' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border md:hidden">
        <div className="flex items-center justify-around px-4 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col font-bold items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  active
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'animate-pulse' : ''}`} />
                <span className={`text-xs font-medium ${active ? 'text-primary' : ''}`}>
                  {item.label}
                </span>
                {active && (
                  <div className="absolute -top-0.5 w-8 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

     
    </>
  );
};

export default MobileNav;