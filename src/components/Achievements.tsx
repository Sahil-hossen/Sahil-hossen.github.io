import Section from "./Section";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <Section id="achievements" kicker="05 / Achievements" title="Highlights">
      <div className="ach-grid">
        {achievements.map((a, i) => (
          <div className="ach-card" key={i}>
            <span className="ach-num">0{i + 1}</span>
            <p>{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
