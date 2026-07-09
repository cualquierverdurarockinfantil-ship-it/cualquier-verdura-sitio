import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { Music, Users, Heart, Zap } from 'lucide-react';

const PILLARS = [
  {
    icon: Music,
    title: 'Música & Humor',
    text: 'Rock en serio, pero con un giro de diversión. Canciones que los chicos cantan a los gritos y el toque de humor necesario para que todos se diviertan.',
    color: 'text-cv-red',
    bg: 'bg-red-50',
  },
  {
    icon: Zap,
    title: 'Shows en Vivo',
    text: 'Cada recital es un evento: música, personajes, juegos y mucha energía. El escenario es nuestro patio de juegos.',
    color: 'text-cv-orange',
    bg: 'bg-orange-50',
  },
  {
    icon: Users,
    title: 'Para Toda la Familia',
    text: 'Los chicos son los protagonistas, pero las familias son parte de la fiesta. Música que conecta generaciones.',
    color: 'text-cv-violet',
    bg: 'bg-purple-50',
  },
  {
    icon: Heart,
    title: 'Independiente & Creativo',
    text: 'Un proyecto 100% independiente nacido con pasión y creatividad. Cada canción, cada personaje, cada show es hecho con amor.',
    color: 'text-cv-green',
    bg: 'bg-green-50',
  },
];

export default function HistorySection() {
  return (
    <section id="historia" className="py-20 md:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nuestra Historia"
          subtitle={'Cualquier Verdura nació de una invitación: tocar en la fiesta de egresados de un jardín de infantes de nuestra ciudad. Ahí interpretamos un repertorio con clásicos de María Elena Walsh, acompañados por los alumnos de la última sala del jardín que fueron las "estrellas de Walsh", y cantaron con nosotros en todo momento. Ese día nació esta aventura llena de verduras rockeras, canciones pegadizas y mucha diversión.'}
          colorClass="text-cv-red"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PILLARS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${item.bg} rounded-2xl p-6 md:p-8 border border-transparent hover:border-border transition-all duration-300`}
            >
              <div className={`inline-flex p-3 rounded-xl ${item.bg} mb-4`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}