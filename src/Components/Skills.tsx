const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Java (Basic)"],
    },
    {
      title: "Frameworks",
      skills: ["React", "Express.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Prisma"],
    },
    {
      title: "Tooling",
      skills: ["Git", "Vite", "Postman", "Figma"],
    },
  ];

  return (
    <main className="px-6 md:px-12 pt-16 md:pt-12 space-y-10 font-poppins flex flex-col items-center w-full">
      <section className="flex flex-col 2xl:w-3/4 w-full gap-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <article className="space-y-4 reveal">
            <h1 className="text-4xl md:text-5xl" id="skills">
              Skills
            </h1>
            <p className="opacity-70 leading-relaxed">
              A flexible stack optimized for modern frontend work and reliable
              backend foundations. I focus on clean architecture and
              maintainable code.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 card-float reveal"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <h3 className="text-sm uppercase tracking-[0.25em] opacity-70">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/10 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
          <article className="space-y-4 reveal">
            <h1 className="text-4xl md:text-5xl">About Me</h1>
            <p className="opacity-70 leading-relaxed">
              Hello, I am Vatsalya Singh, a self-taught full-stack web developer
              based in Bengaluru, India. I enjoy building responsive, modern web
              applications from scratch and turning ideas into clean,
              user-friendly digital experiences. I am constantly learning,
              improving my skills, and working on real-world projects.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 card-float reveal">
                <p className="text-sm uppercase tracking-[0.25em] opacity-70">
                  Education
                </p>
                <p className="mt-3 text-lg">Presidency University</p>
                <p className="opacity-70">Bachelor of Computer Applications</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 card-float reveal">
                <p className="text-sm uppercase tracking-[0.25em] opacity-70">
                  Focus Now
                </p>
                <p className="mt-3 text-lg">Full-stack apps</p>
                <p className="opacity-70">
                  Performance, SEO, and great UX.
                </p>
              </div>
            </div>
            <p id="about" className="text-sm uppercase tracking-[0.25em] opacity-70">
              Available for internships and freelance work.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Skills;
