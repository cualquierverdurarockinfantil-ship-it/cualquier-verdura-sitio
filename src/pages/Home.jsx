import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import HistorySection from '@/components/sections/HistorySection';
import ShowsSection from '@/components/sections/ShowsSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import CTABanner from '@/components/shared/CTABanner';

const GALLERY_IMAGES = [
  { src: '/assets/gal-01.jpg', alt: 'Show en vivo de noche' },
  { src: '/assets/gal-02.jpg', alt: 'Show en salon con publico' },
  { src: '/assets/gal-03.jpg', alt: 'Show en comunidad escolar' },
  { src: '/assets/gal-04.jpg', alt: 'Show al aire libre' },
  { src: '/assets/gal-05.jpg', alt: 'Gran evento en salon' },
  { src: '/assets/gal-06.jpg', alt: 'Bajista en el escenario' },
  { src: '/assets/gal-07.jpg', alt: 'Cantante en vivo' },
  { src: '/assets/gal-08.jpg', alt: 'Banda completa' },
  { src: '/assets/gal-09.jpg', alt: 'Show outdoor' },
  { src: '/assets/gal-10.jpg', alt: 'Duo en escenario' },
  { src: '/assets/gal-11.jpg', alt: 'Guitarristas en vivo' },
  { src: '/assets/gal-12.jpg', alt: 'Bajista en accion' },
  { src: '/assets/gal-13.jpg', alt: 'Baterista de noche' },
];

function ClubBanner() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl px-8 py-10 text-center"
          style={{
            background: 'linear-gradient(135deg, #1a0a2e 0%, #3b0764 60%, #92338A 100%)',
            border: '2px solid #92338A',
          }}
        >
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
            style={{ background: '#E6302B', transform: 'translate(30%, -30%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
            style={{ background: '#facc15', transform: 'translate(-30%, 30%)' }}
          />

          <div className="relative z-10">
            <p className="font-display text-xs tracking-widest uppercase text-yellow-300 mb-1">
              Fan club digital
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-3">
              Club Verdura
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-6 max-w-xl mx-auto">
              Nuestra plataforma web. El lugar de los fans de Cualquier Verdura. Escucha el disco, canta karaoke,
              conoce a los personajes, juega y descarga dibujos para colorear.
            </p>
            
              href="https://club.cualquierverdurarock.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: '#facc15', color: '#1a0a2e' }}
            >
              Entra al Club Verdura
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default function Home() {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ClubBanner />
      <HistorySection />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CTABanner
          text="Queres que toquemos en tu evento?"
          buttonLabel="Contactanos"
          onButtonClick={scrollToContact}
          bgClass="bg-cv-violet"
        />
      </div>
      <ShowsSection />
      <GallerySection images={GALLERY_IMAGES} />
      <ContactSection />
      <Footer />
    </div>
  );
}
