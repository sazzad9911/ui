"use client";
import StartBox from "./components/StartBox";
import OurProject from "./components/OurProject";
import { useRef } from "react";
import Technologies from "./components/Technologies";
import Partners from "./components/Partners";
import PreceduralAndTechnologies from "./components/ProceduralAndTechnologies";


const Home = () => {
  const parallaxRef = useRef();

  return (
    <div>
      <StartBox />
      <div className="lg:my-32 md:my-24 my-16">
        <OurProject />
      </div>
      <div className="lg:my-32 md:my-24 my-16">
        <Technologies></Technologies>
      </div>
      <div className="lg:my-32 md:my-24 my-16">
        <PreceduralAndTechnologies></PreceduralAndTechnologies>
      </div>
      <div className="lg:my-32 md:my-24 my-16">
        <Partners></Partners>
      </div>
    </div>
  );
};
export default Home;
