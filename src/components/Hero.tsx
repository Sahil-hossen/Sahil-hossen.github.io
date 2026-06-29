import { profile } from "../data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  DownloadIcon,
  ArrowIcon,
} from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <span className="hero-badge">
          <span className="pulse" />
          Open to Software Engineering roles
        </span>

        <h1>
          Hi, I&apos;m <span className="gradient-text">Sahil Hossen</span>
        </h1>

        <p className="hero-role">
          {profile.title} <span className="accent">·</span> CSE, NIT Agartala
        </p>

        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work <ArrowIcon />
          </a>
          <a
            className="btn btn-ghost"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            <DownloadIcon /> Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            <MailIcon /> {profile.email}
          </a>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to about">
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
        <span className="scroll-hint-text">Scroll</span>
      </a>
    </section>
  );
}
