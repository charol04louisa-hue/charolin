import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  titleRight,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  titleRight?: React.ReactNode;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
      className={`mb-12 ${isCenter ? "mx-auto text-center max-w-3xl" : "max-w-2xl text-left"}`}>
      {eyebrow && (
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary ${isCenter ? "mx-auto" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
          {eyebrow}
        </div>
      )}
      <div className={`flex items-center gap-4 flex-wrap ${isCenter ? "justify-center" : ""}`}>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight gradient-text">{title}</h2>
        {titleRight}
      </div>
      {subtitle && <p className={`mt-3 text-muted-foreground text-lg ${isCenter ? "mx-auto max-w-xl" : ""}`}>{subtitle}</p>}
    </motion.div>
  );
}
