import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { authActions } from "store/authSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const logoutHandler = () => {
    dispatch(authActions.setIsLoggedIn(false));
  };
  return (
    <div className="home-page">
      <h2>Home</h2>

      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
