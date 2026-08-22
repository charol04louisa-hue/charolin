import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Users, Github, Linkedin } from "lucide-react";
import profile from "@/assets/profile-cutout.png";
import aiForEveryone from "@/assets/ai-for-everyone.jpeg";
import growWithAi from "@/assets/growwithai.jpeg";
import genDigital from "@/assets/gendigital.jpeg";
import { useI18n } from "@/lib/i18n";
import { CtaLink } from "./CtaLink";
import { PROJECTS_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links";

const orgs = [
  { src: aiForEveryone, label: "AI For Everyone", period: "2025 — Present", x: "-12%", y: "8%", size: 130, delay: 0.6, rot: -8 },
  { src: growWithAi, label: "Grow With AI", period: "2026", x: "78%", y: "18%", size: 120, delay: 0.8, rot: 6 },
  { src: genDigital, label: "GenDigital", period: "2025 — 2026", x: "82%", y: "62%", size: 115, delay: 1.0, rot: 10 },
];

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-[1.05fr_1fr]">
        {/* Text */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div key={lang}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}>
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest text-primary glow-border">
                <Sparkles className="h-3.5 w-3.5" />
                {t.hero.badge}
              </motion.div>

              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.75rem)] font-bold leading-[0.95] tracking-tight">
                {["CHAROLIN", "LOUISA", "AIPASSA"].map((word, i) => (
                  <motion.span key={word}
                    initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
                    className="block gradient-text glow-text">{word}</motion.span>
                ))}
              </h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
                className="mt-6 max-w-xl text-xl md:text-2xl font-light text-foreground/90 leading-snug">
                {t.hero.tagline}
              </motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
                className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
                {t.hero.support}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
                className="mt-8 flex flex-wrap gap-3">
                <CtaLink href={PROJECTS_URL} className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all hover:-translate-y-0.5">
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CtaLink>
                <CtaLink href={GITHUB_URL} className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:glow-border transition-all">
                  <Github className="h-4 w-4 text-primary" /> {t.hero.cta3}
                </CtaLink>
                <CtaLink href={LINKEDIN_URL} className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:glow-border transition-all">
                  <Linkedin className="h-4 w-4 text-primary" /> {t.hero.cta4}
                </CtaLink>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Portrait composite — no background frame */}
        <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
          {/* Soft global spotlight */}
          <div className="absolute inset-0 -m-12 rounded-full blur-3xl opacity-80"
            style={{ background: "radial-gradient(circle, oklch(0.6 0.26 245 / 55%), transparent 60%)" }} />
          <div className="absolute inset-0 -m-20 rounded-full blur-3xl opacity-50 animate-drift"
            style={{ background: "radial-gradient(circle, oklch(0.7 0.22 220 / 40%), transparent 65%)" }} />

          {/* Pulsing rings — anchored behind subject */}
          {[0, 1, 2].map((i) => (
            <span key={i}
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40"
              style={{ animation: `pulse-ring 4s cubic-bezier(0.4,0,0.6,1) ${i * 1.2}s infinite` }} />
          ))}
          <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-spin-slow"
            style={{ background: "conic-gradient(from 0deg, transparent, oklch(0.7 0.22 235 / 40%), transparent 70%)" }} />

          {/* Floating org logos (chronological composite) */}
          {orgs.map((o, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: o.rot, y: [0, i % 2 ? -10 : 10, 0] }}
              transition={{
                opacity: { delay: o.delay, duration: 0.8 },
                scale: { delay: o.delay, duration: 0.8 },
                rotate: { delay: o.delay, duration: 0.8 },
                y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute z-0 group"
              style={{ left: o.x, top: o.y, width: o.size }}>
              <div className="relative rounded-2xl overflow-hidden glass-strong p-1.5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-shadow">
                <img src={o.src} alt={o.label} className="w-full aspect-square object-cover rounded-xl" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/30" />
              </div>
              <div className="mt-2 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/90">{o.label}</div>
                <div className="text-[9px] text-primary font-semibold">{o.period}</div>
              </div>
            </motion.div>
          ))}

          {/* Profile cutout (no frame, no bg) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute inset-0 z-10 flex items-end justify-center animate-float">
            <img
              src={profile}
              alt="Charolin Louisa Aipassa"
              className="h-[110%] w-auto object-contain"
              style={{ filter: "drop-shadow(0 25px 50px oklch(0.6 0.25 245 / 50%)) drop-shadow(0 0 60px oklch(0.7 0.22 230 / 35%))" }}
            />
          </motion.div>

          {/* AI Builder community chip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }}
            className="absolute left-0 bottom-8 z-20 rounded-2xl glass-strong px-4 py-3 shadow-[var(--shadow-glow)]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">AI Builder</div>
                <div className="text-sm font-bold gradient-text">15k+ Community</div>
              </div>
            </div>
          </motion.div>

          {/* Scattered AI tokens background */}
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span key={i}
              className="absolute rounded-full bg-primary/40"
              style={{
                left: `${(i * 53) % 100}%`,
                top: `${(i * 37) % 100}%`,
                width: 3 + (i % 4),
                height: 3 + (i % 4),
                boxShadow: "0 0 12px oklch(0.7 0.22 235 / 80%)",
              }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
              transition={{ duration: 3 + (i % 5), delay: (i % 7) * 0.4, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
