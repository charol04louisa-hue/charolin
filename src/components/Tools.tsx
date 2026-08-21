import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Sparkles, Palette, Zap, Code2 } from "lucide-react";

const categories = [
  { key: "ai", label: "AI & LLMs", icon: Sparkles, color: "oklch(0.7 0.21 245)" },
  { key: "design", label: "Design & Media", icon: Palette, color: "oklch(0.75 0.18 30)" },
  { key: "productivity", label: "Productivity", icon: Zap, color: "oklch(0.78 0.16 150)" },
  { key: "dev", label: "Development", icon: Code2, color: "oklch(0.72 0.18 280)" },
];

const tools = [
  {
    name: "ChatGPT",
    category: "ai",
    level: 95,
    desc: "Conversational AI, automation, and research workflows.",
    mark: "C",
    gradient: "linear-gradient(135deg, #10A37F, #0D8C6D)",
    glow: "oklch(0.65 0.15 170)",
  },
  {
    name: "Claude",
    category: "ai",
    level: 90,
    desc: "Long-form reasoning, writing, and coding assistance.",
    mark: "C",
    gradient: "linear-gradient(135deg, #CC9B6D, #A87B4F)",
    glow: "oklch(0.7 0.12 80)",
  },
  {
    name: "Gemini",
    category: "ai",
    level: 88,
    desc: "Multimodal AI for search, vision, and productivity.",
    mark: "G",
    gradient: "linear-gradient(135deg, #4285F4, #34A853)",
    glow: "oklch(0.65 0.18 250)",
  },
  {
    name: "Midjourney",
    category: "ai",
    level: 85,
    desc: "AI-generated visuals and creative concept art.",
    mark: "M",
    gradient: "linear-gradient(135deg, #1A1A1A, #3A3A3A)",
    glow: "oklch(0.6 0.05 250)",
  },
  {
    name: "Figma",
    category: "design",
    level: 92,
    desc: "UI/UX design systems and collaborative prototyping.",
    mark: "F",
    gradient: "linear-gradient(135deg, #F24E1E, #FF7262)",
    glow: "oklch(0.65 0.2 40)",
  },
  {
    name: "Canva",
    category: "design",
    level: 96,
    desc: "Social media graphics, presentations, and brand kits.",
    mark: "C",
    gradient: "linear-gradient(135deg, #00C4CC, #7D2AE8)",
    glow: "oklch(0.7 0.2 200)",
  },
  {
    name: "CapCut",
    category: "design",
    level: 87,
    desc: "Short-form video editing and motion graphics.",
    mark: "C",
    gradient: "linear-gradient(135deg, #000000, #2A2A2A)",
    glow: "oklch(0.55 0.03 250)",
  },
  {
    name: "Notion",
    category: "productivity",
    level: 93,
    desc: "Project wiki, task management, and knowledge base.",
    mark: "N",
    gradient: "linear-gradient(135deg, #FFFFFF, #D1D1D1)",
    glow: "oklch(0.85 0.02 250)",
    lightMark: true,
  },
  {
    name: "VS Code",
    category: "dev",
    level: 89,
    desc: "Code editor with extensions for web and AI projects.",
    mark: "V",
    gradient: "linear-gradient(135deg, #007ACC, #1F9CF0)",
    glow: "oklch(0.65 0.18 240)",
  },
  {
    name: "GitHub",
    category: "dev",
    level: 86,
    desc: "Version control, collaboration, and open-source workflows.",
    mark: "G",
    gradient: "linear-gradient(135deg, #FFFFFF, #9CA3AF)",
    glow: "oklch(0.8 0.03 250)",
    lightMark: true,
  },
  {
    name: "Python",
    category: "dev",
    level: 82,
    desc: "Scripting, data work, and AI/ML experimentation.",
    mark: "P",
    gradient: "linear-gradient(135deg, #3776AB, #FFD43B)",
    glow: "oklch(0.65 0.15 220)",
  },
  {
    name: "Lovable",
    category: "dev",
    level: 91,
    desc: "AI-powered full-stack app generation and rapid shipping.",
    mark: "L",
    gradient: "linear-gradient(135deg, #FF4F8A, #FF8FA3)",
    glow: "oklch(0.7 0.22 15)",
  },
];

function SkillBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

function Lettermark({
  mark,
  gradient,
  lightMark,
  size = "md",
}: {
  mark: string;
  gradient: string;
  lightMark?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-xl",
    lg: "w-20 h-20 text-3xl",
  };
  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center font-display font-bold shadow-lg shrink-0`}
      style={{
        background: gradient,
        color: lightMark ? "#0F172A" : "#FFFFFF",
        boxShadow: `0 8px 30px -8px ${gradient.split(",")[1]?.trim() || "rgba(255,255,255,0.2)"}`,
      }}
    >
      {mark}
    </div>
  );
}

function CategoryChip({ tool }: { tool: (typeof tools)[number] }) {
  const cat = categories.find((c) => c.key === tool.category)!;
  return (
    <span
      className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
      style={{ background: `${tool.glow}18`, color: tool.glow }}
    >
      {cat.label}
    </span>
  );
}

export function Tools() {
  const { t } = useI18n();
  const featured = tools.filter((t) => t.category === "ai");
  const grid = tools.filter((t) => t.category !== "ai");

  return (
    <section id="tools" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="03 — Stack" title={t.tools.title} subtitle={t.tools.subtitle} align="center" />

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium"
            >
              <cat.icon size={14} style={{ color: cat.color }} />
              <span className="text-foreground/80">{cat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Featured AI row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {featured.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center rounded-3xl glass p-6 overflow-hidden cursor-pointer hover:glow-border transition-all h-full"
              style={{ "--glow-color": tool.glow } as React.CSSProperties}
            >
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 group-hover:opacity-35 blur-2xl transition-opacity"
                style={{ background: tool.gradient }}
              />
              <div className="relative flex flex-col items-center h-full w-full">
                <Lettermark mark={tool.mark} gradient={tool.gradient} lightMark={tool.lightMark} size="md" />
                <CategoryChip tool={tool} />
                <h3 className="mt-3 text-xl font-display font-bold">{tool.name}</h3>
                <p className="mt-1 text-xs text-foreground/60 leading-relaxed max-w-[16rem]">{tool.desc}</p>
                <div className="mt-auto w-full pt-5">
                  <div className="flex justify-between text-[10px] text-foreground/50 mb-1.5">
                    <span>Proficiency</span>
                    <span>{tool.level}%</span>
                  </div>
                  <SkillBar level={tool.level} color={tool.glow} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Uniform tool grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {grid.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.06, type: "spring" }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center justify-center text-center rounded-2xl glass p-5 min-h-[10rem] cursor-pointer hover:glow-border transition-all"
              style={{ "--glow-color": tool.glow } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tool.glow}25, transparent 70%)`,
                }}
              />
              <div className="relative flex flex-col items-center">
                <Lettermark mark={tool.mark} gradient={tool.gradient} lightMark={tool.lightMark} size="sm" />
                <div className="mt-3 text-sm font-display font-bold">{tool.name}</div>
                <div
                  className="mt-1 text-[10px] font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: tool.glow }}
                >
                  {categories.find((c) => c.key === tool.category)!.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
