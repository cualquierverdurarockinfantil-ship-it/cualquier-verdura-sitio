import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import ShowCard from '@/components/shared/ShowCard';

const SHOWS = [
  {
    slug: 'dia-del-nino',
    title: 'Día del Niño',
    date: '16 de agosto',
    time: 'A confirmar',
    venue: 'Teatro Cervantes, Coronel Suárez',
    status: 'upcoming',
    description: 'Presentación del nuevo disco. ¡El show más esperado del año! Festejamos el Día del Niño con rock, juegos y toda la familia.',
    image: '/assets/show-dia-nino.png',
    photos: [],
  },
  {
    slug: 'tacuarock',
    title: 'Tacuarock',
    date: 'Próximamente',
    venue: 'A confirmar',
    status: 'festival',
    description: 'Festival de rock para los más chicos. Música, juegos y diversión.',
    image: '/assets/show-tacuarock.jpg',
    photos: [],
  },
  {
    slug: 'debut',
    title: 'Shows',
    date: '2024',
    venue: 'Buenos Aires',
    status: 'compilado',
    description: 'El primer show de Cualquier Verdura, donde comenzó esta aventura de rock, verduras y diversión.',
    image: '/assets/show-debut.jpg',
    photos: [],
  },
];

if (typeof window !== 'undefined') {
  window.__SHOWS_DATA__ = SHOWS;
}

export default function ShowsSection() {
  return (
    <section id="shows" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shows"
          subtitle="Nuestros recitales son experiencias únicas: rock, luces, personajes y mucho juego. ¡Vení a vivir la aventura en vivo!"
          colorClass="text-cv-orange"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SHOWS.map((show, i) => (
            <ShowCard key={show.slug} show={show} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
