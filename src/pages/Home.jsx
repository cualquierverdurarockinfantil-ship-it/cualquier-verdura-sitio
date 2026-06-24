import React from 'react';
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
  { src: '/assets/gal-02.jpg', alt: 'Show en salón con público' },
  { src: '/assets/gal-03.jpg', alt: 'Show en comunidad escolar' },
  { src: '/assets/gal-04.jpg', alt: 'Show al aire libre' },
  { src: '/assets/gal-05.jpg', alt: 'Gran evento en salón' },
  { src: '/assets/gal-06.jpg', alt: 'Bajista en el escenario' },
  { src: '/assets/gal-07.jpg', alt: 'Cantante en vivo' },
  { src: '/assets/gal-08.jpg', alt: 'Banda completa' },
  { src: '/assets/gal-09.jpg', alt: 'Show outdoor' },
  { src: '/assets/gal-10.jpg', alt: 'Dúo en escenario' },
  { src: '/assets/gal-11.jpg', alt: 'Guitarristas en vivo' },
  { src: '/assets/gal-12.jpg', alt: 'Bajista en acción' },
  { src: '/assets/gal-13.jpg', alt: 'Baterista de noche' },
];

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
      <HistorySection />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CTABanner
          text="¿Querés que toquemos en tu evento?"
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
