import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blogs', label: 'Blogs' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60 py-5">
      <div className="max-w-3xl mx-auto px-6 flex justify-between items-baseline">
        <Link to="/" className="font-serif text-2xl tracking-tight font-semibold text-sage-800 hover:text-sage-600 transition-colors">
          sage.jh
        </Link>
        
        <div className="flex space-x-5 md:space-x-8 text-sm font-sans tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                "transition-all duration-300 relative",
                location.pathname === item.path
                  ? "text-sage-900 font-medium"
                  : "text-stone-500 hover:text-sage-700"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute -bottom-2 left-0 w-full h-px bg-sage-400 rounded-full" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;