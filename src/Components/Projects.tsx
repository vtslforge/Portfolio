const Projects = () => {
  return (
    <main className="pl-3 pr-3 pt-12 md:pt-0 space-y-6 font-poppins md:p-15 flex flex-col items-center w-full">
      <header className="flex w-full justify-between 2xl:w-3/4">
        <h1 className="text-4xl">Projects</h1>
      </header>
      <article className="flex 2xl:w-3/4 w-full">
        <section className="flex flex-row md:flex-row overflow-scroll gap-3 hide-scrollbar">
          <section className="h-80 md:h-100 lg:h-120  aspect-square">
            {/* card 1 */}
            <article className="h-full w-full bg-linear-to-tl from-[#0b072a]  to-[#020015] rounded-lg ">
              <div className="h-1/2 w-full overflow-hidden ">
                <img
                  className="rounded-t-lg h-full w-full object-center object-cover"
                  src="/port.png"
                  alt=""
                />
              </div>
              <div className="h-1/2 w-full flex flex-col pl-3 pr-3">
                <p className="h-[25%] items-center flex text-sm md:text-2xl font-source opacity-70 leading-0">
                  Tailwind React
                </p>
                <div className="h-[80%] flex flex-col justify-around">
                  <p className=" text-xl md:text-3xl leading-0">My Portfolio</p>
                  <p className="text-sm md:text-lg opacity-70 leading-0">
                    Current latest
                  </p>
                  <div className="w-full h-[20%] flex items-center gap-3">
                    <button className="lg border h-10 w-20 rounded-3xl">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </section>
          {/* card 2 start here -> */}
          <section className="h-80 md:h-100 lg:h-120 flex justify-center items-center aspect-square">
            <p className="text-4xl font-bold opacity-50">MORE TO COME</p>
          </section>
          {/* inside this up -> */}
        </section>
      </article>
    </main>
  );
};

export default Projects;
