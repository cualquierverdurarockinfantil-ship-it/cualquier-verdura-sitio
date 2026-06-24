import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Mail, Send } from 'lucide-react';


export default function ContactSection() {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `¡Hola Cualquier Verdura!%0A%0A*Nombre:* ${encodeURIComponent(form.name)}%0A*Mensaje:* ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/5492915664520?text=${whatsappMessage}`, '_blank');
    setForm({ name: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contacto"
          subtitle="¿Querés contratarnos para un show? ¿Tenés preguntas? ¡Hablemos!"
          colorClass="text-cv-violet"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Nombre</label>
              <Input
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Mensaje</label>
              <Textarea
                placeholder="Contanos qué necesitás..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-[120px]"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-cv-green hover:bg-cv-green/90 text-white font-bold w-full md:w-auto px-8"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar por WhatsApp
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-6">
              ¡Sumate a la Aventura!
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Estamos disponibles para shows, eventos, festivales y colaboraciones.
              También podés seguirnos en redes para estar al tanto de todo lo que viene.
            </p>

            <div className="space-y-4">
              <a
                href="https://instagram.com/cualquierverdurarock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-pink-50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-cv-pink/10 group-hover:bg-cv-pink/20 transition-colors">
                  <Instagram className="w-5 h-5 text-cv-pink" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Instagram</p>
                  <p className="text-xs text-muted-foreground">@cualquierverdurarock</p>
                </div>
              </a>

              <a
                href="https://youtube.com/@cualquierverdurarockinfantil?si=SVuNx0tfZsoUOzFl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-red-50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-cv-red/10 group-hover:bg-cv-red/20 transition-colors">
                  <Youtube className="w-5 h-5 text-cv-red" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">YouTube</p>
                  <p className="text-xs text-muted-foreground">Cualquier Verdura</p>
                </div>
              </a>

              <a
                href="mailto:cualquierverdurarockinfantil@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-orange-50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-cv-orange/10 group-hover:bg-cv-orange/20 transition-colors">
                  <Mail className="w-5 h-5 text-cv-orange" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">cualquierverdurarockinfantil@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@cualquierverdurarock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-slate-100 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">TikTok</p>
                  <p className="text-xs text-muted-foreground">@cualquierverdurarock</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}