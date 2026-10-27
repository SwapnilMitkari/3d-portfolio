import { experiences } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">Experience</p>
      <h2 className="heading mt-4">Where I've worked</h2>

      <ol className="mt-14 space-y-14">
        {experiences.map((experience) => (
          <li
            key={experience.company_name + experience.title}
            className="grid gap-6 border-t border-line pt-8 md:grid-cols-[200px_1fr]"
          >
            <div>
              <p className="text-sm font-medium text-muted">{experience.date}</p>
              <p className="mt-2 font-semibold">{experience.company_name}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-snug">{experience.title}</h3>
              <ul className="mt-5 space-y-3 text-muted">
                {experience.points.map((point) => (
                  <li key={point} className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
