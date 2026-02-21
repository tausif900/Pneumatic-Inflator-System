import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from "react-router-dom";
import Layout from './components/common/Layout'
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'registration',
        element:<Registration/>
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'*',
        element:<NotFound/>
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
