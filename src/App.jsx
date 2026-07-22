import { Phone, MapPin } from "lucide-react";
import packages from "./data/packages";
import SectionHeader from "./components/SectionHeader";
import PriceCard from "./components/PriceCard";

const sections = [
  {
    key: "A",
    label: "Bagian A",
    title: "Layanan Konsultasi Bazi",
    subtitle: "Personal Destiny — Mengenal Takdir Bawaan & Potensi Diri",
  },
  {
    key: "B",
    label: "Bagian B",
    title: "Layanan Konsultasi Fengshui",
    subtitle: "Property & Business — Harmonisasi Energi Tempat Tinggal & Usaha",
  },
  {
    key: "C",
    label: "Bagian C",
    title: "Paket Bundling",
    subtitle: "Rekomendasi Solusi Tuntas — Penyelarasan Total Manusia & Lingkungan",
  },
  {
    key: "D",
    label: "Bagian D",
    title: "Layanan Khusus — Mystery Box",
    subtitle: "Untuk klien dengan permasalahan berat yang memerlukan penanganan langsung dan ritual",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[100px]" />
          <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/50" />
            <span className="text-gold-400 text-2xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Price List{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
              Konsultasi
            </span>{" "}
            Bazi & Fengshui
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Temukan paket konsultasi yang paling sesuai dengan kebutuhan Anda.
            Setiap paket dirancang untuk memberikan wawasan mendalam tentang
            takdir, potensi diri, dan harmoni lingkungan.
          </p>
        </div>
      </header>

      {/* ── PRICING SECTIONS ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 space-y-24">
        {sections.map((sec) => {
          const sectionPackages = packages.filter((p) => p.category === sec.key);
          if (sectionPackages.length === 0) return null;

          return (
            <section key={sec.key}>
              <SectionHeader
                label={sec.label}
                title={sec.title}
                subtitle={sec.subtitle}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {sectionPackages.map((pkg) => (
                  <PriceCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* ── FOOTER NOTES ── */}
      <footer className="border-t border-dark-600/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-gold-400" />
              Catatan Penting — Layanan Visit / Kunjungan Lokasi
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Khusus untuk layanan konsultasi Fengshui (Paket Fengshui Komprehensif)
              dan Paket Misteri yang memerlukan kunjungan langsung ke luar area
              Jabodetabek, biaya transportasi (tiket pesawat/kereta) dan akomodasi
              ditanggung sepenuhnya oleh klien di luar harga paket yang tertera.
              Besaran biaya untuk properti dengan luas yang ekstrem (misal: pabrik
              besar/kawasan industri) juga dapat disesuaikan.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Phone size={14} className="text-gold-400" />
              <span>
                Hubungi kami via WhatsApp untuk konsultasi lebih lanjut
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
