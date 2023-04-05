import { useRoutes } from "react-router-dom";
import routes from "modules/auth/routes";

const AuthLayout = () => {
  const element = useRoutes(routes);

  return <section className="auth-layout">{element}</section>;
};

export default AuthLayout;
