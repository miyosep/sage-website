import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-stone-800 selection:bg-sage-200 selection:text-sage-900 relative">
      <div className="bg-grain"></div>
      <Navigation />
      <main className="flex-grow w-full max-w-3xl mx-auto px-6 pt-12 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
