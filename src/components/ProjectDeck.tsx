
const ProjectDeck = () => {
  const projects = [
    {
      projectName: "OrbitSpace",
      description:
        "OrbitSpace is a personal productivity and learning workspace. It brings task planning, a learning library, and saved resources together in one dashboard.",

      tech: [
        { name: "TypeScript", color: "#d3869b" },
        { name: "React", color: "#88bfb3" },
        { name: "Clerk Auth", color: "#a76b7b" },
        { name: "Tailwind CSS", color: "#88bfb3" },
        { name: "React Player", color: "#d4be98" },
      ],

      image: "/Projects/orbitSpace.png",
      link: "https://orbitspace16.netlify.app/",
      github: "https://github.com/vtslforge/OrbitSpace",
    },
  ];

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
          Projects
        </h2>
      </div>

      {/* Projects Cards */}
      <div className="mt-3 flex flex-col gap-3">
        {projects.map((project) => (
          <article
            key={project.projectName}
            aria-labelledby={`project-${project.projectName}`}
            className="border border-amber-50/10 mt-3 flex flex-col md:flex-row gap-3 p-3 hover:border-[#b9c57244]"
          >
            {/* Project Image */}
            <figure className="aspect-video flex-1">
              <img
                src={project.image}
                alt={`Screenshot of ${project.projectName} application`}
                className="object-cover h-full w-full"
                loading="lazy"
              />
            </figure>

            {/* Project Details */}
            <div className="aspect-video flex-1 flex flex-col gap-3">

              <h3
                id={`project-${project.projectName}`}
                className="text-lg text-[#b8c572]"
              >
                {project.projectName}
              </h3>

              <p className="text-(--color-primary-text) text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <ul
                className="flex flex-wrap gap-x-1 gap-y-1"
                aria-label={`Technologies used in ${project.projectName}`}
              >
                {project.tech.map((tech) => (
                  <li
                    key={tech.name}
                    className="w-fit border border-amber-50/10 p-1 px-2 text-[12px] cursor-default"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>

              {/* Project Links */}
              <div className="mt-auto flex flex-wrap gap-2">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.projectName} live demo (opens in a new tab)`}
                  className="inline-flex items-center justify-center"
                >
                  <span className=" w-fit border border-amber-50/10 text-(--color-primary-text) text-sm p-1 px-2 hover:border-[#b9c57244] cursor-pointer">Live Demo</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.projectName} source code on GitHub (opens in a new tab)`}
                  className="inline-flex items-center justify-center"
                >
                  <span className=" w-fit border border-amber-50/10 text-(--color-primary-text) text-sm p-1 px-2 hover:border-[#b9c57244] cursor-pointer">Source Code</span>
                </a>

              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default ProjectDeck;
