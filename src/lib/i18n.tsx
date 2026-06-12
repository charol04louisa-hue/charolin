import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "id";

const dict = {
  en: {
    nav: { about: "About", experience: "Experience", tools: "Tools", leadership: "Leadership", certs: "Certifications", contact: "Contact" },
    hero: {
      badge: "Informatics Engineering Student",
      tagline: "Building the future with technology, leadership & community impact.",
      cta1: "Get in touch", cta2: "View work",
    },
    about: {
      title: "About",
      body: "I'm an Informatics Engineering student at Universitas Sanata Dharma passionate about AI, community building, and turning ideas into real-world impact. I lead initiatives, build digital products, and grow communities at the intersection of technology and education.",
    },
    experience: { title: "Experience", subtitle: "Roles, communities & initiatives I've led or shaped.",
      items: [
        { org: "AI For Everyone", role: "Content & Community", period: "2024 — Present", desc: "Helping democratize AI literacy in Indonesia through educational media reaching 11.6k+ followers.", metric: "1M views / 30d", tag: "AI Community" },
        { org: "Grow With AI", role: "Contributor", period: "2024 — Present", desc: "AI learning platform empowering people to be more productive, smarter, and ready for the future.", metric: "21.3k views / 30d", tag: "EdTech" },
        { org: "GenDigital Academy Yogyakarta", role: "Branch Member", period: "2024 — Present", desc: "Yogyakarta branch of GenDigital — enthusiastic digital learners giving back to the community.", metric: "14k views / 30d", tag: "Digital Skills" },
        { org: "BEM FST USD — MEDKOMINFO", role: "Member", period: "Nov 2024 — Nov 2025", desc: "Member of the Faculty of Science & Technology Student Executive Board, Media & Communication division.", metric: "Faculty-wide", tag: "Student Gov" },
      ],
    },
    tools: { title: "Software & AI Stack", subtitle: "Tools I use to design, build, and ship." },
    leadership: { title: "Leadership", subtitle: "Initiative, ownership, and shipping outcomes that matter.",
      items: [
        { title: "Chair — Graduation Send-Off September 2025", org: "FST USD", period: "Sep 2025", desc: "Led the organizing committee for the faculty-wide graduation send-off ceremony at Universitas Sanata Dharma.", highlight: "Ketua Panitia" },
        { title: "Member — MEDKOMINFO BEM FST", org: "Universitas Sanata Dharma", period: "2024 — 2025", desc: "Drove media and communications strategy for the Faculty of Science & Technology student board.", highlight: "Faculty Board" },
        { title: "AI Community Builder", org: "AI For Everyone × Grow With AI", period: "2024 — Present", desc: "Building an audience of 15k+ across AI-focused communities, shipping educational content weekly.", highlight: "15k+ Reach" },
      ],
    },
    certs: { title: "Certifications", subtitle: "Awards, programs, and credentials.", view: "View certificate" },
    contact: { title: "Let's build something", subtitle: "Open to collaborations, internships, and community projects.", cta: "Send an email", or: "or reach me on" },
  },
  id: {
    nav: { about: "Tentang", experience: "Pengalaman", tools: "Tools", leadership: "Kepemimpinan", certs: "Sertifikasi", contact: "Kontak" },
    hero: {
      badge: "Mahasiswi Teknik Informatika",
      tagline: "Membangun masa depan lewat teknologi, kepemimpinan, dan dampak komunitas.",
      cta1: "Hubungi saya", cta2: "Lihat karya",
    },
    about: {
      title: "Tentang",
      body: "Saya mahasiswi Teknik Informatika di Universitas Sanata Dharma, fokus pada AI, community building, dan mengubah ide menjadi dampak nyata. Saya memimpin inisiatif, membangun produk digital, dan menumbuhkan komunitas di persimpangan teknologi dan edukasi.",
    },
    experience: { title: "Pengalaman", subtitle: "Peran, komunitas, dan inisiatif yang saya pimpin.",
      items: [
        { org: "AI For Everyone", role: "Konten & Komunitas", period: "2024 — Sekarang", desc: "Mendemokratisasi literasi AI di Indonesia melalui media edukatif dengan 11,6rb+ pengikut.", metric: "1jt tayangan / 30h", tag: "Komunitas AI" },
        { org: "Grow With AI", role: "Kontributor", period: "2024 — Sekarang", desc: "Platform belajar AI untuk membuat orang lebih produktif, pintar, dan siap masa depan.", metric: "21,3rb tayangan / 30h", tag: "EdTech" },
        { org: "GenDigital Academy Yogyakarta", role: "Anggota Cabang", period: "2024 — Sekarang", desc: "Cabang Yogyakarta GenDigital — pembelajar digital yang memberi kembali pada komunitas.", metric: "14rb tayangan / 30h", tag: "Skill Digital" },
        { org: "BEM FST USD — MEDKOMINFO", role: "Anggota", period: "Nov 2024 — Nov 2025", desc: "Anggota BEM Fakultas Sains & Teknologi, divisi Media & Komunikasi.", metric: "Tingkat Fakultas", tag: "BEM" },
      ],
    },
    tools: { title: "Software & AI Stack", subtitle: "Tools yang saya pakai untuk mendesain, membangun, dan merilis." },
    leadership: { title: "Kepemimpinan", subtitle: "Inisiatif, kepemilikan, dan hasil yang berarti.",
      items: [
        { title: "Ketua Panitia — Pelepasan Wisuda September 2025", org: "FST USD", period: "Sep 2025", desc: "Memimpin panitia pelaksana acara pelepasan wisuda tingkat fakultas di Universitas Sanata Dharma.", highlight: "Ketua Panitia" },
        { title: "Anggota MEDKOMINFO BEM FST", org: "Universitas Sanata Dharma", period: "2024 — 2025", desc: "Mengelola strategi media dan komunikasi BEM Fakultas Sains & Teknologi.", highlight: "BEM Fakultas" },
        { title: "AI Community Builder", org: "AI For Everyone × Grow With AI", period: "2024 — Sekarang", desc: "Membangun audiens 15rb+ di komunitas AI, merilis konten edukasi mingguan.", highlight: "15rb+ Jangkauan" },
      ],
    },
    certs: { title: "Sertifikasi", subtitle: "Penghargaan, program, dan kredensial.", view: "Lihat sertifikat" },
    contact: { title: "Mari berkarya bersama", subtitle: "Terbuka untuk kolaborasi, magang, dan proyek komunitas.", cta: "Kirim email", or: "atau hubungi via" },
  },
};

type DictType = typeof dict.en;
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: DictType }>({ lang: "en", setLang: () => {}, t: dict.en });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>;
}
export const useI18n = () => useContext(Ctx);
