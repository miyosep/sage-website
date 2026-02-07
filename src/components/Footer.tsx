import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 mt-12 border-t border-stone-200 text-center text-stone-400 text-sm font-sans">
      <p>&copy; {new Date().getFullYear()} Sage Kim.</p>
    </footer>
  );
};

export default Footer;
