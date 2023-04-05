import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { authActions } from "store/authSlice";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(authActions.setIsLoggedIn(true));
  };
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="form-control">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
