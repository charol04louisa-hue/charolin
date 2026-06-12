import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      ref.current.style.setProperty("--mx", `${x}px`);
      ref.current.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Static seeds for SSR-safe particles
  const particles = Array.from({ length: 40 }, (_, i) => ({
    left: (i * 53) % 100,
    top: (i * 37) % 100,
    size: 2 + ((i * 7) % 5),
    delay: (i % 10) * 0.7,
    dur: 8 + ((i * 3) % 10),
  }));
  const streaks = Array.from({ length: 5 }, (_, i) => ({ top: 10 + i * 18, delay: i * 3, dur: 9 + i }));
  const nodes = Array.from({ length: 14 }, (_, i) => ({ x: (i * 71) % 100, y: ((i * 113) + 17) % 100 }));

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Base gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Tech grid (parallax) */}
      <div className="absolute inset-0 tech-grid" style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }} />

      {/* Radial glows */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.25 245 / 50%), transparent 60%)" }} />
      <div className="absolute top-1/2 -right-40 h-[700px] w-[700px] rounded-full blur-3xl opacity-30 animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.22 210 / 50%), transparent 60%)" }} />

      {/* Neural network SVG */}
      <svg className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="node-g">
            <stop offset="0%" stopColor="oklch(0.85 0.2 235)" />
            <stop offset="100%" stopColor="oklch(0.5 0.2 245 / 0)" />
          </radialGradient>
        </defs>
        {nodes.map((a, i) =>
          nodes.slice(i + 1, i + 3).map((b, j) => (
            <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke="oklch(0.7 0.21 245 / 25%)" strokeWidth="0.1" />
          ))
        )}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="0.6" fill="url(#node-g)">
            <animate attributeName="r" values="0.4;1;0.4" dur={`${4 + (i % 5)}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`, top: `${p.top}%`,
            width: p.size, height: p.size,
            background: "oklch(0.85 0.2 235)",
            boxShadow: "0 0 8px oklch(0.7 0.22 235 / 80%)",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Light streaks */}
      {streaks.map((s, i) => (
        <div key={i} className="absolute h-px w-40"
          style={{
            top: `${s.top}%`,
            background: "linear-gradient(90deg, transparent, oklch(0.85 0.2 235 / 90%), transparent)",
            animation: `streak ${s.dur}s linear ${s.delay}s infinite`,
            filter: "blur(0.5px)",
          }} />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.03 260 / 80%) 100%)",
      }} />
    </div>
  );
}
