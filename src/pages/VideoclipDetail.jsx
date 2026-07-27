import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mic2, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getVideoclipEmbedUrl } from '@/lib/videoclipsData';

const VIDEOCLIPS =
  typeof window !== 'undefined' && window.__VIDEOCLIPS_DATA__ ? window.__VIDEOCLIPS_DATA__ : [];

export default function VideoclipDetail() {
  const { slug } = useParams();
  const videoclip = VIDEOCLIPS.find((v) => v.slug === slug);

  if (!videoclip) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Videoclip no encontrado</h1>
          <Link to="/#videoclips" className="text-cv-red font-semibold hover:underline">
            Volver a Videoclips
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const hasBackstage = videoclip.backstage && videoclip.backstage.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <Link
          to="/#videoclips"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cv-red transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Videoclips
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Encabezado con el video embebido */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg">
            <iframe
              className="w-full h-full"
              src={getVideoclipEmbedUrl(videoclip)}
              title={videoclip.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <h1 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-3">
            {videoclip.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
              {videoclip.year}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
              {videoclip.artist}
            </div>
          </div>

          {/* Historia del videoclip */}
          {videoclip.story && (
            <div className="mb-10">
              <h2 className="font-display text-2xl tracking-wide text-foreground mb-4">
                La historia detrás del videoclip
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {videoclip.story}
              </p>
            </div>
          )}

          {/* Botón destacado hacia el Club Verdura */}
          <motion.a
            href={videoclip.karaokeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full rounded-2xl px-6 py-5 md:py-6 text-center mb-10 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #3b0764 60%, #92338A 100%)', border: '2px solid #92338A' }}
          >
            <Mic2 className="w-6 h-6 md:w-7 md:h-7 shrink-0" style={{ color: '#facc15' }} />
            <span className="font-display text-lg md:text-2xl tracking-wide text-white">
              Escuchá o hacé karaoke de esta canción en Club Verdura
            </span>
          </motion.a>

          {/* Backstage — se muestra solo si hay contenido cargado */}
          {hasBackstage && (
            <div>
              <h2 className="font-display text-2xl tracking-wide text-foreground mb-6 flex items-center gap-2">
                🎬 Backstage
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {videoclip.backstage.map((item, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden relative group">
                    <img
                      src={item.src}
                      alt={item.label || `${videoclip.title} - backstage ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <PlayCircle className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
