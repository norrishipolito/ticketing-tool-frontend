import { RouteObject } from "react-router-dom";
import { Login, Home, Projects } from "../pages";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
const routes: RouteObject[] = [
  {
    element: <AuthOutlet fallbackPath="/login" />,
    children: [
      {
        element: <Home />,
        index: true,
        path: "/",
      },
      {
        element: <Projects />,
        index: true,
        path: "/projects",
      },
    ],
  },
  {
    path: "/login",
    children: [
      {
        element: <Login />,
        index: true,
      },
    ],
  },
];

export default routes;
