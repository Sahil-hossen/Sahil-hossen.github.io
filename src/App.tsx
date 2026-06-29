import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import { profile } from "./data/portfolio";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            Designed &amp; built by {profile.name} ·{" "}
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            ·{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
