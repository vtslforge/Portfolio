import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
// import Skills from "./Skills"

const Home = () => {
  return (
    <div className=' text-white  flex flex-col'>
      <Hero/>
      <Navbar/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default Home
