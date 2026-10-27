import { projects } from "../data";

const tints = ["bg-violet-100", "bg-emerald-100", "bg-orange-100", "bg-sky-100", "bg-fuchsia-100", "bg-amber-100", "bg-rose-100"];

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-pink hover:underline">
    {children} →
  </a>
);

const Work = () => {
  return (
    <section id="work" className="section">
      <h2 className="heading">Selected work</h2>
      <p className="mt-4 max-w-2xl text-muted">Shipped product work, research, and a few things I built just because they were fun.</p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.name} className={`flex flex-col rounded-3xl p-8 transition hover:-translate-y-1 ${tints[index % tints.length]}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{project.tag}</p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-snug">{project.name}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">{project.description}</p>

            {project.audioUrl && (
              <audio controls className="mt-6 w-full">
                <source src={project.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {project.link && project.link !== "#" && <ExternalLink href={project.link}>{project.linkLabel || "View"}</ExternalLink>}
              {project.secondaryLink && <ExternalLink href={project.secondaryLink}>{project.secondaryLabel}</ExternalLink>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
