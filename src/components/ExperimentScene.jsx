// Looping phone-screen animations for the Experiments section.
// Each `scene` key in src/data/experiments.js picks one of these.

const range = (n) => Array.from({ length: n }, (_, i) => i);

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
          <span key={text} className="exp-float absolute bottom-4 rounded-full bg-white px-3 py-1 text-[10px] font-medium shadow" style={{ "--i": i, ...(i === 0 ? { left: "10%", bottom: "38%" } : { right: "10%", bottom: "16%" }) }}>
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

  return null;
};

export default ExperimentScene;
