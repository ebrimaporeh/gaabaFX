// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone } from 'lucide-react';
import { 
  FaTwitter, 
  FaInstagram, 
  FaTelegramPlane, 
  FaWhatsapp
} from 'react-icons/fa';
import { siteData } from '../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
      }, 1000);
    }
  };

  const socialIcons = [
    { icon: FaTwitter, href: siteData.socialLinks.twitter, label: 'Twitter' },
    { icon: FaInstagram, href: siteData.socialLinks.instagram, label: 'Instagram' },
    { icon: FaTelegramPlane, href: siteData.socialLinks.telegram, label: 'Telegram' },
    { icon: FaWhatsapp, href: siteData.socialLinks.whatsapp, label: 'WhatsApp' },
  ];

  const quickLinks = siteData.navigation;

  return (
    <footer className="bg-foreground border-t border-white/10 pb-20">
      <div className="container-custom py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section (Full width on mobile) */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="w-[34px] h-[34px] bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-[18px] h-[18px] text-primary" />
              </div>
              <span className="font-serif text-lg font-bold text-white">
                Gabba<span className="text-primary">FX</span>
              </span>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed">
              Professional forex trading education with a decade of real market experience. 
              Learn to trade like an institution.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-300 hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Half width on mobile) */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/0 group-hover:bg-primary rounded-full transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Half width on mobile) */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 break-all">{siteData.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 break-all">{siteData.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href={siteData.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors break-all"
                >
                  WhatsApp Support (24/7)
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter (Full width on mobile) */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-3">
              Get weekly market analysis, trading tips, and exclusive offers.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>

              {isSubscribed && (
                <p className="text-xs text-green-400 text-center">
                  ✓ Subscribed successfully!
                </p>
              )}
            </form>

            <p className="text-xs text-gray-400 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} {siteData.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/privacy" className="text-xs text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-xs text-gray-400 hover:text-primary transition-colors">
                Risk Disclaimer
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4 max-w-2xl mx-auto px-4">
            Trading involves substantial risk of loss and is not suitable for all investors. 
            Past performance does not guarantee future results. Always consult with a qualified 
            financial professional before making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;