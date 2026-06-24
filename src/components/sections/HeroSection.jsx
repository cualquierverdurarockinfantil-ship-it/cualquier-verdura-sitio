import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const LOGO_URL = '/assets/logo.png';

export default function HeroSection() {
  const whatsappUrl = 'https://wa.me/5492915664520?text=' + encodeURIComponent('Hola Cualquier Verdura! Quiero info para comprar entradas para el show del 16 de agosto.');

  return (
    <section id="hero" className="relative">

      {/* ── DESKTOP ── */}
      <div className="hidden sm:block">
        <div className="relative w-full" style={{ aspectRatio: '4/1' }}>
          <img
            src="/assets/hero-desktop.svg"
            alt="Cualquier Verdura Rock Infantil"
            className="w-full h-full object-cover object-center"
            style={{ display: 'block' }}
          />
        </div>

        <div className="bg-white pb-8 pt-6 flex items-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="bg-cv-yellow/80 hover:bg-cv-yellow text-cv-red px-8 py-5 rounded-2xl shadow-xl border-2 border-cv-yellow/60 hover:border-cv-yellow transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <img src={LOGO_URL} alt="Logo" className="h-12 w-auto" />
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-0.5">Próximo show en vivo</p>
                  <h3 className="font-display text-2xl lg:text-3xl tracking-wider leading-tight">Día del Niño</h3>
                  <p className="text-sm text-cv-red/80">¡¡Presentación del nuevo disco!!</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-sm font-semibold mb-3">16 de agosto · Teatro Cervantes<br />Coronel Suárez</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cv-red text-white font-bold py-2.5 px-7 rounded-full text-sm hover:bg-red-700 transition-colors shadow-lg whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  Comprá tu entrada
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="block sm:hidden">
        <div className="relative w-full">
          <img
            src="/assets/hero-mobile.svg"
            alt="Cualquier Verdura Rock Infantil"
            className="w-full"
            style={{ display: 'block' }}
          />
        </div>

        <div className="bg-white pt-4 pb-6 px-4">
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="block bg-cv-yellow/80 hover:bg-cv-yellow text-cv-red p-4 rounded-2xl text-center shadow-xl border-2 border-cv-yellow/60 hover:border-cv-yellow transition-all duration-300"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-0.5">Próximo show en vivo</p>
            <h3 className="font-display text-xl tracking-wider leading-tight mb-0.5">Día del Niño</h3>
            <p className="text-xs text-cv-red/80 mb-0.5">¡¡Presentación del nuevo disco!!</p>
            <p className="text-xs font-semibold mb-3">16 de agosto — Teatro Cervantes, Coronel Suárez</p>
            <span className="inline-flex items-center gap-2 bg-cv-red text-white font-bold py-2 px-5 rounded-full text-sm shadow-lg">
              <MessageCircle className="w-4 h-4" />
              Comprá tu entrada
            </span>
          </motion.a>
        </div>
      </div>

    </section>
  );
}
