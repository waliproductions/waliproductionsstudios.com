import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import logo from '../assets/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Watch', path: '/watch' },
  { name: 'Music', path: '/music' },
  { name: 'Gaming', path: '/gaming' },
  { name: 'Marketplace', path: '/marketplace' },
  { name: 'Community', path: '/community' },
  { name: 'About', path: '/about' },
];

const servicesItems = [
  { name: 'Creator Tech Support', path: '/services/streaming', description: 'Streaming & content-creator setup help' },
  { name: 'Business & Church Services', path: '/services/business', description: 'Websites, media & livestream support' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const servicesActive = servicesItems.some((item) => isActive(item.path));

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-strong border-b border-white/10' : 'bg-transparent border-b border-transparent'
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-brand-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Wali Studios home">
            <img
              src={logo}
              alt="Wali Studios"
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:block font-display text-lg font-bold tracking-tight text-white">
              Wali <span className="text-gradient-brand">Studios</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive(item.path)
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  'flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 outline-none',
                  servicesActive ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                Services
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 glass-strong border-white/10 text-gray-200">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild className="focus:bg-white/10 focus:text-white cursor-pointer py-2.5">
                    <Link to={item.path}>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium text-white">{item.name}</span>
                        <span className="text-xs text-gray-400">{item.description}</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 glass-strong overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive(item.path) ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Services
              </p>
              {servicesItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive(item.path) ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                className="mt-2 block rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
