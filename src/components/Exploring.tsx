import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Code2, BarChart3, Brain, Network, PieChart, Globe } from "lucide-react";

const icons = [Code2, BarChart3, Brain, Network, PieChart, Globe];

export function Exploring() {
  const { t } = useI18n();
  return (
    <section id="exploring" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="04 — Exploring"
          title={t.exploring.title}
          subtitle={t.exploring.subtitle}
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.exploring.items.map((item, i) => {
            const Icon = icons[i] ?? Brain;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group rounded-3xl glass p-6 hover:glow-border hover:-translate-y-1 transition-all"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                >
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
