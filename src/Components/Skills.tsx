const Skills = () => {
  return (
    <main className="pl-3 pr-3 pt-12 md:pt-0 space-y-6 font-poppins md:p-15 flex flex-col items-center w-full">
      <article className="flex 2xl:w-3/4 w-full">
        <section className="flex flex-col md:flex-row  gap-3 hide-scrollbar w-full">
          {/* card 2 start here -> */}
          <section className="h-fit w-screen gap-3 flex flex-col">
            <h1 className="text-4xl" id="skills" >Skills</h1>
            <h1 className="w-full text-lg opacity-70 mt-3">Languages</h1>
            <div className="flex gap-3 flex-wrap">
              <p className="bg-white/10 p-2 rounded-xl">TypeScript</p>
              <p className="bg-white/10 p-2 rounded-xl">JavaScript</p>
              <p className="bg-white/10 p-2 rounded-xl">Java (Basic)</p>
            </div>

            <h1 className="w-full text-lg mt-6 opacity-70">Databases</h1>
            <div className="flex gap-3 flex-wrap">
              <p className="bg-white/10 p-2 rounded-xl">MongoDB</p>
              <p className="bg-white/10 p-2 rounded-xl">MySQL</p>
            </div>

            <h1 className="w-full text-lg mt-6 opacity-70">Frameworks</h1>
            <div className="flex gap-3 flex-wrap">
              <p className="bg-white/10 p-2 rounded-xl">React</p>
              <p className="bg-white/10 p-2 rounded-xl">Express.js</p>
            </div>

            <h1 className="w-full text-lg mt-6 opacity-70">Other</h1>
            <div className="flex gap-3 flex-wrap">
              <p className="bg-white/10 p-2 rounded-xl">HTML</p>
              <p className="bg-white/10 p-2 rounded-xl">CSS</p>
              <p className="bg-white/10 p-2 rounded-xl">Tailwind CSS</p>
            </div>
          </section>
          {/* about me  */}
          <section className="h-fit gap-3 flex flex-col mt-6 md:mt-0 w-full">
            <h1 className="text-4xl"  >About Me</h1>

            <h1 className="w-full opacity-70 mt-3">
              Hello, I’m Vatsalya Singh!<br></br>I’m a self-taught full-stack
              web developer based in Uttar Pradesh, India. I enjoy building
              responsive, modern web applications from scratch and turning ideas
              into clean, user-friendly digital experiences.I’m constantly
              learning, improving my skills, and working on real-world projects.
            </h1>
            <h1 id="about" className="w-full text-lg mt-6">Education</h1>
            <p className="w-full opacity-70">Presidency University</p>
            <p className="w-full opacity-70">Bachelor of Computer Applications (BCA)</p>
          </section>
        </section>
      </article>
    </main>
  );
};

export default Skills;
