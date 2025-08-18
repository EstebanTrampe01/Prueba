import { motion } from 'framer-motion';
import type { SiteContent } from '@shared/content';

interface ExcellenceProps { data?: SiteContent['excellence']; }

export default function Excellence({ data }: ExcellenceProps) {
  if (!data?.title && !data?.subtitle) return null;
  return (
    <section className="py-20 bg-background" id="excelencia">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-tech-primary/5 to-tech-accent/5 rounded-2xl p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              {data?.title || 'Compromiso con la Excelencia'}
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {data?.subtitle || 'Nuestro equipo se mantiene actualizado con las últimas certificaciones y mejores prácticas del sector, garantizando que siempre recibas soluciones basadas en los estándares más altos de la industria.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
