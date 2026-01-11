import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
// import Skills from "./Skills"

const Home = () => {
  return (
    <div className='overflow-x-hidden text-white flex flex-col'>
      <Hero/>
      <Navbar/>
      <Projects/>
      <Skills/>


    </div>
  )
}

export default Home
