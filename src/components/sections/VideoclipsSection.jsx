import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import VideoclipCard from '@/components/shared/VideoclipCard';
import { VIDEOCLIPS } from '@/lib/videoclipsData';

export default function VideoclipsSection() {
  return (
    <section id="videoclips" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="🎬 Videoclips"
          subtitle="Nuestro archivo audiovisual oficial. Mirá los videoclips de Cualquier Verdura sin salir del sitio."
          colorClass="text-cv-blue"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VIDEOCLIPS.map((videoclip, i) => (
            <VideoclipCard key={videoclip.slug} videoclip={videoclip} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
