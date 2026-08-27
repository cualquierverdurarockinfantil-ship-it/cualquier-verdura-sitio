import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative">

      {/* ── DESKTOP ── */}
      <div className="hidden sm:block">
        <div className="relative w-full" style={{ aspectRatio: '4/1' }}>
          <img
            src="/assets/hero-desktop.svg"
            alt="Cualquier Verdura Rock Infantil"
            className="w-full h-full object-cover object-center"
            style={{ display: 'block' }}
          />
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="block sm:hidden">
        <div className="relative w-full">
          <img
            src="/assets/hero-mobile.svg"
            alt="Cualquier Verdura Rock Infantil"
            className="w-full"
            style={{ display: 'block' }}
          />
        </div>
      </div>

    </section>
  );
}
