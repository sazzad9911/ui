import React, { useRef, useEffect } from "react";
import Header from "../Contents/Header";
import { Parallax, ParallaxLayer, useScroll } from "@react-spring/parallax";
import { useDispatch } from "react-redux";
import { alert } from "../action";
import Post from "../Contents/Post";
import Graph from "../Contents/Graph";
import Viewer from "../Contents/anim";
import StartBox from "../Contents/Home/StartBox";
import OurProject from "../Contents/Home/OurProject";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div >
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className=" max-w-[1500px] w-full ">
          <StartBox/>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{ backgroundColor: "rgba(163, 163, 163, 0.317)" }}
      />
      <ParallaxLayer
        offset={1}
        speed={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <OurProject/>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{ backgroundColor: "rgba(163, 163, 163, 0.317)" }}
      />
      <ParallaxLayer
        offset={2}
        speed={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Post />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={1}
        style={{ backgroundColor: "rgba(163, 163, 163, 0.317)" }}
      />
      <ParallaxLayer
        offset={3}
        speed={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Graph />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={1}
        style={{ backgroundColor: "rgba(163, 163, 163, 0.317)" }}
      />
    </div>
  );
};

export default Home;
