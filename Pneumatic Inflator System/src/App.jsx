import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from "react-router-dom";
import Layout from './components/common/Layout'
import Home from './components/Home';


const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: 'true',
        element: <Home />

      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
