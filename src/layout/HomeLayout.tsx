import { useRoutes } from "react-router-dom";
import routes from "modules/home/routes";

const HomeLayout = () => {
  const element = useRoutes(routes);

  return <section className="home-layout">{element}</section>;
};

export default HomeLayout;
