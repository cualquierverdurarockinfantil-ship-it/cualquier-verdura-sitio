import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, colorClass = 'text-cv-violet', align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl tracking-wide ${colorClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}