import Hero from "./Hero"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className='[background:var(--color-mainBackground)] h-screen w-screen justify-center flex overflow-x-hidden'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home
