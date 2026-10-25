import { Routes, Route } from "react-router"
import Layout from "./layout/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  )
}

export default App
