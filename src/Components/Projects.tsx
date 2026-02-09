import { RiArrowRightUpLine, RiShareForwardLine } from "@remixicon/react";

const projects = [
  {
    title: "Portfolio",
    stack: "React + Tailwind",
    description: "Personal portfolio focused on performance and clean UX.",
    status: "Live",
    link: "https://github.com/vtslforge/Portfolio",
  },
  {
    title: "College Media",
    stack: "Full-stack",
    description:
      "A campus-focused media platform for posts, events, and student updates.",
    status: "In progress",
    link: "https://github.com/vtslforge/collegeMedia",
  },
  {
    title: "Social Connect",
    stack: "Full-stack",
    description:
      "A centralized app where users link Instagram, Reddit, and Facebook IDs to track engagement.",
    status: "In progress",
    link: "https://github.com/vtslforge/socialConnect",
  },
];

const Projects = () => {
  return (
    <main className="px-6 md:px-12 pt-16 md:pt-12 space-y-10 font-poppins flex flex-col items-center w-full">
      <header className="flex w-full justify-between 2xl:w-3/4 reveal">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl" id="project">
            Projects
          </h1>
          <p className="text-sm md:text-base opacity-70 max-w-xl">
            A small selection of work focused on speed, polish, and business
            outcomes. I can share deeper case studies on request.
          </p>
        </div>
      </header>
      <section className="grid gap-8 w-full 2xl:w-3/4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b072a] to-[#020015] overflow-hidden flex flex-col card-float reveal cinematic-sheen"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="h-52 w-full p-6 flex flex-col justify-between border-b border-white/10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/15 via-transparent to-white/5" />
              <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.25em] opacity-70">
                <span>{project.stack}</span>
                <span className="text-[#00F5FF]">{project.status}</span>
              </div>
              <div className="relative">
                <p className="text-2xl md:text-3xl font-semibold">
                  {project.title}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-60">
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00F5FF]/70" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-px flex-1 bg-white/10" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-6">
              <p className="text-sm opacity-70 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    navigator.share?.({ url: window.location.href })
                  }
                  aria-label="share"
                  className="flex gap-2 w-fit px-4 py-2 items-center justify-center rounded-2xl border border-white/10 hover:border-white/30 transition"
                >
                  <RiShareForwardLine />
                  Share
                </button>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm uppercase tracking-[0.2em] text-[#00F5FF] border border-[#00F5FF]/40 hover:border-[#00F5FF] transition"
                  >
                    View Repo
                    <RiArrowRightUpLine />
                  </a>
                ) : (
                  <span className="text-xs uppercase tracking-[0.2em] opacity-50">
                    Case study soon
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Projects;
