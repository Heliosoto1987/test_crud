import { createBrowserRouter } from "react-router-dom";
import { WelcomePage } from "../pages/Welcome/Welcome.view";
import { HomePage } from "../pages/Home/Home.view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);
