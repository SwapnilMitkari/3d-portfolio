import { experiences, profile } from "../data";

const About = () => {
  return (
    <section id="about" className="section">
      <p className="text-xl font-semibold leading-relaxed sm:text-2xl">
        I'm a product manager who lives where banking infrastructure meets the people who use it.
      </p>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">{profile.about}</p>

      <div className="mt-20">
        <h2 className="heading">Experience</h2>
        <ol className="mt-12 space-y-12">
          {experiences.map((experience) => (
            <li key={experience.company_name + experience.title} className="grid gap-4 border-t border-line pt-8 md:grid-cols-[180px_1fr]">
              <div>
                <p className="text-sm text-muted">{experience.date}</p>
                <p className="mt-1 font-semibold text-accent">{experience.company_name}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <ul className="mt-4 space-y-3 text-muted">
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
      </div>
    </section>
  );
};

export default About;
