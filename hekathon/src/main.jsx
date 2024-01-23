import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import App from "./App";
import { createRoot } from 'react-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
