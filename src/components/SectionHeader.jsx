export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 bg-gold-500/10 border border-gold-500/20 px-4 py-1.5 rounded-full mb-4">
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
