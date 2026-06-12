import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Tools } from "@/components/Tools";
import { Leadership } from "@/components/Leadership";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charolin Louisa Aipassa — Informatics Engineering Student" },
      { name: "description", content: "Portfolio of Charolin Louisa Aipassa — Informatics Engineering student, AI community builder, and student leader at Universitas Sanata Dharma." },
      { property: "og:title", content: "Charolin Louisa Aipassa — Portfolio" },
      { property: "og:description", content: "Technology, leadership, and community impact." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Tools />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
    </I18nProvider>
  );
}
