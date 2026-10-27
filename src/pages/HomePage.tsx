import AboutSection from "../components/AboutSection";
import GitHubContribution from "../components/GitHubContribution";
import ProfilePortrait from "../components/ProfilePortrait";

const HomePage = () => {
  return (
    <main>
      <header className="h-auto flex flex-col md:flex-row gap-3 items-center">
        <ProfilePortrait />
        <AboutSection />
      </header>
      <GitHubContribution />
    </main>
  );
};

export default HomePage;
