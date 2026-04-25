// src/pages/Home.jsx (Updated)
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AboutPreview from '../components/AboutPreview';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  useEffect(() => {
    // Scroll reveal observer
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
    
    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <Courses />
      <Testimonials />
      <CTA />
      <WhatsAppButton />
    </>
  );
};

export default Home;