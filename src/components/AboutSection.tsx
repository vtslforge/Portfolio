const skills = [
  { name: "TypeScript", color: "#d3869b" },
  { name: "Python", color: "#b8c572" },
  { name: "Java", color: "#a76b7b" },
  { name: "React", color: "#86b88a" },
  { name: "Node.js", color: "#b8c572" },
  { name: "Express", color: "#88bfb3" },
  { name: "Tailwind CSS", color: "#88bfb3" },
  { name: "Figma", color: "#88bfb3" },
  { name: "PostgreSQL", color: "#ef7d6e" },
  { name: "Docker", color: "#86b88a" },
  { name: "Vercel", color: "#d4be98" },
  { name: "Git", color: "#e0b05e" },
  { name: "Notion", color: "#f09658" },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: "/github.svg",
    url: "https://github.com/vtslforge",
  },
  { name: "X", icon: "/x.svg", url: "https://x.com/sudo_npc" },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    url: "https://www.linkedin.com/in/vtslforge",
  },
  { name: "Email", icon: "/mail.svg", url: "mailto:singhvatsalya16@gmail.com" },
  {
    name: "Instagram",
    icon: "/instagram.svg",
    url: "https://www.instagram.com/",
  },
];

const AboutSection = () => {
  return (
    <main className="flex-5 flex flex-col justify-evenly mt-10 gap-8 md:gap-9 md:mt-0">
      <p className="text-(--color-primary-text) text-sm">~ About me</p>
      <p className="text-(--color-bold-text) font-extrabold text-xl md:text-2xl">
        Vatsaya Singh
      </p>
      <p className="text-(--color-primary-text) text-sm md:text-[1rem]">
        I'm a full-stack developer who loves building AI-powered software,
        modern web experiences, and intelligent applications.
      </p>
      <span className="flex text-sm  items-center gap-2">
        <img
          src="/pin.svg"
          className="h-4 -rotate-90 w-4"
          alt="pined project"
        />
        <div className="text-sm md:text-[1rem] text-(--color-primary-text)">
          Building
          <a href="https://github.com/vtslforge/Rootwise.git">
            <span className="text-[#f09658]"> Rootwise</span>
          </a>
        </div>
      </span>
      <section className="flex flex-wrap gap-x-1 gap-y-1">
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{ color: skill.color }}
            className="w-fit p-1 border border-amber-50/10 text-[12px] cursor-default px-2"
          >
            {skill.name}
          </div>
        ))}
      </section>
      <section className="flex items-center gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.name === "Email" ? undefined : "_blank"}
            rel={social.name === "Email" ? undefined : "noopener noreferrer"}
            aria-label={social.name}
            title={social.name}
          >
            <img src={social.icon} alt="" className="h-5 w-5" />
          </a>
        ))}
      </section>
      <button className=" md:text-[1rem] w-fit border border-amber-50/10 text-(--color-primary-text) text-sm p-1 px-2 hover:border-[#b9c57244] cursor-pointer">
        Resume
      </button>
    </main>
  );
};

export default AboutSection;
