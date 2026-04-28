// src/data/siteData.js
export const siteData = {
  name: "Garba FX Trading",
  traderName: "Garba",
  phone: "+220 2738367",
  email: "garba@fxtrading.com",
  whatsappNumber: "2202738367",
  yearsOfExperience: 10,
  studentsTrained: 3400,
  successRate: 87,
  studentReturns: "2.1M",
  
   socialLinks: {
    twitter: "https://twitter.com/gabbafx",
    instagram: "https://instagram.com/gabbafx",
    telegram: "https://t.me/gabbafx",
    whatsapp: "https://wa.me/2202738367",
    facebook: "https://facebook.com/gabbafx",
    youtube: "https://youtube.com/@gabbafx",
    linkedin: "https://linkedin.com/in/gabbafx"
  },
  
  navigation: [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Contact", path: "/contact", id: "contact" },
    { name: "FAQ", path: "/faq", id: "faq" }
  ],
  
  courses: [
    {
      id: 1,
      title: "FX Starter Pack",
      tag: "Foundation",
      price: 97,
      description: "The fundamentals every forex trader must master — sessions, pairs, terminology, and your first live trade setup.",
      features: [
        "8 hours of video content",
        "Forex fundamentals workbook",
        "Private community access",
        "Lifetime updates"
      ],
      featured: false
    },
    {
      id: 2,
      title: "FX Mastery Pro",
      tag: "⭑ Most Popular",
      price: 397,
      description: "The complete SMC course. Order blocks, fair value gaps, liquidity hunts, trade management and live session recordings every month.",
      features: [
        "40+ hours of premium content",
        "Live trade alerts (Telegram)",
        "Monthly live Q&A sessions",
        "SMC playbook PDF",
        "30-day money-back guarantee"
      ],
      featured: true
    },
    {
      id: 3,
      title: "1-on-1 Mentorship",
      tag: "Elite",
      price: 1200,
      period: "8 weeks",
      description: "For traders who are serious. Direct access to me for 8 weeks — live trade reviews, personalised feedback, and a custom game plan.",
      features: [
        "Everything in FX Mastery Pro",
        "4× 1-hour private sessions",
        "Personal trade journal review",
        "WhatsApp access during market hours",
        "Limited spots — apply to qualify"
      ],
      featured: false
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Kofi Asante",
      location: "Ghana",
      role: "FX Pro Member",
      avatar: "KA",
      text: "Garba doesn't just teach setups — he rewires how you think about price. I went from blowing two accounts to pulling consistent profit within 3 months.",
      profit: "+$4,820",
      accountSize: "$10,000",
      period: "Month 3"
    },
    {
      id: 2,
      name: "Thandiwe Nkosi",
      location: "South Africa",
      role: "Elite Mentorship",
      avatar: "TN",
      text: "The mentorship programme is in a different league. No fluff. No generic advice. Gabba studied my journal, identified exactly where I was leaking and fixed it.",
      profit: "+$11,340",
      accountSize: "$25,000",
      period: "8 Weeks"
    },
    {
      id: 3,
      name: "Olumide Adeyemi",
      location: "Nigeria",
      role: "FX Pro Member",
      avatar: "OA",
      text: "I tried 4 other courses. FX Mastery Pro is the only one that made my account grow. The SMC framework clicked in week two and I haven't looked back.",
      profit: "+$2,950",
      accountSize: "$5,000",
      period: "Month 2"
    }
  ],
  
  faqs: [
    {
      id: 1,
      question: "How long does it take to become profitable?",
      answer: "While results vary, most dedicated students see consistent results within 3-6 months of applying the methodology. The key is consistent practice and following the risk management principles taught in the course."
    },
    {
      id: 2,
      question: "Do I need prior trading experience?",
      answer: "Not at all. The FX Starter Pack is designed for complete beginners. We start from the absolute basics and progressively build up to advanced concepts."
    },
    {
      id: 3,
      question: "What's your trading style?",
      answer: "I trade using Smart Money Concepts (SMC) and institutional order flow. This means I focus on how banks and institutions move price, not retail indicators or guesswork."
    },
    {
      id: 4,
      question: "Do you offer refunds?",
      answer: "Yes, all courses come with a 30-day money-back guarantee. If you're not satisfied, we'll refund your investment - no questions asked."
    },
    {
      id: 5,
      question: "How do I access the course material?",
      answer: "Upon purchase, you'll get immediate access to our student portal where all video lessons, PDFs, and resources are available. You can access everything from your computer or mobile device."
    },
    {
      id: 6,
      question: "Do you provide live trading signals?",
      answer: "FX Mastery Pro members get access to our Telegram community with live trade alerts and daily market analysis. However, the focus is on teaching you to trade independently, not just following signals."
    }
  ]
};

// Mock photos for trader
export const traderPhotos = {
  hero: "/images/trader-hero.svg",
  about: "/images/trader-about.svg",
  placeholder: "/images/placeholder.svg"
};