import React from "react";
import Logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-main">
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <div className="footer-right">
        <ul>
          <h3>Navigation</h3>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/bookingpage">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/signin">Login</Link>
          </li>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li>
            <a href="https://www.google.com/maps/place/Shenoy+Nagar,+Aminjikarai,+Chennai,+Tamil+Nadu+600030/@13.0694355,80.2291839,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526687fc773243:0x6425f7821f2d3501!8m2!3d13.0695305!4d80.231771!16s%2Fm%2F02x4h8t?entry=ttu">
              Address
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/Shenoy+Nagar,+Aminjikarai,+Chennai,+Tamil+Nadu+600030/@13.0694355,80.2291839,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526687fc773243:0x6425f7821f2d3501!8m2!3d13.0695305!4d80.231771!16s%2Fm%2F02x4h8t?entry=ttu">
              Phone Number
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/Shenoy+Nagar,+Aminjikarai,+Chennai,+Tamil+Nadu+600030/@13.0694355,80.2291839,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526687fc773243:0x6425f7821f2d3501!8m2!3d13.0695305!4d80.231771!16s%2Fm%2F02x4h8t?entry=ttu">
              Email
            </a>
          </li>
        </ul>
        <ul>
          <h3>Social Media</h3>
          <li>
            <a target="__blank" href="https://www.instagram.com">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.Twitter.com">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
