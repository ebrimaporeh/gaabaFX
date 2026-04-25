// src/components/WhatsAppButton.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=Hello%20Gabba%2C%20I%27m%20interested%20in%20your%20forex%20trading%20program.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 md:bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-primary text-white p-4 rounded-full shadow-lg transition-transform group-hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;