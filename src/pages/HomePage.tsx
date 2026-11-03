import AboutSection from "../components/AboutSection";
import Experience from "../components/Experience";
import GitHubContribution from "../components/GitHubContribution";
import Privacy from "../components/Privacy";
import ProfilePortrait from "../components/ProfilePortrait";
import ProjectDeck from "../components/ProjectDeck";
import Whyme from "../components/Whyme";

const HomePage = () => {
  return (
    <main className="pb-12">
      <header className="h-auto flex flex-col md:flex-row gap-3 items-center">
        <ProfilePortrait />
        <AboutSection />
      </header>
      <GitHubContribution />
      <ProjectDeck />
      <Experience />
      <Whyme />
      <Privacy/>
    </main>
  );
};

export default HomePage;
