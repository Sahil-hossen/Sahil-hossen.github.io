import Section from "./Section";
import { experience } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <Section id="experience" kicker="02 / Experience" title="Where I've worked">
      <div className="timeline">
        {experience.map((exp) => (
          <article className="exp-card" key={exp.company}>
            <div className="exp-top">
              <h3 className="exp-company">{exp.company}</h3>
              <span className="exp-period">{exp.period}</span>
            </div>
            <div className="exp-role">
              <span>{exp.role}</span>
              <span className="loc">{exp.location}</span>
            </div>
            <ul className="exp-points">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
