import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const STATUS_STYLES = {
  upcoming: { label: 'PRÓXIMO', bg: 'bg-cv-red', text: 'text-white' },
  featured: { label: '★ DESTACADO', bg: 'bg-cv-orange', text: 'text-white' },
  past: { label: 'REALIZADO', bg: 'bg-muted', text: 'text-muted-foreground' },
  soldout: { label: 'AGOTADO', bg: 'bg-cv-violet', text: 'text-white' },
  festival: { label: 'NUESTRO FESTIVAL', bg: 'bg-cv-green', text: 'text-white' },
  debut: { label: 'DEBUT', bg: 'bg-cv-violet', text: 'text-white' },
  compilado: { label: 'COMPILADO', bg: 'bg-cv-blue', text: 'text-white' },
};

export default function ShowCard({ show, index = 0 }) {
  const status = STATUS_STYLES[show.status] || STATUS_STYLES.upcoming;
  const isCompilado = show.status === 'compilado';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/show/${show.slug}`}
        className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 block h-full"
      >
        {show.image ? (
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="aspect-[4/3] bg-muted flex items-center justify-center">
            <span className="font-display text-3xl text-muted-foreground/30">{show.title}</span>
          </div>
        )}
        <div className="p-5 md:p-6">
          <Badge className={`${status.bg} ${status.text} text-xs font-bold mb-3`}>
            {status.label}
          </Badge>
          <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-2">
            {show.title}
          </h3>
          <div className="space-y-1.5 text-sm text-muted-foreground">
            {!isCompilado && show.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cv-red" />
                <span>{show.date}</span>
              </div>
            )}
            {show.time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cv-orange" />
                <span>{show.time}</span>
              </div>
            )}
            {!isCompilado && show.venue && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cv-violet" />
                <span>{show.venue}</span>
              </div>
            )}
          </div>
          {show.description && (
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {show.description}
            </p>
          )}
          {/* Entrada libre — solo si aplica */}
          {show.freeEntry && (
            <div className="mt-3">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-cv-green bg-cv-green/10 px-3 py-1 rounded-full">
                🎟 Entrada Libre y Gratuita
              </span>
            </div>
          )}
          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-cv-red group-hover:gap-2 transition-all">
            Ver más <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
