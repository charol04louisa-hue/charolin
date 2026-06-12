import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Crown, Users, Sparkles } from "lucide-react";

const icons = [Crown, Users, Sparkles];

export function Leadership() {
  const { t } = useI18n();
  return (
    <section id="leadership" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="04 — Leadership" title={t.leadership.title} subtitle={t.leadership.subtitle} />
        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, oklch(0.7 0.21 245 / 50%), transparent)" }} />
          <div className="space-y-12">
            {t.leadership.items.map((item, i) => {
              const Icon = icons[i] ?? Sparkles;
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-6 ${isLeft ? "" : "md:[direction:rtl]"}`}>
                  <div className={`md:[direction:ltr] ${isLeft ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                    <div className="group rounded-3xl glass-strong p-6 hover:glow-border transition-all hover:-translate-y-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
                          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">{item.highlight}</span>
                      </div>
                      <div className="mt-4 text-xs font-semibold text-primary">{item.period} · {item.org}</div>
                      <h3 className="mt-1 font-display text-xl font-bold leading-tight">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item.desc}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_oklch(0.7_0.21_245_/_80%)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
