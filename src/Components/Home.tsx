import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
import useReveal from "../Ui/useReveal"
// import Skills from "./Skills"

const Home = () => {
  useReveal()
  return (
    <div className="text-white overflow-x-hidden flex flex-col space-y-16 md:space-y-24">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />


    </div>
  )
}

export default Home
