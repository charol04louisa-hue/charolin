import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const sections = ["about", "experience", "tools", "exploring", "leadership", "achievements", "contact"] as const;

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "about";
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top < 120) current = s;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-6xl px-4`}>
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-lg" : "glass"}`}>
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            <span className="gradient-text">CLA.</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <a key={s} href={`#${s}`} className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav[s as keyof typeof t.nav]}
                {active === s && (
                  <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-lg"
                    style={{ background: "color-mix(in oklab, var(--primary) 18%, transparent)", boxShadow: "0 0 20px oklch(0.7 0.21 245 / 40%)" }} />
                )}
              </a>
            ))}
          </div>
          <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex items-center gap-2 rounded-full glass px-3 py-2 text-xs font-medium hover:glow-border transition-all">
              <Languages className="h-4 w-4 text-primary" />
              <span className="uppercase">{lang}</span>
            </button>
            {open && (
              <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-32 rounded-xl glass-strong p-1 shadow-xl">
                {(["en", "id"] as const).map((l) => (
                  <button key={l}
                    onClick={() => { setLang(l); setOpen(false); }}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition-colors ${lang === l ? "bg-primary/20 text-primary" : "hover:bg-white/5"}`}>
                    {l === "en" ? "English" : "Bahasa Indonesia"}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
