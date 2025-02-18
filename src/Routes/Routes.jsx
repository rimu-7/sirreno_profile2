import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Music from "../Pages/Components/Music";
import Portfolio from "../Pages/Components/Portfolio";
import About from "../Pages/Components/About";
import Contact from "../Pages/Components/Contact";
import Events from "../Pages/Components/Events";
import Blog from "../Pages/Components/Blog";

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
        path: "/music",
        element: <Music />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
