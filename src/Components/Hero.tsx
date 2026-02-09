import { RiArrowRightUpLine, RiGithubFill, RiMailLine } from "@remixicon/react";

const Hero = () => {
  return (
    <main
      className="min-h-screen px-6 md:px-12 py-20 md:py-24 2xl:items-center flex flex-col justify-center gap-16 font-poppins relative overflow-hidden"
      id="home"
    >
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#00F5FF]/10 blur-3xl cinematic-drift" />
      <div className="absolute -bottom-16 left-0 h-80 w-80 rounded-full bg-[#6d28d9]/10 blur-[120px] cinematic-drift-slow" />
      <header className="flex flex-col gap-14 2xl:w-3/4 2xl:mx-auto">
        <div className="flex flex-col gap-12 items-center">
          <section className="flex flex-col justify-center items-center text-center gap-6 lg:w-3/4 mx-auto">
            <span className="uppercase tracking-[0.35em] text-xs text-[#00F5FF]/80 fade-up">
              Full-stack developer
            </span>
            <h1 className="text-4xl md:text-6xl xl:text-7xl leading-tight fade-up-delayed font-semibold tracking-tight">
              Building <span className="text-[#00F5FF]">scalable</span>, fast,
              and <span className="text-[#00F5FF]">search-friendly</span> web
              products.
            </h1>
            <p className="text-base md:text-lg xl:text-2xl opacity-80 leading-relaxed fade-up-delayed">
              I design and build modern experiences with performance at the core.
              I care about clean architecture, measurable impact, and shipping
              quality.
            </p>
            <div className="flex flex-wrap justify-center gap-6 fade-up-delayed">
              <a
                href="mailto:vtslforge@gmail.com?subject=Hello&body=Hi%20Vatsalya,"
                className="flex items-center gap-2 rounded-2xl border border-[#00F5FF]/50 px-5 py-3 text-sm uppercase tracking-[0.2em] hover:border-[#00F5FF] transition"
              >
                Contact
                <RiMailLine />
              </a>
              <a
                href="https://github.com/vtslforge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vatsalya github profile"
                className="flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.2em] opacity-80 hover:opacity-100 transition"
              >
                Github
                <RiGithubFill />
              </a>
              <a
                href="#project"
                className="flex items-center gap-2 rounded-2xl bg-[#00F5FF]/10 px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#00F5FF] hover:bg-[#00F5FF]/20 transition"
              >
                View Work
                <RiArrowRightUpLine />
              </a>
            </div>
          </section>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Clean UI",
              body: "Designs that feel effortless and easy to navigate.",
            },
            {
              title: "Fast loads",
              body: "Snappy performance that keeps users engaged.",
            },
            {
              title: "Scalable",
              body: "Flexible systems built to grow with your product.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 card-float reveal"
            >
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-sm opacity-70 mt-2">{item.body}</p>
            </article>
          ))}
        </section>
      </header>
      <article className="flex justify-center">
        <section className="relative text-center w-fit text-sm md:text-base px-6 py-4 rounded-2xl border border-white/15 bg-white/5">
          <p className="font-poppins">
            With great code comes great console warnings.
          </p>
        </section>
      </article>
    </main>
  );
};

export default Hero;
