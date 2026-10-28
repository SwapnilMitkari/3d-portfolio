import { growth } from "../data/growth";

const Growth = () => {
  return (
    <section id="growth" className="section">
      <h2 className="heading">Growth and partnerships</h2>
      <p className="mt-4 max-w-2xl text-muted">
        Where I've turned partner, merchant and customer conversations into measurable results.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {growth.map((item) => (
          <article key={item.title} className="rounded-3xl border border-line bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.label}</p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-snug">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Growth;
