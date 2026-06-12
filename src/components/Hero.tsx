import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Mail } from "lucide-react";
import profile from "@/assets/profile.png";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Text */}
        <div className="relative">
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

              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
                <motion.span initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block gradient-text glow-text">CHAROLIN</motion.span>
                <motion.span initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block gradient-text glow-text">LOUISA</motion.span>
                <motion.span initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block gradient-text glow-text">AIPASSA</motion.span>
              </h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                {t.hero.tagline}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
                className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all hover:-translate-y-0.5">
                  <Mail className="h-4 w-4" /> {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#experience" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:glow-border transition-all">
                  {t.hero.cta2}
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto aspect-[3/4] w-full max-w-md">
          {/* Spotlight */}
          <div className="absolute inset-0 -m-16 rounded-full blur-3xl opacity-70"
            style={{ background: "radial-gradient(circle, oklch(0.6 0.25 245 / 60%), transparent 65%)" }} />

          {/* Animated rings */}
          {[0, 1, 2].map((i) => (
            <span key={i}
              className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/40"
              style={{ animation: `pulse-ring 3s cubic-bezier(0.4,0,0.6,1) ${i * 1}s infinite` }} />
          ))}
          <div className="absolute inset-0 rounded-[2.5rem] border border-primary/30 animate-spin-slow"
            style={{ background: "conic-gradient(from 0deg, transparent, oklch(0.7 0.22 235 / 30%), transparent)" }} />

          {/* Photo container */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] glass-strong p-2 shadow-[var(--shadow-glow-strong)] animate-float">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]"
              style={{ background: "linear-gradient(180deg, oklch(0.3 0.1 245), oklch(0.18 0.05 260))" }}>
              <img src={profile} alt="Charolin Louisa Aipassa" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(180deg, transparent 60%, oklch(0.1 0.03 260 / 60%))",
              }} />
            </div>
            {/* Floating chips */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 top-12 rounded-2xl glass-strong px-4 py-2 text-xs font-semibold shadow-xl">
              <span className="text-primary">●</span> AI Builder
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 bottom-20 rounded-2xl glass-strong px-4 py-2 text-xs font-semibold shadow-xl">
              <span className="text-primary">★</span> Ketua Panitia
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity }}
              className="absolute -right-8 top-1/3 rounded-2xl glass-strong px-3 py-2 text-[10px] font-bold tracking-wider uppercase shadow-xl">
              15k+ Community
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
