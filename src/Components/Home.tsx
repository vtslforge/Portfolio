import Hero from "./Hero"
import Navbar from "./Navbar"
import Skills from "./Skills"

const Home = () => {
  return (
    <div className=' flex-col w-full items-center  flex overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Skills/>


    </div>
  )
}

export default Home
