import React from "react";
import mainImg from "../Assets/mainImg.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="Hero-section">
      <div>
        <h1>Little lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/bookingpage" className="">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <div>
        <img src={mainImg} alt="" />
      </div>
    </div>
  );
}
