// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { siteData } from '../data/siteData';

const Header = () => {
  const location = useLocation();
  const navLinks = siteData.navigation;

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border hidden md:block">
      <div className="container-custom">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-[34px] h-[34px] bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <TrendingUp className="w-[18px] h-[18px] text-primary-foreground" />
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-foreground">
              Gabba<span className="text-primary">FX</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-foreground ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;