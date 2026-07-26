import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = '/assets/logo.png';

const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Historia', href: '#historia' },
  { label: 'Videoclips', href: '#videoclips' },
  { label: 'Shows', href: '#shows' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Siempre visible al hacer scroll */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Cualquier Verdura Logo" className="h-10 md:h-14 w-auto" />
              <span className="font-display text-xl md:text-2xl text-cv-red tracking-wide hidden sm:block">
                Cualquier Verdura
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-semibold text-foreground/70 hover:text-cv-red transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6"
          >
            <img src={LOGO_URL} alt="Cualquier Verdura Logo" className="h-20 w-auto mb-4" />
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link.href)}
                className="font-display text-3xl text-foreground hover:text-cv-red transition-colors tracking-wider"
              >
                {link.label}
              </motion.button>
            ))}
            <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 p-2">
              <X className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
