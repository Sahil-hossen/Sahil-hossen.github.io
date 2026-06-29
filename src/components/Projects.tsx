import Section from "./Section";
import { projects } from "../data/portfolio";
import { CodeIcon, ArrowIcon } from "./icons";

export default function Projects() {
  return (
    <Section id="projects" kicker="03 / Projects" title="Things I've built">
      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-head">
              <div>
                {p.featured && <span className="featured-flag">Featured</span>}
                <div className="project-name">{p.name}</div>
              </div>
              <span className="project-icon">
                <CodeIcon />
              </span>
            </div>

            <p className="project-blurb">{p.blurb}</p>

            <ul className="project-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            {p.link && (
              <a
                className="project-link"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <ArrowIcon />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
