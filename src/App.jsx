import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import { profile, skills, projects } from "./data";

function App() {
  return (
    <>
      <Header name={profile.name} />

      <main>
        <Hero
          name={profile.name}
          title={profile.title}
          about={profile.about}
        />

        <Section id="skills" title="უნარები">
          <SkillList skills={skills} />
        </Section>

        <Section id="projects" title="პროექტები">
          <ProjectList projects={projects} />
        </Section>

        <Section id="contact" title="კონტაქტი">
          <p>
            მომწერე: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </Section>
      </main>

      <Footer name={profile.name} />
    </>
  );
}

export default App;