import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "store";

const RestrictAccess = (props: {
  onlyLoggedIn: boolean;
  children: JSX.Element;
}) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (props.onlyLoggedIn && !isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (!props.onlyLoggedIn && isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return props.children;
};

export default RestrictAccess;
