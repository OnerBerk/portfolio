import {createBrowserRouter} from "react-router-dom";
import HomePage from "../home.page";
import StampPage from "../stamp.page";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/stamp",
    element: <StampPage />,
  },
]);
