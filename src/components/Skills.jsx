import { skills } from "../data";

const groups = ["Business", "Technical"];

const Skills = () => {
  return (
    <section id="skills" className="section !pt-0">
      <h2 className="heading">Skills</h2>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-pink">{group}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {skills
                .filter((skill) => skill.type === group)
                .map((skill) => (
                  <span key={skill.name} className="chip">
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
