import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Instagram, Linkedin, ArrowRight } from "lucide-react";

const IG_USERNAME = "charolin.sa";
const IG_URL = `https://instagram.com/${IG_USERNAME}`;

export function Contact() {
  const { t } = useI18n();
  const socials = [
    { Icon: Instagram, href: IG_URL, label: "Instagram" },
    { Icon: Linkedin, href: `https://www.linkedin.com/in/${IG_USERNAME}`, label: "LinkedIn" },
  ];
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-16 text-center">
          <div className="absolute inset-0 -z-10" style={{
            background: "radial-gradient(ellipse at top, oklch(0.5 0.25 245 / 40%), transparent 60%)"
          }} />
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "oklch(0.7 0.22 235 / 50%)" }} />
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Available for collaborations
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight gradient-text">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">{t.contact.subtitle}</p>

          <motion.a href={IG_URL} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all">
            <Instagram className="h-5 w-5" /> @{IG_USERNAME}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <div className="mt-10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{t.contact.or}</div>
            <div className="flex items-center justify-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl glass hover:glow-border transition-all">
                  <Icon className="h-6 w-6 text-foreground/80 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Charolin Louisa Aipassa · Built with care.
        </div>
      </div>
    </section>
  );
}
