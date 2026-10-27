const skills = [
  { name: "TypeScript", color: "#d3869b" },
  { name: "Python", color: "#b8c572" },
  { name: "Java", color: "#a76b7b" },
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
    url: "https://github.com/yourusername",
  },
  { name: "X", icon: "/x.svg", url: "https://x.com/yourusername" },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    url: "https://linkedin.com/in/yourusername",
  },
  { name: "Email", icon: "/mail.svg", url: "mailto:you@example.com" },
  {
    name: "Instagram",
    icon: "/instagram.svg",
    url: "https://instagram.com/yourusername",
  },
];

const AboutSection = () => {
  return (
    <main className="flex-5 flex flex-col justify-evenly mt-12 gap-6 md:gap-6 md:mt-0">
      <p className="text-(--color-primary-text) text-sm">~ About me</p>
      <p className="text-(--color-bold-text) font-extrabold text-xl">
        Vatsaya Singh
      </p>
      <p className="text-(--color-primary-text) text-sm">
        I'm a full-stack developer who loves building AI-powered software,
        modern web experiences, and intelligent applications.
      </p>
      <span className="flex text-sm  items-center gap-2">
        <img
          src="/pin.svg"
          className="h-4 -rotate-90 w-4"
          alt="pined project"
        />
        <div className="text-sm text-(--color-primary-text)">Building <span>Rootwise</span></div>
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
      <button className="w-fit border border-amber-50/10 text-(--color-primary-text) text-sm p-1 px-2">
        Resume
      </button>
    </main>
  );
};

export default AboutSection;
