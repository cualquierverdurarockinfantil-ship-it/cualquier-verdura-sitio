import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getVideoclipEmbedUrl } from '@/lib/videoclipsData';

export default function VideoclipCard({ videoclip, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="aspect-video overflow-hidden">
        <iframe
          className="w-full h-full"
          src={getVideoclipEmbedUrl(videoclip)}
          title={videoclip.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <Link to={`/videoclip/${videoclip.slug}`} className="group block p-5 md:p-6">
        <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-1 group-hover:text-cv-blue transition-colors">
          {videoclip.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {videoclip.artist} · {videoclip.year}
        </p>
      </Link>
    </motion.div>
  );
}
