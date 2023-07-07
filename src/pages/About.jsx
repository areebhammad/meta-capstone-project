import React from "react";
import AboutImg1 from "../Assets/mainImg.png";

export default function About() {
  return (
    <div className="about-div">
      <div className="about-left-pan">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="about-right-pan">
        <img className="about-img1" src={AboutImg1} alt="" />
        {/* <img className="about-img2" src={AboutImg1} alt="" /> */}
      </div>
    </div>
  );
}
