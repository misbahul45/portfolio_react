import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './components/parents/Home'

const App = () => {
  const router=createBrowserRouter([
    {
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
