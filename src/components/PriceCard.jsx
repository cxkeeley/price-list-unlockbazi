import { Check, Sparkles, ArrowRight } from "lucide-react";

const WA_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "6281234567890";

export default function PriceCard({ pkg }) {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pkg.waMessage)}`;

  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-8 flex flex-col relative ${
        pkg.featured ? "featured" : ""
      }`}
    >
      {/* Featured badge */}
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1.5 shadow-lg shadow-gold-500/20">
          <Sparkles size={14} />
          <span>POPULER</span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
          {pkg.name}
        </h3>
        <p className="text-gold-400 text-sm font-medium mt-1">{pkg.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className="font-display text-3xl sm:text-4xl font-bold text-gold-300">
          {pkg.price}
        </span>
      </div>

      {/* Focus */}
      <p className="text-slate-300 text-sm mb-5 italic border-l-2 border-gold-500/40 pl-3">
        “{pkg.focus}”
      </p>

      {/* Includes */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {pkg.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check size={16} className="text-gold-400 mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Format */}
      <div className="mb-5 text-xs text-slate-400 bg-dark-600/50 rounded-lg px-3 py-2 border border-dark-500/50">
        <span className="text-gold-300 font-semibold">Format: </span>
        {pkg.format}
      </div>

      {/* Note */}
      {pkg.note && (
        <div className="mb-5 text-xs text-gold-200/70 bg-gold-500/5 rounded-lg px-3 py-2 border border-gold-500/10">
          {pkg.note}
        </div>
      )}

      {/* CTA */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-dark-900 font-semibold text-sm py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40"
      >
        <span>Pilih Paket Ini</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}
