
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'


import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Layout from './Layout/Layout'
import Contact from './pages/Contact'
import ErrorPage from './components/ErrorPage'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element: <Home />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/checkout",
          element: <Checkout />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    },
    




  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
