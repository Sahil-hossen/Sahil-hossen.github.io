import Section from "./Section";
import { education } from "../data/portfolio";

export default function About() {
  return (
    <Section id="about" kicker="01 / About" title="Who I am">
      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a <strong>Software Development Engineer</strong> from NIT
            Agartala who enjoys taking features from a blank file all the way to
            production — API design, implementation, automated testing,
            deployment, and monitoring.
          </p>
          <p>
            Most recently at <strong>Amdocs</strong>, I built production GenAI
            systems: a <strong>RAG pipeline</strong> for source-cited code
            answers, a serverless <strong>voucher microservice</strong>, and a
            documentation tool powered by AWS Bedrock. I care about clean APIs,
            reliable tests, and shipping things that hold up under real traffic.
          </p>
          <p>
            My toolkit spans <strong>Python, TypeScript, React, NestJS,
            Node.js</strong>, SQL, and <strong>AWS</strong> (Bedrock, Lambda, S3,
            DynamoDB) — with CI/CD and observability baked in.
          </p>
        </div>

        <aside className="edu-card">
          <h3>Education</h3>
          {education.map((e) => (
            <div className="edu-item" key={e.school}>
              <div className="edu-school">{e.school}</div>
              <div className="edu-detail">{e.detail}</div>
              <div className="edu-meta">
                {e.period} · {e.location}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  );
}
