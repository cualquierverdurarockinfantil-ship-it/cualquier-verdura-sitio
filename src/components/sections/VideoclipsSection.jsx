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
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {VIDEOCLIPS.map((videoclip, i) => (
            <div key={videoclip.slug} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-sm">
              <VideoclipCard videoclip={videoclip} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
