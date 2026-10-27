// Small looping animations that match what each project is about.
// The `visual` key on each project in src/data picks one of these.

const range = (n) => Array.from({ length: n }, (_, i) => i);

const ProjectVisual = ({ type }) => {
  if (type === "streak")
    // Daily streak: dots light up one after another, like a habit building up
    return (
      <div className="viz flex items-center justify-center gap-2.5">
        {range(7).map((i) => (
          <span key={i} className="viz-dot" style={{ "--i": i }} />
        ))}
      </div>
    );

  if (type === "pipeline")
    // Seven onboarding gates lighting up in sequence
    return (
      <div className="viz flex items-center justify-center gap-1.5">
        {range(7).map((i) => (
          <span key={i} className="viz-gate" style={{ "--i": i }} />
        ))}
      </div>
    );

  if (type === "bars")
    // Unit economics: bars growing up
    return (
      <div className="viz flex items-end justify-center gap-3 pb-4">
        {[30, 48, 36, 62, 80].map((h, i) => (
          <span key={i} className="viz-bar" style={{ "--i": i, height: `${h}%` }} />
        ))}
      </div>
    );

  if (type === "line")
    // Research trend: a line drawing itself upward
    return (
      <div className="viz flex items-center justify-center">
        <svg viewBox="0 0 200 80" className="h-full w-full px-4 py-3" fill="none">
          <path d="M5 70 L50 55 L90 60 L130 35 L195 10" className="viz-line" pathLength="100" />
        </svg>
      </div>
    );

  if (type === "orbit")
    // Equilibrium: two players circling a shared point
    return (
      <div className="viz flex items-center justify-center">
        <div className="viz-orbit">
          <span className="viz-orbit-dot bg-pink" />
          <span className="viz-orbit-dot bg-purple" style={{ transform: "rotate(180deg) translateY(-28px)" }} />
        </div>
      </div>
    );

  if (type === "wave")
    // Audio: equalizer bars
    return (
      <div className="viz flex items-center justify-center gap-1">
        {range(18).map((i) => (
          <span key={i} className="viz-wave" style={{ "--i": i }} />
        ))}
      </div>
    );

  if (type === "funnel")
    // Conversion funnel with leads dropping through it
    return (
      <div className="viz relative flex flex-col items-center justify-center gap-1.5 overflow-hidden">
        {[72, 52, 32].map((w, i) => (
          <span key={i} className="h-2.5 rounded-full bg-pink/80" style={{ width: `${w}%` }} />
        ))}
        {range(4).map((i) => (
          <span key={i} className="viz-drop" style={{ "--i": i }} />
        ))}
      </div>
    );

  if (type === "doc")
    // A PRD being written, with a scanning highlight
    return (
      <div className="viz flex flex-col justify-center gap-2.5 px-8">
        {[90, 75, 85, 55].map((w, i) => (
          <span key={i} className="viz-doc-line" style={{ width: `${w}%`, "--i": i }} />
        ))}
      </div>
    );

  return null;
};

export default ProjectVisual;
