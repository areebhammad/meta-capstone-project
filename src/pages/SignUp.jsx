import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAccountCreated) {
      navigate("/signin");
    }
  }, [isAccountCreated, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      setMessage("An account with this username already exists.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    const user = { username, password };
    localStorage.setItem(username, JSON.stringify(user));
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setMessage("Account created successfully!");
    setIsAccountCreated(true);
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="username" className="mb-2">
            Username
          </label>
          <input
            type="text"
            className="form-control mb-4"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className=" mb-2">
            Password
          </label>
          <input
            type="password"
            className="form-control mb-4"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control mb-4"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {message && <p className="text-danger">{message}</p>}
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-4 mb-4">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
