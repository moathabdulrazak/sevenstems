"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-stone-700' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'py-4' : 'py-6'
          }`}>
            
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/" className={`block transition-colors duration-300 ${
                scrolled ? 'text-stone-100' : 'text-white'
              }`}>
                <Logo className={`w-auto transition-all duration-300 ${
                  scrolled ? 'h-10' : 'h-12'
                }`} animate={false} />
              </Link>
            </motion.div>

            {/* Desktop Navigation - Better Spacing */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-16 xl:space-x-20">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        relative px-4 py-3 text-sm font-sans font-medium 
                        tracking-[0.15em] uppercase transition-all duration-300
                        ${scrolled 
                          ? 'text-stone-100 hover:text-rose-400' 
                          : 'text-white hover:text-rose-300'
                        }
                        group
                      `}
                    >
                      {item.name}
                      <span className={`
                        absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                        transition-all duration-300 group-hover:w-full
                        ${scrolled ? 'bg-rose-400' : 'bg-rose-300'}
                      `} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* CTA Button */}
            <motion.div 
              className="hidden lg:flex flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className={`
                  px-6 py-3 text-sm font-sans font-medium tracking-wider uppercase
                  border-2 transition-all duration-300 hover:scale-105
                  ${scrolled
                    ? 'border-stone-200 text-stone-100 hover:bg-stone-200 hover:text-stone-900'
                    : 'border-white text-white hover:bg-white hover:text-gray-900'
                  }
                `}
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Mobile/Tablet Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                className={`
                  block w-6 h-0.5 transition-all duration-300 transform
                  ${scrolled ? 'bg-stone-100' : 'bg-white'}
                  ${isOpen ? 'rotate-45 translate-y-1.5' : ''}
                `}
              />
              <motion.span
                className={`
                  block w-6 h-0.5 mt-1.5 transition-all duration-300 transform
                  ${scrolled ? 'bg-stone-100' : 'bg-white'}
                  ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}
                `}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-900 hover:text-rose-500 transition-colors duration-300 text-center block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
                className="pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-sans font-medium tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;