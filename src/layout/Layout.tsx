import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <main className=" h-screen w-screen flex justify-center text-white">
      <Navbar />
      <section className=" w-full sm:w-full md:w-full lg:w-[78vw] xl:w-[66vw] 2xl:w-[45vw] p-3 mt-[6vh]">
        <Home />
      </section>
    </main>
  );
};

export default Layout;
