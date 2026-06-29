import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/portfolio";
import { MailIcon, LinkedinIcon, GithubIcon } from "./icons";

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-kicker">06 / Contact</span>
          <h2 className="section-title gradient-text">Let&apos;s build something</h2>
          <p>
            I&apos;m open to software engineering opportunities and interesting
            collaborations. The fastest way to reach me is email — I&apos;ll get
            back to you quickly.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <MailIcon /> Say hello
            </a>
            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
