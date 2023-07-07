import React from "react";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}
