import React from 'react';
import { motion } from 'framer-motion';

export default function CTABanner({ text, buttonLabel, onButtonClick, bgClass = 'bg-cv-orange' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${bgClass} rounded-2xl p-8 md:p-12 text-center`}
    >
      <p className="font-display text-2xl md:text-3xl text-white tracking-wide mb-5">
        {text}
      </p>
      {buttonLabel && (
        <button
          onClick={onButtonClick}
          className="bg-white text-foreground font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg"
        >
          {buttonLabel}
        </button>
      )}
    </motion.div>
  );
}