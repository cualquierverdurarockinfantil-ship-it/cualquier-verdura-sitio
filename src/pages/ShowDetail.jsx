import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const SHOWS = typeof window !== 'undefined' && window.__SHOWS_DATA__ ? window.__SHOWS_DATA__ : [];

export default function ShowDetail() {
  const { slug } = useParams();
  const show = SHOWS.find(s => s.slug === slug);
  const isCompilado = show?.status === 'compilado';

  if (!show) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Show no encontrado</h1>
          <Link to="/#shows" className="text-cv-red font-semibold hover:underline">Volver a Shows</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero image — object-position top para que se vea el titulo del flyer */}
      {show.image && (
        <div className="w-full h-[30vh] md:h-[45vh] overflow-hidden">
          <img
            src={show.image}
            alt={show.title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <Link
          to="/#shows"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cv-red transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Shows
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-4">
            {show.title}
          </h1>

          {/* Info badges — ocultar fecha y venue en compilado */}
          <div className="flex flex-wrap gap-4 mb-4">
            {!isCompilado && show.date && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                <Calendar className="w-4 h-4 text-cv-red" /> {show.date}
              </div>
            )}
            {show.time && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-cv-orange" /> {show.time}
              </div>
            )}
            {!isCompilado && show.venue && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                <MapPin className="w-4 h-4 text-cv-violet" /> {show.venue}
              </div>
            )}
            {show.freeEntry && (
              <div className="flex items-center gap-2 text-sm font-bold text-cv-green bg-cv-green/10 px-3 py-1.5 rounded-full">
                🎟 Entrada Libre y Gratuita
              </div>
            )}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {show.description}
          </p>

          {/* Gallery */}
          {show.photos && show.photos.length > 0 ? (
            <div>
              <h2 className="font-display text-2xl tracking-wide text-foreground mb-6">Fotos del show</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {show.photos.map((photo, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={photo}
                      alt={`${show.title} - foto ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-muted rounded-2xl p-10 text-center">
              <p className="text-muted-foreground">
                {isCompilado
                  ? 'Próximamente agregaremos fotos y videos de cada show.'
                  : 'Pronto sumaremos fotos y videos de este show. ¡Volvé a visitarnos!'}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
