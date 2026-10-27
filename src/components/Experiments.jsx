import { experiments } from "../data/experiments";
import ExperimentScene from "./ExperimentScene";

const Experiments = () => {
  return (
    <section id="experiments" className="section">
      <h2 className="heading">Experiments</h2>
      <p className="mt-4 max-w-2xl text-muted">
        Concept video designs for apps I use every day. These are speculative pieces for practice and are not affiliated with any of these brands.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiments.map((experiment) => (
          <article key={experiment.brand} className={`flex flex-col items-center rounded-3xl p-8 text-center transition hover:-translate-y-1 ${experiment.tint}`}>
            <div className="phone">
              <ExperimentScene scene={experiment.scene} />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Concept for {experiment.brand}</p>
            <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{experiment.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{experiment.brief}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiments;
