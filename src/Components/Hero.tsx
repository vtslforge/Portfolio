const Hero = () => {
  return (
    <main className="min-h-screen w-full flex px-3 font-poppins">
      <section className="w-full flex-1 pt-20">
        <article className="h-full flex flex-col justify-around ">
          <header className="space-y-6 py-2" >
            <p className="px-3 p-2 bg-navBarBackground w-fit rounded-full text-sm">
              Avilable for work
            </p>
            <h1>
              Full Stack Developer in Progress Building modern, responsive web
              apps
            </h1>
          </header>
          <figure className="relative text-center">
            <img src="Group1.png"></img>
            <p className="absolute bottom-30 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(3.5rem,22vw,80rem)] leading-0">Vatsalya</p>
          </figure>
          <article className="space-y-6 py-2 border">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              veritatis vel saepe ad impedit quas doloribus illum beatae
              tenetur! Optio aperiam quasi deleniti officia architecto
              cupiditate incidunt, delectus suscipit maiores.
            </p>
            <button className="border rounded-full p-3 px-6">Hire Me</button>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Hero;
