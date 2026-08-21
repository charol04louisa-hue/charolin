import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "id";

const dict = {
  en: {
    nav: { about: "About", experience: "Experience", tools: "Tools", exploring: "Exploring", leadership: "Leadership", achievements: "Achievements", certs: "Certifications", contact: "Contact" },
    hero: {
      badge: "Informatics Engineering Student",
      tagline: "Building with Technology, Data & AI",
      support: "I explore software development, data, AI, and digital experiences while continuously building projects and developing my technical and problem-solving skills.",
      cta1: "View Projects", cta2: "View Resume", cta3: "GitHub", cta4: "LinkedIn",
    },
    about: {
      title: "About",
      body: "I'm an Informatics Engineering student at Universitas Sanata Dharma exploring software development, data, and AI. I build digital products, lead student and community initiatives, and keep sharpening my technical and problem-solving skills.",
    },
    experience: {
      title: "Experience", subtitle: "Roles, communities & initiatives I've contributed to.",
      labels: { responsibilities: "Responsibilities", impact: "Achievements & Impact", skills: "Skills gained" },
      items: [
        {
          org: "AI For Everyone", role: "Content & Community", period: "2025 — Present", tag: "AI Community", metric: "11.6k+ followers",
          desc: "Helping democratize AI literacy in Indonesia through educational media.",
          responsibilities: ["Plan and produce educational AI content", "Support community engagement and replies", "Maintain a consistent publishing rhythm"],
          impact: ["Account audience of 11.6k+ followers", "Contributed to content reaching a wide Indonesian audience"],
          skills: ["Content strategy", "Copywriting", "Community management", "Analytics"],
        },
        {
          org: "Grow With AI", role: "Contributor", period: "2026 — Present", tag: "EdTech", metric: "Learning platform",
          desc: "AI learning platform helping people become more productive and future-ready.",
          responsibilities: ["Contribute educational material about AI tools", "Collaborate with the team on content planning"],
          impact: ["Supported the platform's early content library"],
          skills: ["Instructional content", "Collaboration", "AI tooling"],
        },
        {
          org: "GenDigital Academy Yogyakarta", role: "Head of Social Media Division", period: "2025 — 2026", tag: "Digital Skills", metric: "Division lead",
          desc: "Led the Social Media Division of the Yogyakarta branch — content strategy, brand voice, and community growth.",
          responsibilities: ["Lead the social media division and its members", "Own content strategy and brand voice", "Coordinate publishing schedules across platforms"],
          impact: ["Recognized with a certificate of appreciation as Head of Social Media Division"],
          skills: ["Team leadership", "Brand communication", "Social media strategy"],
        },
        {
          org: "BEM FST USD — MEDKOMINFO", role: "Member", period: "Nov 2024 — Nov 2025", tag: "Student Gov", metric: "Faculty-wide",
          desc: "Member of the Faculty of Science & Technology Student Executive Board, Media & Communication division.",
          responsibilities: ["Produce media and publication materials", "Support faculty-wide event communication"],
          impact: ["Contributed to faculty-level communication activities"],
          skills: ["Visual communication", "Teamwork", "Event publication"],
        },
      ],
    },
    tools: { title: "Software & AI Stack", subtitle: "Tools and technologies I use and continue to learn.", learning: "Learning" },
    exploring: {
      title: "What I'm Exploring", subtitle: "Areas I'm currently learning and growing in.",
      items: [
        { name: "Software Development", desc: "Building applications and understanding clean, maintainable code." },
        { name: "Data Analytics", desc: "Turning raw data into readable, useful insight." },
        { name: "Artificial Intelligence", desc: "Applying AI tools and understanding how they work." },
        { name: "System Development", desc: "Designing how systems and their parts fit together." },
        { name: "Business Intelligence", desc: "Dashboards and reporting that support decisions." },
        { name: "Digital Technology", desc: "Digital products, platforms, and the experiences around them." },
      ],
    },
    leadership: {
      title: "Leadership & Organization", subtitle: "Leadership, organization, community, and volunteer experience.",
      items: [
        { title: "Chair — Graduation Send-Off September 2025", org: "FST USD", period: "Sep 2025", desc: "Led the organizing committee for the faculty-wide graduation send-off ceremony at Universitas Sanata Dharma.", highlight: "Ketua Panitia", category: "Leadership" },
        { title: "Head of Social Media Division", org: "GenDigital Academy Yogyakarta", period: "2025 — 2026", desc: "Led the social media division: content strategy, brand voice, and community growth.", highlight: "Division Lead", category: "Leadership" },
        { title: "Member — MEDKOMINFO BEM FST", org: "Universitas Sanata Dharma", period: "2024 — 2025", desc: "Supported media and communications for the Faculty of Science & Technology student board.", highlight: "Faculty Board", category: "Organization" },
        { title: "AI Community Contributor", org: "AI For Everyone × Grow With AI", period: "2025 — Present", desc: "Creating educational content for AI-focused communities.", highlight: "Community", category: "Community" },
        { title: "Digital Skills Sharing", org: "GenDigital Academy Yogyakarta", period: "2025 — 2026", desc: "Sharing digital skills and learning material with the community.", highlight: "Teaching", category: "Volunteer / Teaching" },
      ],
    },
    achievements: { title: "Achievements & Credentials", subtitle: "Recognition from leadership roles, organizations, and programs.", view: "View document" },
    certs: { title: "Certifications", subtitle: "Formal training and professional certifications.", view: "View Certificate", empty: "[Add Certificate]", emptyDesc: "Certification details not added yet." },
    contact: {
      title: "Let's Connect",
      subtitle: "I'm open to internships, collaborative projects, freelance opportunities, and entry-level opportunities where I can learn, contribute, and grow.",
      cta: "Send an email", or: "or reach me on", resume: "Resume",
    },
  },
  id: {
    nav: { about: "Tentang", experience: "Pengalaman", tools: "Tools", exploring: "Eksplorasi", leadership: "Kepemimpinan", achievements: "Pencapaian", certs: "Sertifikasi", contact: "Kontak" },
    hero: {
      badge: "Mahasiswi Teknik Informatika",
      tagline: "Membangun dengan Teknologi, Data & AI",
      support: "Saya mengeksplorasi pengembangan perangkat lunak, data, AI, dan pengalaman digital sambil terus membangun proyek serta mengembangkan kemampuan teknis dan pemecahan masalah.",
      cta1: "Lihat Proyek", cta2: "Lihat Resume", cta3: "GitHub", cta4: "LinkedIn",
    },
    about: {
      title: "Tentang",
      body: "Saya mahasiswi Teknik Informatika di Universitas Sanata Dharma yang mengeksplorasi pengembangan perangkat lunak, data, dan AI. Saya membangun produk digital, memimpin inisiatif kampus dan komunitas, serta terus mengasah kemampuan teknis dan pemecahan masalah.",
    },
    experience: {
      title: "Pengalaman", subtitle: "Peran, komunitas, dan inisiatif yang saya jalani.",
      labels: { responsibilities: "Tanggung Jawab", impact: "Pencapaian & Dampak", skills: "Skill yang dipelajari" },
      items: [
        {
          org: "AI For Everyone", role: "Konten & Komunitas", period: "2025 — Sekarang", tag: "Komunitas AI", metric: "11,6rb+ pengikut",
          desc: "Membantu mendemokratisasi literasi AI di Indonesia lewat media edukatif.",
          responsibilities: ["Merencanakan dan memproduksi konten edukasi AI", "Mendukung interaksi komunitas", "Menjaga ritme publikasi yang konsisten"],
          impact: ["Audiens akun 11,6rb+ pengikut", "Berkontribusi pada konten yang menjangkau audiens luas"],
          skills: ["Strategi konten", "Copywriting", "Manajemen komunitas", "Analitik"],
        },
        {
          org: "Grow With AI", role: "Kontributor", period: "2026 — Sekarang", tag: "EdTech", metric: "Platform belajar",
          desc: "Platform belajar AI agar orang lebih produktif dan siap masa depan.",
          responsibilities: ["Berkontribusi materi edukasi tentang tools AI", "Berkolaborasi dalam perencanaan konten"],
          impact: ["Mendukung pustaka konten awal platform"],
          skills: ["Konten edukasi", "Kolaborasi", "Tools AI"],
        },
        {
          org: "GenDigital Academy Yogyakarta", role: "Head of Social Media Division", period: "2025 — 2026", tag: "Skill Digital", metric: "Ketua Divisi",
          desc: "Memimpin Divisi Social Media cabang Yogyakarta — strategi konten, brand voice, dan pertumbuhan komunitas.",
          responsibilities: ["Memimpin divisi social media dan anggotanya", "Menentukan strategi konten dan brand voice", "Mengatur jadwal publikasi lintas platform"],
          impact: ["Menerima sertifikat apresiasi sebagai Head of Social Media Division"],
          skills: ["Kepemimpinan tim", "Komunikasi brand", "Strategi media sosial"],
        },
        {
          org: "BEM FST USD — MEDKOMINFO", role: "Anggota", period: "Nov 2024 — Nov 2025", tag: "BEM", metric: "Tingkat Fakultas",
          desc: "Anggota BEM Fakultas Sains & Teknologi, divisi Media & Komunikasi.",
          responsibilities: ["Membuat materi media dan publikasi", "Mendukung komunikasi acara fakultas"],
          impact: ["Berkontribusi pada aktivitas komunikasi tingkat fakultas"],
          skills: ["Komunikasi visual", "Kerja tim", "Publikasi acara"],
        },
      ],
    },
    tools: { title: "Software & AI Stack", subtitle: "Tools dan teknologi yang saya pakai dan terus pelajari.", learning: "Belajar" },
    exploring: {
      title: "Yang Sedang Saya Eksplorasi", subtitle: "Bidang yang sedang saya pelajari dan kembangkan.",
      items: [
        { name: "Software Development", desc: "Membangun aplikasi dan memahami kode yang rapi dan mudah dirawat." },
        { name: "Data Analytics", desc: "Mengubah data mentah menjadi insight yang berguna." },
        { name: "Artificial Intelligence", desc: "Menerapkan tools AI dan memahami cara kerjanya." },
        { name: "System Development", desc: "Merancang bagaimana sistem dan komponennya saling terhubung." },
        { name: "Business Intelligence", desc: "Dashboard dan pelaporan yang mendukung keputusan." },
        { name: "Digital Technology", desc: "Produk digital, platform, dan pengalaman di sekitarnya." },
      ],
    },
    leadership: {
      title: "Kepemimpinan & Organisasi", subtitle: "Pengalaman kepemimpinan, organisasi, komunitas, dan volunteer.",
      items: [
        { title: "Ketua Panitia — Pelepasan Wisuda September 2025", org: "FST USD", period: "Sep 2025", desc: "Memimpin panitia acara pelepasan wisuda tingkat fakultas di Universitas Sanata Dharma.", highlight: "Ketua Panitia", category: "Kepemimpinan" },
        { title: "Head of Social Media Division", org: "GenDigital Academy Yogyakarta", period: "2025 — 2026", desc: "Memimpin divisi social media: strategi konten, brand voice, dan pertumbuhan komunitas.", highlight: "Ketua Divisi", category: "Kepemimpinan" },
        { title: "Anggota MEDKOMINFO BEM FST", org: "Universitas Sanata Dharma", period: "2024 — 2025", desc: "Mendukung media dan komunikasi BEM Fakultas Sains & Teknologi.", highlight: "BEM Fakultas", category: "Organisasi" },
        { title: "Kontributor Komunitas AI", org: "AI For Everyone × Grow With AI", period: "2025 — Sekarang", desc: "Membuat konten edukasi untuk komunitas AI.", highlight: "Komunitas", category: "Komunitas" },
        { title: "Berbagi Skill Digital", org: "GenDigital Academy Yogyakarta", period: "2025 — 2026", desc: "Berbagi keterampilan digital dan materi belajar kepada komunitas.", highlight: "Mengajar", category: "Volunteer / Mengajar" },
      ],
    },
    achievements: { title: "Pencapaian & Kredensial", subtitle: "Apresiasi dari peran kepemimpinan, organisasi, dan program.", view: "Lihat dokumen" },
    certs: { title: "Sertifikasi", subtitle: "Pelatihan formal dan sertifikasi profesional.", view: "Lihat Sertifikat", empty: "[Tambah Sertifikat]", emptyDesc: "Detail sertifikasi belum ditambahkan." },
    contact: {
      title: "Mari Terhubung",
      subtitle: "Saya terbuka untuk magang, proyek kolaboratif, peluang freelance, dan posisi entry-level di mana saya bisa belajar, berkontribusi, dan bertumbuh.",
      cta: "Kirim email", or: "atau hubungi via", resume: "Resume",
    },
  },
};

type DictType = typeof dict.en;
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: DictType }>({ lang: "en", setLang: () => {}, t: dict.en });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>;
}
export const useI18n = () => useContext(Ctx);
