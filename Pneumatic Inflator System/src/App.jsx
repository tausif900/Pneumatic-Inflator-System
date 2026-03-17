import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from "react-router-dom";
import Layout from './components/common/Layout';
import Home from './Routes/Home';
import Sales from './Routes/Sales';
import Purchase from './Routes/Purchase';
import Billing from './Routes/Billing';
import Products from './Routes/Products';
import Reports from './Routes/Reports';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Admin from './Routes/Admin';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'sales',
        element: <Sales />,
        children: [
          {
            path: "billing",
            element: <Billing />
          },
        ],
      },

      {
        path: 'admin',
        element: < Admin />,
      },
      {
        path: 'purchase',
        element: <Purchase />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },

    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
