const Experience = () => {
  return (
    <main className="mt-12" aria-labelledby="projects-heading">
      {/* Projects Heading */}
      <div className="flex items-center gap-2">
        <img
          src="/pinVar2.svg"
          className="h-4 w-4 -rotate-45"
          alt=""
          aria-hidden="true"
        />

        <h2
          id="projects-heading"
          className="text-sm md:text-[1rem] text-[#b8c572]"
        >
          Experience
        </h2>
      </div>
      {/* Experience */}

      <article className="mt-6 grid grid-cols-[12px_1fr] gap-x-4">
        <div className="relative flex justify-center">
          <span className="absolute top-1 h-2 w-2 rounded-full bg-[#86b88a] z-10" />
          <span className="absolute top-4 bottom-0 w-0.5 bg-amber-50/10" />
        </div>

        <section className="pb-9 min-w-0">
          <p className="text-[#d3869b]">Independent Developer</p>

          <p className="text-(--color-primary-text) text-sm md:text-[1rem] pt-3">
            Working independently on full-stack web development projects,
            exploring modern technologies, and building practical applications.
          </p>
        </section>
        <div className="relative flex justify-center">
          <span className="absolute top-1 h-2 w-2 rounded-full bg-[#d3869b] z-10" />
        </div>

        <section className="min-w-0">
          <p className="text-[#86b88a]">Academic Project Developer & Lead</p>

          <p className="text-(--color-primary-text) text-sm md:text-[1rem] pt-3">
            Led and contributed to the development of academic software project,
            transforming ideas and requirements into functional applications
            while coordinating development activities.
          </p>
        </section>
      </article>
    </main>
  );
};

export default Experience;
