// Sky-blue backdrop with a torn white sheet, ruled lines, and flat stationery icons.
// Drawn from scratch in SVG and CSS. It is not copied from any existing artwork.

const StationeryBackdrop = () => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#6fb6d8]">
      <div className="paper-sheet absolute inset-x-5 inset-y-10" />

      <svg className="hero-blob absolute -right-3 -top-2 h-24 w-8 rotate-[28deg]" viewBox="0 0 32 96" aria-hidden="true">
        <rect x="6" y="18" width="20" height="70" fill="#5fb37a" />
        <polygon points="6,18 26,18 16,2" fill="#f2d39b" />
        <rect x="6" y="88" width="20" height="8" fill="#e98a8a" />
      </svg>

      <svg className="hero-blob absolute -left-2 top-6 h-20 w-20 -rotate-12" viewBox="0 0 80 80" aria-hidden="true">
        <rect x="6" y="2" width="68" height="76" rx="8" fill="#f6a33a" />
        <rect x="14" y="10" width="52" height="16" rx="3" fill="#fff4dc" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <rect key={`${r}-${c}`} x={14 + c * 18} y={34 + r * 13} width="12" height="9" rx="2" fill="#fff4dc" />
          ))
        )}
      </svg>

      <svg className="hero-blob absolute right-6 top-4 h-14 w-9 rotate-[18deg]" viewBox="0 0 36 60" fill="none" stroke="#f08a3c" strokeWidth="3" aria-hidden="true">
        <path d="M10 46 V14 a6 6 0 0 1 12 0 V42 a4 4 0 0 1 -8 0 V18" />
      </svg>

      <svg className="hero-blob absolute -bottom-3 right-2 h-12 w-40 rotate-[-6deg]" viewBox="0 0 160 48" aria-hidden="true">
        <rect x="0" y="6" width="160" height="36" rx="6" fill="#8fd3c7" />
        {range(12).map((i) => (
          <rect key={i} x={12 + i * 12} y="6" width="2" height={i % 2 ? 10 : 16} fill="#2f6f66" />
        ))}
      </svg>
    </div>
  );
};

const range = (n) => Array.from({ length: n }, (_, i) => i);

export default StationeryBackdrop;
