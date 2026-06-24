import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-cv-green/10 text-cv-green font-bold text-base md:text-lg px-5 py-2 rounded-full uppercase tracking-wider mb-6">
            ¡Bienvenidos!
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-wide mb-6">
            No es solo una banda,
            <br />
            <span className="text-cv-red">es una invitación a jugar.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Cualquier Verdura es una banda de rock infantil independiente de Argentina.
            Hacemos música para chicos y sus familias, donde el rock, el humor
            y la imaginación se mezclan para crear una experiencia que va más allá de un recital:
            es una aventura compartida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}