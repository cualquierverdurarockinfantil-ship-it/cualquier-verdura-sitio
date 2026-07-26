import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getVideoclipCover } from '@/lib/videoclipsData';

export default function VideoclipCard({ videoclip, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/videoclip/${videoclip.slug}`}
        className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 block h-full"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={getVideoclipCover(videoclip)}
            alt={videoclip.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="w-14 h-14 text-white drop-shadow-lg" />
          </div>
        </div>
        <div className="p-5 md:p-6">
          <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-1">
            {videoclip.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {videoclip.artist} · {videoclip.year}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
