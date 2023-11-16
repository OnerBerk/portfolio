import {createBrowserRouter} from "react-router-dom";
import HomePage from "../home.page";
import StampPage from "../stamp.page";
import Layout from "../../components/layout/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/stamp",
        element: <StampPage />,
      },
    ],
  },
]);
