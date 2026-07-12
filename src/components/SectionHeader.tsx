import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, subtitle, titleRight }: { eyebrow?: string; title: string; subtitle?: string; titleRight?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
      className="mb-12 max-w-2xl">
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
          {eyebrow}
        </div>
      )}
      <div className="flex items-center gap-4 flex-wrap">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight gradient-text">{title}</h2>
        {titleRight}
      </div>
      {subtitle && <p className="mt-3 text-muted-foreground text-lg">{subtitle}</p>}
    </motion.div>
  );
}
