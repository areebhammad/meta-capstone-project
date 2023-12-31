import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function SignIn() {
  const [saveSignIn, setSaveSignIn] = useState(false);
  const [error, setError] = useState("");
  const { setUsername } = useContext(UserContext);
  const { setSignInStatus } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const savedUser = localStorage.getItem(username);
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user.password === password) {
        setUsername(username);
        setSignInStatus(true); // Set sign in status to true

        navigate("/menu");
        return;
      }
    }
    setError("Invalid Username or password");
  }

  const navToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <div className="form-group mt-4 mb-4">
          <label htmlFor="username" className="mb-2">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            autoComplete="off"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            autoComplete="off"
            placeholder="Enter password"
            required
          />
          {error && <p className="text-danger mt-2 mb-0">{error}</p>}
        </div>

        <div className="form-group form-check mt-4 mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="saveSignIn"
            checked={saveSignIn}
            onChange={() => setSaveSignIn(!saveSignIn)}
          />
          <label className="form-check-label" htmlFor="saveSignIn">
            Save Sign In
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-4 mb-4">
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-3 text-center">
        Don't have an account?{" "}
        <Link to="/signup" onClick={navToSignUp}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
