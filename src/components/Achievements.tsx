import Section from "./Section";
import { achievements } from "../data/portfolio";
import { handleSpotlight } from "../lib/spotlight";

export default function Achievements() {
  return (
    <Section id="achievements" kicker="05 / Achievements" title="Highlights">
      <div className="ach-grid">
        {achievements.map((a, i) => (
          <div className="ach-card glow-card" key={i} onMouseMove={handleSpotlight}>
            <span className="ach-num">0{i + 1}</span>
            <p>{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
