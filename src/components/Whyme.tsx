const Whyme = () => {
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
          Why Me?
        </h2>
      </div>

      <article className="border border-amber-50/10 p-3 mt-6 ">
        <p className="text-(--color-primary-text) text-sm md:text-[1rem] leading-relaxed">
          I'm a developer who enjoys writing code, exploring new technologies,
          and turning ideas into reality. There's always something new I'm
          curious to learn or experiment with.
          <br />
          <br />
          I may not know everything, but I learn quickly, enjoy solving
          problems, and am always willing to figure things out.
          <br />
          <br />
          I believe in understanding how things work, building useful software,
          and getting a little better every day.
          <br />
          <br />
          And yes, I'm single, but my code is committed.
        </p>
      </article>
    </main>
  );
};

export default Whyme;
