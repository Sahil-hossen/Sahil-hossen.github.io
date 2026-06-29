import Section from "./Section";
import { projects } from "../data/portfolio";
import { CodeIcon, ArrowIcon, GithubIcon, MergeIcon } from "./icons";
import { handleSpotlight } from "../lib/spotlight";

export default function Projects() {
  return (
    <Section id="projects" kicker="03 / Projects" title="Things I've built">
      <div className="projects-grid">
        {projects.map((p) => (
          <article
            className="project-card glow-card"
            key={p.name}
            onMouseMove={handleSpotlight}
          >
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

            {(p.demo || p.link) && (
              <div className="project-actions">
                {p.demo && (
                  <a
                    className="project-demo"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="live-dot" /> Live Demo <ArrowIcon />
                  </a>
                )}
                {p.link && (
                  <a
                    className="project-link"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon size={15} /> Code
                  </a>
                )}
              </div>
            )}

            {p.prs && (
              <div className="project-prs">
                {p.prs.map((pr) => (
                  <a
                    key={pr.url}
                    className="pr-link"
                    href={pr.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MergeIcon size={14} /> {pr.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
