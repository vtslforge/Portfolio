import SvgComponent from "../Ui/SvgComponent"
import {
  RiGithubFill,
  RiGlobalLine,
  RiExternalLinkLine,
} from "@remixicon/react"

const Hero = () => {
  return (
    <section className="w-full flex flex-col font-poppins">
      {/* Top Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 pt-24 pb-16 gap-12 2xl:pl-40">
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <p className="text-fadeBlack text-sm">
            Full Stack Developer in Progress
          </p>

          <h1 className="text-3xl lg:text-5xl text-fadeBlack font-bold tracking-wide leading-tight">
            Hello,
            <br />
            My name is Vatsalya Singh
          </h1>

          <p className="text-fadeBlack text-sm md:text-lg max-w-xl">
            Building modern, responsive web apps with a focus on performance,
            scalability, and SEO. Experienced with React on the frontend and
            currently learning backend development to create complete,
            well-structured products.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-[clamp(280px,40vw,520px)] aspect-square overflow-hidden">
            <SvgComponent className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>

      {/* Development Timeline */}
      <div className="w-full px-4 pb-20 flex flex-col xl:flex-row gap-8 xl:items-center xl:justify-between 2xl:pl-40">
        {/* GitHub */}
        <div className="max-w-md flex flex-col space-y-6">
          <p className="text-2xl font-bold text-fadeBlack">
            Most work-in-progress and experiments live on GitHub.
          </p>

          <a
            href="https://github.com/vtslforge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full w-fit"
          >
            GitHub <RiGithubFill />
          </a>
        </div>

        {/* Projects */}
        <div className="flex flex-col md:flex-row gap-4 w-full xl:max-w-3xl">
          {/* Project Card */}
          <div className="flex-1 border-2 border-navbarBorderColor rounded-2xl bg-navBarBackground p-5 flex flex-col gap-4">
            <RiGlobalLine className="bg-purple-400 size-10 p-2 rounded-full text-fadeBlack" />

            <div className="flex items-center gap-2">
              <p className="font-bold">Forgelin</p>
              <a
                href="https://forgelin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiExternalLinkLine />
              </a>
            </div>

            <p className="text-fadeBlack">
              Game updates and featured content worth exploring
            </p>

            <div className="flex justify-between items-center text-sm">
              <p>Currently in Beta</p>
              <span className="bg-purple-400 rounded-full px-3 py-1">
                Blog Site
              </span>
            </div>
          </div>

          {/* Placeholder Card */}
          <div className="flex-1 border-2 border-navbarBorderColor rounded-2xl bg-navBarBackground p-5 flex flex-col items-center justify-center gap-3">
            <p className="font-bold">Cooking more</p>
            <p className="text-fadeBlack text-center">
              More projects are on the way
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
