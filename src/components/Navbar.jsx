import React from "react";
import Logo from "../Assets/Logo.png";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);
  const { setUsername } = useContext(UserContext);
  function handleSignOut() {
    setUsername("");
    navigate("/signin");
  }
  return (
    <nav className="Navbar-main">
      <Link to="/">
        <img src={Logo} alt="Little Lemon Restaurant Logo" />
      </Link>
      <ul className="Navbar-links">
        <li className="Nav-link-child">
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li className="Nav-link-child">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="Nav-link-child">
          <NavLink to="/menu" activeClassName="active">
            Menu
          </NavLink>
        </li>
        <li className="Nav-link-child">
          <NavLink to="/bookingpage" activeClassName="active">
            Reservation
          </NavLink>
        </li>
        <li className="Nav-link-child">
          <NavLink to="/order" activeClassName="active">
            Order Online
          </NavLink>
        </li>
        <li className="Nav-link-child">
          <NavLink to="/profile" activeClassName="active">
            {username ? username : "Profile"}
            <ul>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/signin">Sign In</NavLink>
              </li>
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </ul>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
