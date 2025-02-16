import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Music from "../Pages/Components/Music";

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
        element: <Music />, // Music
      },
    ],
  },
]);