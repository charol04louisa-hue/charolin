import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

const tools = [
  { name: "ChatGPT", emoji: "🤖" },
  { name: "Claude", emoji: "🧠" },
  { name: "Gemini", emoji: "✨" },
  { name: "Midjourney", emoji: "🎨" },
  { name: "Figma", emoji: "🎯" },
  { name: "Canva", emoji: "🖌️" },
  { name: "CapCut", emoji: "🎬" },
  { name: "Notion", emoji: "📓" },
  { name: "VS Code", emoji: "💻" },
  { name: "GitHub", emoji: "🐙" },
  { name: "Python", emoji: "🐍" },
  { name: "Lovable", emoji: "💖" },
];

export function Tools() {
  const { t } = useI18n();
  return (
    <section id="tools" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="03 — Stack" title={t.tools.title} subtitle={t.tools.subtitle} />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <motion.div key={tool.name}
              initial={{ opacity: 0, scale: 0.7, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05, type: "spring" }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative aspect-square flex flex-col items-center justify-center rounded-2xl glass p-4 hover:glow-border transition-all cursor-pointer">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle at center, oklch(0.7 0.21 245 / 30%), transparent 70%)" }} />
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
                className="text-4xl md:text-5xl">{tool.emoji}</motion.div>
              <div className="mt-2 text-xs font-semibold text-center text-foreground/80 group-hover:text-primary transition-colors">{tool.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
