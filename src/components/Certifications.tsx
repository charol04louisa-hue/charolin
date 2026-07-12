import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Award, X, ZoomIn } from "lucide-react";
import certImg from "@/assets/certificate.jpeg";
import bemImg from "@/assets/bem-fst.jpeg";

import gendigitalCert from "@/assets/gendigital-cert.png";

const certs = [
  { img: gendigitalCert, title: "Head of Social Media Division", org: "GenDigital Academy Yogyakarta", id: "Signed by Polar Osaka, Founder", date: "Mar 2025 — Jun 2026", desc: "Recognized for leading the Social Media Division at GenDigital Yogyakarta — driving content strategy, brand voice, and community growth across platforms.", featured: true },
  { img: certImg, title: "Ketua Panitia — Pelepasan Wisuda September 2025", org: "FST Universitas Sanata Dharma", id: "852/SERTIF/DKN/FST/XII/2025", date: "Sep 2025", desc: "Led the faculty-wide graduation send-off committee, coordinating logistics, media, and ceremony flow.", featured: false },
  { img: bemImg, title: "Anggota MEDKOMINFO BEM FST", org: "FST Universitas Sanata Dharma", id: "016/SERTIF/DKN/FST/III/2026", date: "2024 — 2025", desc: "Contributed to the Media & Communications division of the student executive board.", featured: false },
];

export function Certifications() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="certs" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="05 — Credentials" title={t.certs.title} subtitle={t.certs.subtitle} />

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl glass-strong p-3 md:p-4 hover:glow-border transition-all cursor-pointer group overflow-hidden"
          onClick={() => setOpen(0)}>
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full blur-3xl opacity-50"
            style={{ background: "radial-gradient(circle, oklch(0.7 0.22 235 / 60%), transparent)" }} />
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img src={certs[0].img} alt={certs[0].title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full glass-strong px-4 py-2 inline-flex items-center gap-2 text-sm font-semibold">
                  <ZoomIn className="h-4 w-4 text-primary" /> {t.certs.view}
                </div>
              </div>
            </div>
            <div className="p-2 md:p-4">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                <Award className="h-3 w-3" /> Featured
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{certs[0].title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{certs[0].org}</p>
              <p className="mt-1 text-[11px] font-mono text-primary/60 uppercase tracking-wider">{certs[0].date}</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{certs[0].desc}</p>
              <p className="mt-3 text-xs font-mono text-primary/70">{certs[0].id}</p>
            </div>
          </div>
        </motion.div>

        {/* Secondary */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {certs.slice(1).map((c, idx) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              onClick={() => setOpen(idx + 1)}
              className="group rounded-3xl glass p-3 hover:glow-border hover:-translate-y-1 transition-all cursor-pointer">
              <div className="overflow-hidden rounded-2xl relative">
                <img src={c.img} alt={c.title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full glass-strong px-3 py-1.5 inline-flex items-center gap-2 text-xs font-semibold">
                    <ZoomIn className="h-3.5 w-3.5 text-primary" /> {t.certs.view}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display font-bold leading-tight">{c.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{c.org}</p>
                <p className="mt-1 text-[10px] font-mono text-primary/60 uppercase tracking-wider">{c.date}</p>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed line-clamp-3">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full">
              <button className="absolute -top-12 right-0 rounded-full glass-strong p-2"
                onClick={(e) => { e.stopPropagation(); setOpen(null); }}>
                <X className="h-5 w-5" />
              </button>
              <img src={certs[open].img} alt="" className="w-full rounded-2xl shadow-[var(--shadow-glow-strong)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
