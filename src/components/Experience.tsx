import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import ai from "@/assets/ai-for-everyone.jpeg";
import grow from "@/assets/growwithai.jpeg";
import gen from "@/assets/gendigital.jpeg";
import bem from "@/assets/bem-fst.jpeg";

const images = [ai, grow, gen, bem];

export function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="02 — Experience" title={t.experience.title} subtitle={t.experience.subtitle} />
        <div className="grid gap-8 md:grid-cols-2">
          {t.experience.items.map((item, i) => (
            <motion.article key={item.org}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-2 transition-all hover:glow-border">
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <img src={images[i]} alt={item.org}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, oklch(0.1 0.03 260 / 90%))" }} />
                <div className="absolute top-3 left-3 rounded-full glass-strong px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {item.tag}
                </div>
                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full glass-strong px-3 py-1 text-[10px] font-semibold">
                  <TrendingUp className="h-3 w-3 text-primary" /> {item.metric}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-medium text-primary">{item.period}</div>
                    <h3 className="mt-1 font-display text-xl font-bold">{item.org}</h3>
                    <div className="text-sm text-muted-foreground">{item.role}</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-45" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item.desc}</p>

                <div className="mt-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-primary">{t.experience.labels.responsibilities}</div>
                  <ul className="mt-2 space-y-1.5">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-xs leading-relaxed text-foreground/75">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />{r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-primary">{t.experience.labels.impact}</div>
                  <ul className="mt-2 space-y-1.5">
                    {item.impact.map((r) => (
                      <li key={r} className="flex gap-2 text-xs leading-relaxed text-foreground/75">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />{r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-primary">{t.experience.labels.skills}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.skills.map((sk) => (
                      <span key={sk} className="rounded-full glass px-2.5 py-1 text-[10px] font-medium text-foreground/80">{sk}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
