import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col text-stone-800 selection:bg-sage-200 selection:text-sage-900 relative">
      <div className="bg-grain"></div>
      <Navigation />
      <main className="flex-grow w-full max-w-3xl mx-auto px-6 pt-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
