import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 px-12 mt-24 bg-stone-200 dark:bg-stone-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto font-['Plus_Jakarta_Sans'] uppercase tracking-[0.1em] text-xs">
        <div>
          <div className="font-serif text-xl mb-4 italic text-stone-800 dark:text-stone-100">Nail Salon Studio</div>
          <p className="normal-case tracking-normal text-stone-600 dark:text-stone-400 font-light mb-6">Redefining luxury nail care through meticulous artistry and ethical practices.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="font-bold text-stone-900 dark:text-white mb-2">Connect</p>
          <a className="text-stone-600 dark:text-stone-400 hover:underline underline-offset-4 ease-in-out duration-300" href="#">Instagram</a>
          <a className="text-stone-600 dark:text-stone-400 hover:underline underline-offset-4 ease-in-out duration-300" href="#">Facebook</a>
          <a className="text-stone-600 dark:text-stone-400 hover:underline underline-offset-4 ease-in-out duration-300" href="#"><br/></a>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="font-bold text-stone-900 dark:text-white mb-2">Information</p>
          <span className="text-stone-600 dark:text-stone-400 cursor-default">Location</span>
          <span className="text-stone-600 dark:text-stone-400 cursor-default">Contact</span>
          <a className="text-stone-600 dark:text-stone-400 hover:underline underline-offset-4 ease-in-out duration-300" href="#">Privacy Policy</a>
          <a className="text-stone-600 dark:text-stone-400 hover:underline underline-offset-4 ease-in-out duration-300" href="#"><br/></a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-300 dark:border-stone-800 flex flex-col md:flex-row justify-between text-stone-500 font-['Plus_Jakarta_Sans'] uppercase tracking-[0.1em] text-[10px]">
        <p>© 2026 Nail Salon Studio. All rights reserved.</p>
        <p>Designed with Intent in KL</p>
      </div>
    </footer>
  );
};

export default Footer;
