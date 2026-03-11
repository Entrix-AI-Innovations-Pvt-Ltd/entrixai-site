'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-black/80 border-b border-white/10'
          : 'backdrop-blur-sm bg-black/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/favicon.ico"
            alt="Entrix AI logo"
            className="h-7 w-7"
          />
          <span className="font-semibold tracking-tight text-lg">Entrix AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How it Works
          </a>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </nav>

        <a
          href="#waitlist"
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Join Waitlist
        </a>
      </div>
    </motion.header>
  );
}
