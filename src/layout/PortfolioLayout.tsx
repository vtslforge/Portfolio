import SiteHeader from "../components/SiteHeader";
import HomePage from "../pages/HomePage";

const PortfolioLayout = () => {
  return (
    <main className="h-screen w-screen flex justify-center text-white">
      <SiteHeader />
      <section className="w-full sm:w-full md:w-full lg:w-[78vw] xl:w-[66vw] 2xl:w-[45vw] p-3 mt-[6vh]">
        <HomePage />
      </section>
    </main>
  );
};

export default PortfolioLayout;
