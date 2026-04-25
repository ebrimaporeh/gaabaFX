// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import MobileNav from './MobileNav';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Header - Hidden on mobile */}
      <Header />
      
      {/* Mobile Bottom Navigation - Hidden on desktop */}
      <MobileNav />
      
      {/* Main Content - No padding on any page since each page handles its own spacing */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer - Hidden on mobile, visible on desktop */}
      {/* <div className="hidden md:block"> */}
        <Footer />
      {/* </div> */}
    </div>
  );
};

export default Layout;