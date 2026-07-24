const packages = [
  // ── A. BAZI ──
  {
    id: "basic",
    category: "A",
    section: "Layanan Konsultasi Bazi",
    subtitle: "Personal Destiny",
    name: "Paket Basic",
    tagline: "Global Reading",
    price: "Rp 500.000",
    focus: "Gambaran umum nasib & karakter dasar",
    featured: false,
    includes: [
      "Analisis elemen dominan & lucky elements (penyeimbang)",
      "Gambaran umum potensi karier, kekayaan, & asmara",
      "Pemetaan karakter bawaan, kekuatan & kelemahan",
    ],
    format: "Laporan tertulis singkat (PDF) — Tanpa sesi diskusi",
    waMessage:
      "Halo, saya tertarik dengan Paket Basic (Global Reading) — Rp 500.000. Mohon info lebih lanjut.",
  },
  {
    id: "advanced",
    category: "A",
    section: "Layanan Konsultasi Bazi",
    subtitle: "Personal Destiny",
    name: "Paket Advanced",
    tagline: "Detailed Blueprint",
    price: "Rp 1.500.000",
    focus: "Analisis mendalam dengan timeline keberuntungan",
    featured: false,
    includes: [
      "Semua fitur Paket Basic",
      "Pemetaan siklus keberuntungan 10-tahunan (Da Yun)",
      "Prediksi spesifik 1–2 tahun ke depan (momen ekspansi vs defensif/mitigasi risiko)",
      "Analisis potensi kekayaan (Direct/Indirect Wealth) & arah karier/bisnis ideal",
      "Sesi Q&A (tanya jawab via chat untuk 2–3 pertanyaan)",
    ],
    format: "Laporan tertulis komprehensif (PDF) + Q&A via Chat",
    waMessage:
      "Halo, saya tertarik dengan Paket Advanced (Detailed Blueprint) — Rp 1.500.000. Mohon info lebih lanjut.",
  },
  {
    id: "premium",
    category: "A",
    section: "Layanan Konsultasi Bazi",
    subtitle: "Personal Destiny",
    name: "Paket Premium",
    tagline: "Private 1-on-1 Session",
    price: "Rp 3.500.000",
    focus: "Bedah tuntas, interaktif, & solusi personal",
    featured: true,
    includes: [
      "Laporan tertulis komprehensif (Paket Advanced)",
      "Sesi Live Private (Zoom / Tatap Muka) durasi 60–90 menit",
      "Diskusi 2 arah untuk membedah masalah spesifik (karier, bisnis, keluarga, dll)",
      "Gratis cek kecocokan bagan (compatibility) dengan 1 orang tambahan (pasangan / rekan bisnis)",
    ],
    format: "Laporan PDF + Sesi Konsultasi Live",
    note: "Sesi Tatap Muka: Sangat terbatas & hanya tersedia Sabtu/Minggu dengan janji temu sebelumnya",
    waMessage:
      "Halo, saya tertarik dengan Paket Premium (Private 1-on-1 Session) — Rp 3.500.000. Mohon info lebih lanjut.",
  },

  // ── B. FENGSHUI ──
  {
    id: "fengshui-dasar",
    category: "B",
    section: "Layanan Konsultasi Fengshui",
    subtitle: "Property & Business",
    name: "Paket Fengshui Dasar",
    tagline: "Floor Plan Analysis — Online",
    price: "Rp 1.500.000",
    focus: "Evaluasi dasar energi bangunan (Rumah/Tempat Usaha)",
    featured: false,
    includes: [
      "Analisis arah hadap & arah duduk bangunan",
      "Pemetaan sektor energi baik dan buruk (Flying Star dasar)",
      "Rekomendasi penempatan fungsi ruangan utama (pintu, kamar, dapur)",
    ],
    format: "Laporan tertulis (PDF) berdasarkan denah berskala dari klien",
    waMessage:
      "Halo, saya tertarik dengan Paket Fengshui Dasar (Floor Plan Analysis) — Rp 1.500.000. Mohon info lebih lanjut.",
  },
  {
    id: "fengshui-komprehensif",
    category: "B",
    section: "Layanan Konsultasi Fengshui",
    subtitle: "Property & Business",
    name: "Paket Fengshui Komprehensif",
    tagline: "Business & Wealth Audit",
    price: "Rp 5.000.000",
    focus: "Audit mendalam untuk optimalisasi rezeki & mitigasi kebocoran harta",
    featured: true,
    includes: [
      "Analisis presisi letak pintu, kasir, brankas, dan meja kerja (untuk bisnis)",
      "Penempatan posisi air dan api (dapur) untuk hindari konflik energi",
      "Strategi taktis (remedy) netralisir sektor energi negatif/sakit",
      "Pemilihan hari baik (Date Selection) untuk renovasi, pindah, grand opening",
    ],
    format: "Kunjungan langsung / Sesi Zoom mendetail + Blueprint Laporan PDF",
    note: "*Biaya transportasi luar Jabodetabek ditanggung klien",
    waMessage:
      "Halo, saya tertarik dengan Paket Fengshui Komprehensif (Business & Wealth Audit) — Rp 5.000.000. Mohon info lebih lanjut.",
  },

  // ── C. BUNDLING ──
  {
    id: "ultimate",
    category: "C",
    section: "Paket Bundling",
    subtitle: "Rekomendasi Solusi Tuntas",
    name: "Paket Ultimate Master Blueprint",
    tagline: "BaZi Premium + Fengshui Komprehensif",
    price: "Rp 7.500.000",
    focus: "Penyelarasan total antara takdir bawaan dan lingkungan",
    featured: true,
    includes: [
      "Layanan lengkap dari Paket BaZi Premium (termasuk 1-on-1 Session)",
      "Layanan lengkap dari Paket Fengshui Komprehensif",
      "Action Plan terintegrasi: menambal kelemahan elemen diri via penyesuaian properti",
    ],
    format: "Solusi paling efektif untuk bisnis stuck atau kebocoran finansial ekstrem",
    note: "Hemat Rp 1.000.000 dibanding beli terpisah",
    waMessage:
      "Halo, saya tertarik dengan Paket Ultimate Master Blueprint — Rp 7.500.000. Mohon info lebih lanjut.",
  },

  // ── D. MYSTERY BOX ──
  {
    id: "mystery-box",
    category: "D",
    section: "Layanan Khusus",
    subtitle: "Mystery Box — Tatap Muka Langsung",
    name: "Paket Misteri",
    tagline: "Private Session + Ritual",
    price: "Rp 15.000.000 — Rp 100.000.000",
    focus: "Solusi untuk masalah besar — bedah langsung, ritual, pendampingan penuh",
    featured: false,
    includes: [
      "Sesi tatap muka langsung (lokasi klien)",
      "Bedah masalah besar secara komprehensif (Bazi + Fengshui + Ritual)",
      "Ritual khusus sesuai permasalahan klien",
      "Pendampingan penuh selama sesi berlangsung",
    ],
    format: "Tatap muka langsung — akomodasi & transportasi di luar paket",
    note: "Harga menyesuaikan berat kasus (Rp 15jt — Rp 100jt). Khusus untuk klien dengan permasalahan berat yang memerlukan penanganan langsung dan ritual. Hubungi kami untuk diskusi lebih lanjut.",
    waMessage:
      "Halo, saya tertarik dengan Paket Misteri (Private Session + Ritual). Mohon info lebih lanjut.",
  },
];

export default packages;
