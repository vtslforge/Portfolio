import AboutSection from "../components/AboutSection";
import Experience from "../components/Experience";
import GitHubContribution from "../components/GitHubContribution";
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

      <footer className="mt-10 border-t border-amber-50/10 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs md:text-sm text-(--color-primary-text)">
            © {new Date().getFullYear()} Vatsalya Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
