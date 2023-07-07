import React from "react";
import { data } from "../data/testimonialData";

export default function Testimonials() {
  const TestimonialCards = data.map((datas) => (
    <div className="Testimonial-card" key={datas.id}>
      <h3>Rating</h3>
      <div className="Testimonial-divider">
        <>
          <img src={datas.img} alt="Testimonial Images" />
        </>
        <div className="Testimonial-col">
          <h3>{datas.name}</h3>
          <p>{datas.review}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="Testimonial-main">
      <h1>Testimonial</h1>
      <div className="Testimonial-wrapper">
        <>{TestimonialCards}</>
      </div>
    </div>
  );
}
