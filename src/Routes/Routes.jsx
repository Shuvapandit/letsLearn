import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import CourseModule from "../Components/Home/CourseModule/CourseModule";
import CourseFeatures from "../Components/CourseFeatures/CourseFeatures";
import LogIn from "../Components/Shared/LogIn/Login";
import SignUp from "../Components/Shared/SignUp/SignUp";
import Enroll from "../Components/EnrollmentPages/Enroll/Enroll";

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
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/enroll",
        element: <Enroll />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
