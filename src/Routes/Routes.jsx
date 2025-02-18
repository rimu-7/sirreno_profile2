import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Music from "../Pages/Components/Music";
import Portfolio from "../Pages/Components/Portfolio";
import About from "../Pages/Components/About";
import Booking from "../Pages/Components/Booking";
import Events from "../Pages/Components/Events";
import Blog from "../Pages/Components/Blog";
import BlogDetail from "../Pages/Components/BlogDetails";

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
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetail/>,
      }
    ],
  },
]);
