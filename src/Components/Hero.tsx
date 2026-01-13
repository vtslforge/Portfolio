import { RiGithubFill } from "@remixicon/react";
const Hero = () => {
  return (
    <main className="min-h-screen pt-15 md:p-15 flex flex-col justify-evenly p-3 pb-0 2xl:items-center"id="home">
      <header className="flex h-2/3 flex-col md:flex-row 2xl:w-3/4 font-poppins" >
        <section className="flex flex-col justify-center gap-6 md:gap-15 md:w-1/2">
          <h1 className="text-4xl md:text-5xl xl:text-7xl">
            Hi, I'm a{" "}
            <span className="text-[#00F5FF]">full-stack developer</span> in
            progress
          </h1>
          <h1 className="text-lg xl:text-2xl">
            I care deeply about scalability, performance, and SEO, because great
            products should grow fast and stay visible
          </h1>
          <a
            href="https://github.com/vtslforge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vatsalya github profile"
            className="flex border w-fit p-2 rounded-2xl border-white/30 gap-2 cursor-pointer"
          >
            <RiGithubFill />
            Github
          </a>
        </section>
        <section className="md:w-1/2 flex justify-center items-center">
          <img className="aspect-square" src="/awww.png"></img>
        </section>
      </header>
      <article className="h-1/3 flex justify-center items-center">
        <section className="absolute text-center w-fit text-lg p-3 md:p-6 rounded-2xl border">
          <p className="text-sm font-poppins">
            With great code comes great console warnings💪
          </p>
          <span className="absolute -top-6 h-10 bg-black text-7xl left-5 rounded-full font-mono">
            "
          </span>
        </section>
      </article>
    </main>
  );
};

export default Hero;
