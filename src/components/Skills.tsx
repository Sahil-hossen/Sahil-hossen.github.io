import Section from "./Section";
import { skills } from "../data/portfolio";
import { handleSpotlight } from "../lib/spotlight";

export default function Skills() {
  return (
    <Section id="skills" kicker="04 / Skills" title="My toolkit">
      <div className="skills-grid">
        {skills.map((group) => (
          <div
            className="skill-group glow-card"
            key={group.label}
            onMouseMove={handleSpotlight}
          >
            <h3>{group.label}</h3>
            <div className="skill-chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
