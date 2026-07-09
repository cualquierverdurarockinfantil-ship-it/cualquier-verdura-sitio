import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function GallerySection({ images }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const total = images.length;

  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);

  // Devuelve los índices a mostrar: 2 antes, central, 2 después (circular)
  const getVisible = () => {
    const slots = [-2, -1, 0, 1, 2];
    return slots.map(offset => ({
      offset,
      index: (current + offset + total) % total,
    }));
  };

  // Estilo de cada slot según su offset respecto al centro
  const slotStyle = (offset) => {
    const abs = Math.abs(offset);
    if (abs === 0) return { scale: 1,    opacity: 1,    zIndex: 10, x: '0%',    blur: 0 };
    if (abs === 1) return { scale: 0.78, opacity: 0.6,  zIndex: 5,  x: offset < 0 ? '-68%' : '68%', blur: 1 };
    if (abs === 2) return { scale: 0.58, opacity: 0.3,  zIndex: 1,  x: offset < 0 ? '-118%' : '118%', blur: 2 };
    return       { scale: 0,    opacity: 0,    zIndex: 0,  x: offset < 0 ? '-150%' : '150%', blur: 3 };
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-muted/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Galería"
          subtitle="Momentos de rock, risas y mucha verdura en cada show."
          colorClass="text-cv-green"
        />

        {/* Coverflow */}
        <div className="relative flex items-center justify-center" style={{ height: 360 }}>

          {getVisible().map(({ offset, index }) => {
            const s = slotStyle(offset);
            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                style={{ zIndex: s.zIndex }}
                animate={{
                  x: s.x,
                  scale: s.scale,
                  opacity: s.opacity,
                  filter: `blur(${s.blur}px)`,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={() => {
                  if (offset === 0) setLightbox(index);
                  else if (offset < 0) prev();
                  else next();
                }}
              >
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{
                    width: 420,
                    height: 300,
                    boxShadow: offset === 0 ? '0 20px 60px rgba(0,0,0,0.3)' : '0 8px 24px rgba(0,0,0,0.15)',
                  }}
                >
                  <img
                    src={images[index].src}
                    alt={images[index].alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={prev}
            className="bg-white hover:bg-cv-red hover:text-white text-foreground shadow-md rounded-full p-3 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? 'w-6 h-2.5 bg-cv-red'
                    : 'w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="bg-white hover:bg-cv-red hover:text-white text-foreground shadow-md rounded-full p-3 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Contador */}
        <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
          {current + 1} / {total}
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-7 h-7" />
            </button>
            <button
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(i => (i - 1 + total) % total); }}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(i => (i + 1) % total); }}
            >
              <ChevronRight className="w-7 h-7" />
            </button>
            <motion.img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-white/70 text-sm">
              {lightbox + 1} / {total}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
