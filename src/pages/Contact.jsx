// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Award, Users } from 'lucide-react';
import { siteData } from '../data/siteData';
import WhatsAppButton from '../components/WhatsAppButton';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', value: siteData.phone, link: `tel:${siteData.phone}` },
    { icon: Mail, title: 'Email', value: siteData.email, link: `mailto:${siteData.email}` },
    { icon: MessageCircle, title: 'WhatsApp', value: 'Chat with us', link: `https://wa.me/${siteData.whatsappNumber}` },
    { icon: Clock, title: 'Response Time', value: 'Within 24 hours', link: null },
  ];

  return (
    <div className="pt-[76px] md:pt-[76px]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our programs? Ready to start your trading journey? 
              We're here to help you make the right decision.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Send us a <span className="text-primary">Message</span>
              </h2>
              
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                  <p className="text-green-600 dark:text-green-400">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your trading goals or ask any questions..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  disabled={isSubmitting}
                  className="w-full justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.title === 'WhatsApp' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-primary rounded-2xl p-8 text-white text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Chat with us on WhatsApp</h3>
                <p className="text-green-100 mb-6">
                  Get instant responses to your questions. We're here to help!
                </p>
                <a
                  href={`https://wa.me/${siteData.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Contact;