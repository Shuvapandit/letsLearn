import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import CourseModule from "../Components/Home/CourseModule/CourseModule";
import CourseFeatures from "../Components/CourseFeatures/CourseFeatures";
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
        path: "/coursefeatures",
        element: <CourseFeatures />,
      },
      {
        path: "/coursemodule",
        element: <CourseModule />,
      },
    ],
  },
]);
