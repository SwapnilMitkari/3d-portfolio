// Looping phone-screen animations for the Experiments section.
// Each `scene` key in src/data/experiments.js picks one of these.

const range = (n) => Array.from({ length: n }, (_, i) => i);

// 5x5 QR-style grid. 1 = filled module.
const qrPattern = "1110101101001011101100110";

const ExperimentScene = ({ scene }) => {
  if (scene === "route")
    return (
      <div className="relative h-full bg-sky-50">
        <div className="absolute left-6 right-6 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-ink/10" />
        <div className="exp-route-fill absolute left-6 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent" />
        <span className="exp-route-car absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-ink" />
        <span className="absolute right-6 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-pink" />
        <div className="absolute bottom-4 left-4 right-4 rounded-full bg-white px-3 py-1.5 text-center text-[10px] font-semibold">
          Arriving in 4 min
        </div>
      </div>
    );

  if (scene === "speed")
    return (
      <div className="relative flex h-full flex-col justify-center gap-5 overflow-hidden bg-ink px-4">
        {range(5).map((i) => (
          <span key={i} className="exp-speed h-0.5 rounded-full bg-amber-300" style={{ "--i": i, width: `${40 + i * 8}%` }} />
        ))}
        <div className="mx-auto rounded-full bg-amber-300 px-4 py-1.5 text-xs font-bold text-ink">RIDE</div>
      </div>
    );

  if (scene === "bowl")
    return (
      <div className="relative flex h-full items-end justify-center overflow-hidden bg-orange-50 pb-6">
        {["bg-green-400", "bg-red-400", "bg-yellow-300", "bg-pink"].map((color, i) => (
          <span key={i} className={`exp-drop-in absolute top-6 h-5 w-5 rounded-full ${color}`} style={{ "--i": i, left: `${30 + i * 13}%` }} />
        ))}
        <div className="h-16 w-36 rounded-b-full border-4 border-ink bg-white" />
      </div>
    );

  if (scene === "rating")
    return (
      <div className="relative flex h-full flex-col items-center justify-center gap-3 bg-rose-50">
        <div className="flex gap-1 text-2xl">
          {range(5).map((i) => (
            <span key={i} className="exp-star" style={{ "--i": i }}>★</span>
          ))}
        </div>
        {["Great flavour", "Fast delivery"].map((text, i) => (
          <span
            key={text}
            className="exp-float absolute rounded-full bg-white px-3 py-1 text-[10px] font-medium shadow"
            style={{ "--i": i, ...(i === 0 ? { left: "10%", bottom: "38%" } : { right: "10%", bottom: "16%" }) }}
          >
            {text}
          </span>
        ))}
      </div>
    );

  if (scene === "countdown")
    return (
      <div className="relative flex h-full flex-col justify-center gap-4 bg-emerald-50 px-5">
        <p className="text-center font-display text-2xl font-semibold">10 min</p>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white">
          <div className="exp-shrink h-full bg-emerald-500" />
        </div>
        <div className="flex justify-center gap-2">
          {range(3).map((i) => (
            <span key={i} className="exp-pop h-7 w-7 rounded-lg bg-white shadow" style={{ "--i": i }} />
          ))}
        </div>
      </div>
    );

  if (scene === "qr")
    return (
      <div className="relative flex h-full flex-col items-center justify-center gap-4 bg-white">
        <div className="relative overflow-hidden rounded-xl border-4 border-ink p-2">
          <div className="grid grid-cols-5 gap-0.5">
            {qrPattern.split("").map((cell, i) => (
              <span key={i} className={`h-3 w-3 rounded-[2px] ${cell === "1" ? "bg-ink" : "bg-transparent"}`} />
            ))}
          </div>
          <span className="exp-scan absolute left-0 right-0 h-0.5 bg-pink" />
        </div>
        <div className="exp-paid rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold text-white">Paid ₹480</div>
      </div>
    );

  if (scene === "checkout")
    return (
      <div className="relative flex h-full flex-col justify-center gap-2 bg-slate-50 px-4">
        {["UPI", "Card •••• 4821", "Netbanking"].map((method, i) => (
          <div
            key={method}
            className={`rounded-xl border-2 bg-white px-3 py-2 text-[10px] font-medium shadow-sm ${i === 0 ? "exp-select border-pink" : "border-transparent"}`}
          >
            {method}
          </div>
        ))}
        <div className="exp-pay mt-2 rounded-xl bg-ink py-2 text-center text-[11px] font-semibold text-white">Pay ₹480</div>
      </div>
    );

  if (scene === "retry")
    return (
      <div className="relative flex h-full items-center justify-center bg-amber-50 px-4">
        <div className="exp-status-a absolute rounded-full bg-red-500 px-4 py-2 text-[11px] font-semibold text-white">Payment failed</div>
        <div className="exp-status-b absolute rounded-full bg-amber-400 px-4 py-2 text-[11px] font-semibold text-ink">Retrying…</div>
        <div className="exp-status-c absolute rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-white">Payment successful</div>
      </div>
    );

  return null;
};

export default ExperimentScene;
