import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import CourseFeatures from "../CourseFeatures/CourseFeatures";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/coursefeatures",
        element: <CourseFeatures />,
      },
    ],
  },
]);
