const Hero = () => {
  return (
    <main className="min-h-screen w-full flex px-3 font-poppins">
      <section className="w-full flex-1 pt-20">
        <article className="h-full flex flex-col justify-around ">
          <header className="flex flex-col justify-evenly h-full w-full">
            <article className="flex lg:hidden ">
              <p className="text-2xl w-1/2">
                Full Stack Developer in Progress Building modern, responsive web
                apps
              </p>
            </article>
            <figure className="relative text-center flex justify-center items-center h-[60%] lg:h-2/3">
              <img className="" src="/awww.png"></img>
              <p className="absolute bottom-9 md:bottom-30 leading-0 text-[clamp(3.5rem,22vw,80rem)]">
                Vatsalya
              </p>
              <article className="lg:absolute top-10 hidden lg:flex">
                <p className="text-2xl w-1/3">
                  Full Stack Developer in Progress Building modern, responsive
                  web apps
                </p>
                <div className="w-1/3"></div>
                <p className="text-2xl w-1/3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur veritatis vel saepe ad impedit quas doloribus illum
                  beatae tenetur! Optio aperiam quasi deleniti
                </p>
              </article>
            </figure>
            <p className="text-2xl w-full pt-7 lg:hidden">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              veritatis vel saepe ad impedit quas doloribus illum beatae
              tenetur! Optio aperiam quasi deleniti
            </p>
          </header>
        </article>
      </section>
    </main>
  );
};

export default Hero;
