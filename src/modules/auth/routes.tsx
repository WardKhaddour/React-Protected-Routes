import { RouteObject } from "react-router-dom";
import Login from "./pages/Login";

const routes: RouteObject[] = [
  {
    path: "",
    element: <Login />,
    index: true,
  },
];

export default routes;
