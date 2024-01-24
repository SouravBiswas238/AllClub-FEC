import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import App from "./App";
import { createRoot } from 'react-dom';
import SingleClubs from "./pages/SingleClubs/SingleClubs";
import Layout from "./pages/Navbar/Layout";
import './index.css'

const router = createBrowserRouter([
  
  {
    
    path: "/",
    element: <Layout> <App /></Layout>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
     
    ],
  },
  {
    path: "/clubs/:id",
    element: <Layout>
              <SingleClubs />
            </Layout>,
  },
  {
    path: "/contact",
    element: <Layout>
              <Contact />
            </Layout>,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
