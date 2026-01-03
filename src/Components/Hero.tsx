import SvgComponent from "../Ui/SvgComponent"
import { RiGithubFill, RiGlobalLine, RiExternalLinkLine } from "@remixicon/react";

const Hero = () => {
    return (
        <div className='h-full w-full'>
            <div className='h-3/4 flex items-center'>
                {/* name intro */}
                <div className='h-[80%] w-1/2 flex flex-col justify-center items-center'>
                    <section className="h-[80%] w-2/3 font-poppins flex flex-col justify-evenly">
                        <p className="text-fadeBlack">Full Stack Developer in Progress</p>
                        <h1 className="text-6xl font-bold tracking-wide">Hello,<br></br>My name is Vatsalya Singh</h1>
                        <p className="text-fadeBlack">Building modern, responsive web apps with a focus on performance, scalability, and SEO. Experienced with React on the frontend and currently learning backend development to create complete, well-structured products</p>
                    </section>
                </div>
                {/* picture profile */}
                <div className='h-[80%] w-1/2 flex flex-col justify-center items-center '>
                    <SvgComponent />
                </div>
            </div>
            {/* Development timeline */}
            <div className='h-1/4 flex items-center justify-evenly pl-30 pr-30 font-poppins'>
                <div className="h-[80%] aspect-video flex flex-col items-start justify-center space-y-6">
                    <p className="text-2xl font-bold text-fadeBlack">Most work-in-progress and experiments live on GitHub.</p>
                    <a href="https://github.com/vtslforge" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full min-w-30 flex items-center justify-evenly cursor-pointer">Github<RiGithubFill /></a>
                </div>
                <div className="flex space-x-3 h-[80%] w-1//2">
                <div className="border-3 border-navbarBorderColor rounded-2xl bg-navBarBackground h-full aspect-video p-3 flex flex-col gap-3 "><RiGlobalLine className="bg-purple-400 size-10 p-1 rounded-full text-fadeBlack" />
                    <span className="flex space-x-3"><p className="font-bold">Forgelin</p><a href="https://forgelin.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><RiExternalLinkLine /></a></span>
                    <p className="text-fadeBlack">Game updates and featured content worth exploring</p>
                    <div className="flex justify-between items-center"><p className="text-sm ">Currently in Beta</p><p className="text-sm bg-purple-400 rounded-full pl-3 p-1 pr-3">Blog Site</p></div>
                </div>
                 <div className="border-3 border-navbarBorderColor rounded-2xl bg-navBarBackground h-full aspect-video p-3 flex flex-col justify-center items-center gap-3 ">
                    <span className="flex space-x-3"><p className="font-bold">Cooking more</p></span>
                    <p className="text-fadeBlack">More projects are on the way</p>
                    
                </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
