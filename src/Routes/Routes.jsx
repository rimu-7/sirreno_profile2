import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Components/Blog";
import Contact from "../Pages/Components/Contact";
import Events from "../Pages/Components/Events.jsx";

import BlogDetail from "../Pages/Components/BlogDetails.jsx";
import Music from "../Pages/Components/Music.jsx";
import Portfolio from "../Pages/Components/Portfolio.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      
      {
        path: "/booking",
        element: <Contact />,
      },

      {
        path: "/events",
        element: <Events />,
      },

      {
        path: "/blogdetails/:id",
        element: <BlogDetail />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);