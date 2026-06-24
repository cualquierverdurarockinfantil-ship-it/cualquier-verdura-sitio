import React from 'react';
import { motion } from 'framer-motion';

export default function GalleryItem({ src, alt, index = 0, span = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
        span ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover aspect-square group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}