import { createBrowserRouter } from "react-router-dom";
import AuthModuleLayout from "../layout/AuthLayout";
import AuthModuleRoutes from "../modules/auth/routes";

import HomeModuleLayout from "../layout/HomeLayout";
import HomeModuleRoutes from "../modules/home/routes";
import RestrictAccess from "components/RestrictAccess";

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <RestrictAccess onlyLoggedIn={false}>
        <AuthModuleLayout />
      </RestrictAccess>
    ),
    children: AuthModuleRoutes,
  },
  {
    path: "/home/*",
    element: (
      <RestrictAccess onlyLoggedIn>
        <HomeModuleLayout />
      </RestrictAccess>
    ),
    children: HomeModuleRoutes,
  },
]);

export default router;
