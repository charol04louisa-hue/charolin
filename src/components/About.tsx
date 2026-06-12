import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Brain, Users, Rocket, Code2 } from "lucide-react";

export function About() {
  const { t } = useI18n();
  const stats = [
    { icon: Users, label: "Community Reach", value: "15k+" },
    { icon: Brain, label: "AI Communities", value: "3" },
    { icon: Rocket, label: "Events Led", value: "5+" },
    { icon: Code2, label: "Tools Mastered", value: "12+" },
  ];
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="01 — About" title={t.about.title} />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
            {t.about.body}
          </motion.p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl glass p-5 hover:glow-border hover:-translate-y-1 transition-all">
                <s.icon className="h-6 w-6 text-primary mb-3" />
                <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
