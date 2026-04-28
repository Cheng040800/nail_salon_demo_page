import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif italic text-stone-800 dark:text-stone-100">Beauty Nail Studio</Link>
        <div className="hidden md:flex items-center space-x-10 font-['Noto_Serif'] font-light tracking-tight">
          <Link 
            className={isActive('/') ? "text-stone-900 dark:text-white border-b border-stone-400 dark:border-stone-500 pb-1 transition-all" : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"} 
            to="/"
          >
            Home
          </Link>
          <span className="text-stone-500 dark:text-stone-400 cursor-default">Services</span>
          <Link 
            className={isActive('/booking') ? "text-stone-900 dark:text-white border-b border-stone-400 dark:border-stone-500 pb-1 transition-all" : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"} 
            to="/booking"
          >
            Booking
          </Link>
          <span className="text-stone-500 dark:text-stone-400 cursor-default">Gallery</span>
          <span className="text-stone-500 dark:text-stone-400 cursor-default">About</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="hidden md:block bg-stone-700 text-white px-8 py-3 rounded-sm font-label text-xs uppercase tracking-widest active:scale-95 duration-200 ease-in-out hover:bg-stone-800 transition-all text-center" to="/booking">Book Now</Link>
          <button className="md:hidden text-on-surface">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
