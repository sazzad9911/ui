import React from "react";
import { Parallax, ParallaxLayer, useScroll } from "@react-spring/parallax";
import { useRef } from "react";
import Header from "../Contents/Header";
import Footer from "../Contents/Footer";

export default function MainLayout({ component }) {
  const parallaxRef = useRef();
  return (
    <div>
      <Header />
     
    </div>
  );
}
