import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home"
import NotFound from "./Components/NotFound"

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      errorElement:<NotFound/>,
    },
    {
      path:"*",
      element:<NotFound/>,
    }


  ])
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
